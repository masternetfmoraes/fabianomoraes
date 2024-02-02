const nodemailer = require('nodemailer');
//const config = require('../../../config.local')
export default function sendEmail(req, res){
    let transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: 'moraes_18@hotmail.com',
        pass: '*f3d3r1c03*',
      },
    })
    const mailOptions = {
      from: 'moraes_18@hotmail.com',
      to: 'moraes_18@hotmail.com',
      subject: 'Assunto do e-mail',
      text: 'Tesxto do email',
      html: `<b>Hello world?</b>
      <b>Teste de Email<b><hr /> <h1>Teste</h1><br /><h6>Teste de h6</h6>
      `, // html body
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('E-mail enviado: ' + info.response);
      }
    });
}