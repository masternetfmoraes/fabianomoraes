import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const name = "Fabiano";
    const email = "seu-email@hotmail.com";
    const assunto = "assunto";

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
      from: 'webdev2024@hotmail.com',
      to: 'webdev2024@hotmail.com',
      subject: 'assunto',
      text: `Olá  este é um exemplo de e-mail enviado com o Nodemailer!`
    };

    // Enviar o email
    await transporter.sendMail(mailOptions);

    return Response.json({ name, email, assunto });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Ocorreu um erro ao processar a solicitação' }, { status: 500 });
  }
}
