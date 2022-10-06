
import nodemailer from "nodemailer"
export const register = async (req, res) => {
    const {uid, processCompleted, displayName, username, completed, email} = req.body
    

    const transport = nodemailer.createTransport({
        service: "gmail",
       
        auth: {
            user: "jemmir1997@gmail.com",
            pass: "zembohgicvysajxj"               
            
           }
    })

    await transport.sendMail({
        from: '"Admin" <admin@example.com>',
        to: email,
        subject: "Register on link tree by Javier",
     
        html: `<b>Welcome to my own page, thank you for giving it a try, in order to use your account you have to confirm it </b><a href="${process.env.PATHHEROKU || "http://localhost:3000"}/confirm/${uid}" >Clicking here<a>`,
})
    }