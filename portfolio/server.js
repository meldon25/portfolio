const App = require('express')()
const nodemailer = require('nodemailer')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const PORT = process.env.PORT || 3001

App.use(cors())
App.use(bodyparser.urlencoded({ extended: true }))
App.use(bodyparser.json())


const main = async (req, res) => {
    const {name, email, message} = req.body
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: true, // true for 465, false for other ports
        auth: {

            user: process.env.MAILER_EMAIL, // generated ethereal user
            pass: process.env.MAILER_PASSWORD // generated ethereal password
        }
    });

    // send mail with defined transport object
    await transporter.sendMail({
        from: process.env.MAILER_EMAIL, // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: `Thanks ${name} for reaching out! I'll get back to you shortly.`, // plain text body
    });

    await transporter.sendMail({
        from: email, // sender address
        to: process.env.MAILER_EMAIL, // list of receivers
        subject: "Contact", // Subject line
        text: `${name} has sent you a message: ${message}`, // plain text body
    });
    res.json({msg: "Message Sent"})
}

App.post('/', main)

App.listen(PORT, ()=> console.log(`App listening ${PORT}`))