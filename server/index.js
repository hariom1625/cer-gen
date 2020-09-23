const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const pdfTemplate = require('./documents');
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get('/', (_, res) => {
  res.send('<h1>Hello from Express Server!</h1>');
});
app.post('/create-pdf',(req,res) => {

pdf.create(pdfTemplate(req.body), { "height": "8.7in",        // allowed units: mm, cm, in, px
  "width": "9.8in",
   border:{top:'0',bottom:'0'},
   header: {  "height": "0"},footer: { "height": "0"}

}).toFile('result.pdf',(err)=> {
if(err) {
res.send(Promise.reject());
}

res.send(Promise.resolve());
});


});

app.get('/fetch-pdf', (req,res) => {
res.sendFile(`${__dirname}/result.pdf`)
})



app.listen(port, () => console.log(`Server started on port ${port}`));
