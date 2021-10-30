import _ from 'lodash'
import nodemailer from 'nodemailer'
import { ConfigurationId } from '../../common/models/Configuration'
import { isValidSmtpSetting } from './Configuration'

const MAIL_TEMPLATE_INTERPOLATE = /%%([\s\S]+?)%%/g

export default Invitation => {
  Invitation.observe('after save', async ctx => {
    if (ctx.isNewInstance) {
      const invitation = ctx.instance
      await _sendMail(invitation.email, invitation.id)
    }
  })

  async function _sendMail (to, referId) {
    const mailSettings = await Invitation.app.models.Configuration.find({
      where: {
        id: {
          inq: [
            ConfigurationId.MAIL_FRIEND_REFERAL,
            ConfigurationId.MAIL_SMTP_SETTINGS
          ]
        }
      }
    })

    const {
      MAIL_FRIEND_REFERAL: mailInvitationConfig,
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

    const html = _.template(mailInvitationConfig.data.message, {
      interpolate: MAIL_TEMPLATE_INTERPOLATE
    })({
      // LINK: `${baseUrl}/signup?referId=${referId}`,
      IMAGE_PART: `${baseUrl}/static/images/email/invitation-part.png`,
      IMAGE_LOGO: `${baseUrl}/static/images/email/new-link-white.png`
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

  Invitation.disableRemoteMethodByName('replaceOrCreate')
  Invitation.disableRemoteMethodByName('exists')

  Invitation.disableRemoteMethodByName('createChangeStream')
  Invitation.disableRemoteMethodByName('count')
  Invitation.disableRemoteMethodByName('findOne')
  Invitation.disableRemoteMethodByName('updateAll')
  Invitation.disableRemoteMethodByName('upsertWithWhere')
  Invitation.disableRemoteMethodByName('replaceById')
  Invitation.disableRemoteMethodByName('prototype.patchAttributes')
}
