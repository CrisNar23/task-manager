const sgMail = require('@sendgrid/mail')

const fromEmail = 'cristian_naranjo_15@hotmail.com'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: fromEmail,
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: fromEmail,
    subject: 'Sorry to see you go!',
    text: `Hello, ${name}. We wanna know why you has canceled your account?`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}

// sgMail.send({
//   to: 'cristian_naranjo_15@hotmail.com',
//   from: 'cristian_naranjo_15@hotmail.com',
//   subject: 'This is my first creation!',
//   text: 'I hope this one actually get to you.'
// })

// .then(res => console.log(res)) // see the response
// .catch(e => console.log(e)) // see the error if


