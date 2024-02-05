import nodemailer from 'nodemailer';

export default async function sendEmail(data: any, response: any) {
  try {
    let transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: 'webdev2024@hotmail.com',
        pass: 'senha123',
      },
    });

    const mailOptions = {
      from: 'Contato do Site <webdev2024@hotmail.com>',
      to: 'webdev2024@hotmail.com',
      subject: 'Assunto do e-mail',
      text: 'Tesxto do email',
      html: `<b>Hello world?</b>
      <b>Teste de Email<b><hr /> <h1>Teste</h1><br /><h6>Teste de h6</h6>
      ${JSON.stringify(data)}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail enviado: ' + info.response);
    //response.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error(error);
    //response.status(500).json({ error: 'Erro ao enviar o e-mail' });
  }
}
