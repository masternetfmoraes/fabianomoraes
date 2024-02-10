"use server"
import nodemailer from 'nodemailer';
interface Request {
  name: string;
  email: string;
  assunto: string;
  texto: string;
}
export default async function POST(request: Request) {
 
  try {
    const { name, email, assunto, texto } = request;

    // Configurar o transporte do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: 'webdev2024@hotmail.com',
        pass: 'senha123',
      },
    });

    // Configurar o email a ser enviado
    const mailOptions = {
      from: 'Contato do site<webdev2024@hotmail.com>',
      to: 'webdev2024@hotmail.com',
      subject: 'assunto',
      text: `Olá ${JSON.stringify(name)} este é um exemplo de e-mail enviado com o Nodemailer!
      ${JSON.stringify(email)}`,
      html: `
      Enviado por
      <p>${JSON.stringify(name)}</p>
      <p>${JSON.stringify(email)}</p>
      <br />
      <p>${assunto}</p>
      <hr />
      ${texto}`
    };

    // Enviar o email
    await transporter.sendMail(mailOptions);

    //return Response.json({ name, email, assunto });
  } catch (error) {
    console.error(error);
    //return Response.json({ error: 'Ocorreu um erro ao processar a solicitação' }, { status: 500 });
  }
}
