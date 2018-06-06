var path = require('path')
var express = require('express')
var webpack = require('webpack')
const bodyParser = require('body-parser');
const config = require('./webpack.config.dev')
const sgMail = require('@sendgrid/mail');

var app = express();
const apiKey = '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';//API KEY VALID for sometime only
sgMail.setApiKey(apiKey);
app.use(bodyParser.json());

var compiler = webpack(config)


app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
)

app.use(require('webpack-hot-middleware')(compiler))

app.post('/send_mail',(req,res)=>{
  const msg = {
    to: 'gkverma1094@gmail.com',//Please provide ur email-id here :}
    from: req.body.email,
    subject: req.body.subject,
    text: req.body.message,
    html: `<strong>${req.body.message}</strong>`,
  };
  sgMail.send(msg);
  res.send('sending mail to admin');
})

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3030, 'localhost', function(err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:3030')
})
