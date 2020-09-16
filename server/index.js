const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
var webPage = require('webpage');
var page = webPage.create();

page.paperSize = {
  width: '5in',
  height: '5in'
};
const pdfTemplate = require('./documents');
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/create-pdf',(req,res) => {
      var options = {"height": 5in",        // allowed units: mm, cm, in, px
  "width": "5in",header: {  "height": "5mm"},footer: { "height": "5mm"}, border:{top:'30px',bottom:'30px',left:'10px'}}

pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf',(err)=> {
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
