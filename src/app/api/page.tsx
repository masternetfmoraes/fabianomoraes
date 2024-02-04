import nodemailer from 'nodemailer';

export default async function handler(req: { method: string; body: { nome: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: any; success?: boolean; message?: string; }): void; new(): any; }; }; }) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const transporter = nodemailer.createTransport({
    // Configurações do seu serviço de e-mail (por exemplo, Gmail)
    service: 'seu-servico-de-email',
    auth: {
      user: 'seu-email@gmail.com',
      pass: 'sua-senha-do-email',
    },
  });

  const mailOptions = {
    from: 'seu-email@gmail.com',
    to: 'destinatario@gmail.com',
    subject: 'Assunto do e-mail',
    text: 'Texto do e-mail',
    html: `<b>Hello world?</b>
           <b>Teste de Email<b><hr /> <h1>Teste</h1><br /><h6>Teste de h6</h6>
           ${JSON.stringify(req.body.nome)}
          `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
