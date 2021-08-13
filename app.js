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
app.use(xss())
app.use(helmet());
app.use(hpp())
app.use(cors())

app.set('trust proxy', 1);

const limiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, 
    max: 100
  });
  
  //  apply to all requests
  app.use(limiter);
  app.use(express.json())
  
  // POST REQUEST
  app.post('/',
  body('name').trim().escape().not().isEmpty().withMessage('Name is required'),
  body('email').trim().escape().not().isEmpty().withMessage('Email is required'),
body('message').trim().escape().not().isEmpty().withMessage('Message is required'),
body('email').isEmail().withMessage('Enter a valid email')
,(req, res) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email , message, name} = req.body

  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "001a0981ff4e35",
      pass: "08d3d2697a6d6d"
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
    }


  });

  res.status(200).json({
    msg: 'Message sent'
  })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running at ${PORT}`))