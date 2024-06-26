<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>form</title>
    <link rel="stylesheet" href="./form.css">
</head>
<body>
    <h1>FORM</h1>
    <label for="fname">firstname</label>
   <input name="fname"></input><br>
   <br>
<label  for="sname">secondname</label>
   <input name = "sname">

   <fieldset>
    <legend>Other Info</legend>
<label for="fav-lang">Favorite Language : </label>
<select id="fav-lang">
    <optgroup label="">


   
    <option>HTML</option>
    <option>CSS</option>
    <option>Javascript</option>
</optgroup>
<optgroup label="Backend">



    <option>Express.js</option>
    <option>Node.js</option>
    <option>Mongodb</option>
    </optgroup>
</select><br>




<textarea rows="8" cols="50">Type Something....</textarea><br>







<datalist id="data">
    <option value="HTML"></option>
    <option value="css"></option>
    <option value="Javascript"></option>
    <option value="Mongodb"></option>
    <option value="SQL"></option>
</datalist>










</fieldset>

</body>
</html>
