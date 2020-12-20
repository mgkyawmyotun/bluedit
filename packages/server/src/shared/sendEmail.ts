import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '../config';

export class EmailCient {
  public static async sendForgetEmail(email: string, url: string) {
    const msg = {
      to: email,
      from: 'k.7m8t6@gmail.com',
      subject: 'Forget Password Request (Bluedit) ',
      html: `
      <h1>Change Your Password (Bluedit)</h1>
                      <br>
      <a href="${url}"><h3>Click Here To Chage your Password</h3></a>
    `,
    };
    sgMail.setApiKey(SENDGRID_API_KEY);
    sgMail.send(msg).catch(console.log);
  }
}
