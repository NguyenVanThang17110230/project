import nodemailer from 'nodemailer'

export default class NodeMailerEmailGateway {
  constructor ({ host, port, user, pass }) {
    this.config = {
      host,
      port,
      auth: {
        user,
        pass
      }
    }
    this.nodeMailer = nodemailer.createTransport(this.config)
  }

  async send ({ to, from, subject, html }) {
    return this.nodeMailer.sendMail({ to, from, subject, html })
  }
}
