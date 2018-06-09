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

app.set('port',(process.env.PORT || 5000));

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
)

app.use(require('webpack-hot-middleware')(compiler))

app.post('/send_mail',(req,res)=>{
  const msg = {
    to: req.body.email,//Please provide ur email-id here :}
    from: 'gkverma1094@gmail.com',
    subject: req.body.subject,
    text: req.body.message,
    html: `<strong>${req.body.message}</strong>`,
  };
  sgMail.send(msg);
  res.send('sending mail to admin');
  console.log("mail send");
})

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(app.get('port'), function(err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:5000')
})
