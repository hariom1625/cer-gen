module.exports = ({name}) => {

return `
<!DOCTYPE html>
<html lang="en" dir="ltr">
      <head>
            <meta charset="utf-8">
            <title></title>
            <link href="https://fonts.googleapis.com/css2?family=Lora&family=Pinyon+Script&display=swap" rel="stylesheet">

<style >
      body{
            font-family: 'Lora', serif;
      }

      h1,h4,h5{
      text-align: center;
      }
      table{
      margin-top: 70px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 50px;
      }
      td{
      text-align: center;
      }
      .background{
            border-style: solid;
            border-width: thick;
            color: #747043;
      }
      .border-light{
      border-style: solid;
      color: #747043;
      border-width: 2px;
      margin: 10px;
      }
      .container{

            margin-left: auto;
            margin-right: auto;
      }
      .big-head{
      padding-top: 50px;
      font-family: 'Pinyon Script', cursive;
      font-size: 3rem;
      color: #747043;
      text-align: center;
      }
      .pre-name{
      font-size: 0.7rem;
      }
      .name{
      font-size: 4rem;
      }
      .post-name{
      font-size: 0.7rem;

      }
      .td0{
      width: 400px;
      text-align: center;
      }
      .td1{
      width: 400px;
      text-align: center;
      }
      .names{
      font-size: 1rem;
      font-weight: bold;
      }
      .designation{
      font-size: 0.9;
      }
</style>

      </head>

      <body>
            <div class="container square">
<div class="background">
<div class="border-light">
      <h1 class="big-head"> Certificate of Appreciation </h1>

      <h4 class="pre-name">This award is given to</h4>
<h1 class="name">${name}</h1>
<h5 class="post-name">for garnering 1st Honors in Academic Excellence </h5>
<h5 class="post-name">for the school year 2020-2021</h5>



<table>

<tr class="names">
<td class="tr0 td0">  weryh eyey</td>
<td class="tr0 td1">yery eyeyw</td>
</tr>
<tr class="designation">
      <td class="tr1 td0"> Director</td>
      <td class="tr1 td1"> Faculty in Charge </td>
</tr>
</table>

</div>
</div>


            </div>
      </body>
</html>



`;

};
