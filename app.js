const express = require('express');
const cors = require('cors');
const hpp = require('hpp');
const helmet = require('helmet');
const xss = require('xss-clean')
const rateLimit = require("express-rate-limit");
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

const app = express();

// middlewares
app.use(cors())
app.use(xss())
app.use(helmet());
app.use(hpp())


app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, 
  max: 1000
});

//  apply to all requests
app.use(limiter);

// POST REQUEST
app.post('/',
body('name').not().isEmpty().trim().escape().withMessage('Name is required'),
body('email').not().isEmpty().trim().escape().withMessage('Email is required').isEmail().withMessage('Enter a valid email'),
body('message').not().isEmpty().trim().escape().withMessage('Message is required')
,(req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email , message, name} = req.body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'elsalvacion2022@gmail.com',
      pass: 'Barrow@2020'
    }
  });
  
  const mailOptions = {
    from: email,
    to: 'alieukeita201@gmail.com',
    subject: `You have a message from ${name}`,
    text: message
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
     res.status(400).status({
       errors: [
         {
          msg: "Couldn't send email"
         }
       ]
     })
    } else {
      res.status(200).json({
        msg: 'Message sent'
      })
    }
  });
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running at ${PORT}`))