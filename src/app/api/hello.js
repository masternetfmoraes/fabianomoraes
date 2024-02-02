const nodemailer = require('nodemailer');
export default function sendEmail(req, res){
    let transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:'587',
        auth:{
            user: process.env.USERMAIL,
            pass: process.env.PASSMAIL
        }
    })
    transporter.sendMail({
        from: `"Criar Sites"<${process.env.USERMAIL}>`, // sender address
        to: process.env.USERMAIL, // receiver (use array of string for a list)
        replyTo: req.body.email,
        subject: 'Contato atravez do site', // Subject line
        html: '<p>Your html here</p>'// plain text body
    }).then((response)=>{
        res.send(response)
    })
    .catch((error)=>{
        res.send(error)
    })
}