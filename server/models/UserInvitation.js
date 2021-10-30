import _ from 'lodash'
import nodemailer from 'nodemailer'
import { ConfigurationId } from '../../common/models/Configuration'
import { isValidSmtpSetting } from './Configuration'

const MAIL_TEMPLATE_INTERPOLATE = /%%([\s\S]+?)%%/g

export default UserInvitation => {
  UserInvitation.observe('after save', async ctx => {
    if (ctx.isNewInstance) {
      const invitation = ctx.instance
      await _sendMail(invitation.email, invitation.id)
    }
  })
  async function _sendMail (to, invitationId) {
    const mailSettings = await UserInvitation.app.models.Configuration.find({
      where: {
        id: {
          inq: [
            ConfigurationId.MAIL_USER_INVITATION,
            ConfigurationId.MAIL_SMTP_SETTINGS
          ]
        }
      }
    })
    const {
      MAIL_USER_INVITATION: mailInvitationConfig,
      MAIL_SMTP_SETTINGS: smtpSettingConfig
    } = _.keyBy(mailSettings, 'id')
    if (!isValidSmtpSetting(smtpSettingConfig.data)) {
      return
    }

    const nodeMailer = nodemailer.createTransport({
      host: smtpSettingConfig.data.smtpHost,
      port: smtpSettingConfig.data.smtpPort,
      auth: {
        user: smtpSettingConfig.data.username,
        pass: smtpSettingConfig.data.password
      }
    })

    const baseUrl = process.env.BASE_URL
    var link = `${baseUrl}/signup?userInvitationId=${invitationId}`
    const html = _.template(mailInvitationConfig.data.message, {
      interpolate: MAIL_TEMPLATE_INTERPOLATE
    })({
      LINK: link
    })

    try {
      await nodeMailer.sendMail({
        to,
        from: mailInvitationConfig.data.senderEmail,
        subject: mailInvitationConfig.data.subject,
        html
      })
    } catch (e) {
      console.error(e)
    }
  }
}
