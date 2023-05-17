<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Proyectitos PHP</title>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <style>
    body {
      background-color: #000000;
      /* Black background */
      color: #ffffff;
      /* White font color */
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }

    .group {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px;
    }

    button {
      background-color: darkblue;
      /* Dark blue background */
      color: #ffffff;
      /* White font color */
      text-align: center;
      /* Center the text */
      padding: 10px 20px;
      /* Adjust the padding to increase the button size */
      border-radius: 10px;
      /* Rounded corners */
      outline: none;
      /* Remove the outline when button is active */
    }

    button.return {
      color: #ffffff;
      /* White font color */
    }
  </style>
</head>
<div>
  <center>

    <body>
      <h2> Square a Number in PHP </h2><br>

      <form method="post">
        Give a Number <input type="text" name="num" />
        <button type="submit" title="Click here to compute square value"> Compute </button>
      </form>
      <br> <!-- Add an extra line break for spacing -->

    </body>


    <?php
    if ($_POST) {
      $num = $_POST['num'];
      $compute = ($num * $num);

      echo "The square value of $num is $compute.";
    }
    ?>
  </center>
</div>


<br>
<br>
<br>
<br>
<br>


<div>
  <center>

    <body>
      <h2> Palindrome Checker in PHP </h2>
      <br>
      <form method="post">
        Input String/Number <input type="text" name="num" />
        <button type="submit">Check Palindrome </button>
      </form>
      <br> <!-- Add an extra line break for spacing -->
    </body>

</html>

<?php
if ($_POST) {
  $num = $_POST['num'];

  $reverse = strrev($num);

  if ($num == $reverse) {
    echo "The given string/number $num is a Palindrome.";
  } else {
    echo "The given string/number $num is Not a Palindrome.";
  }
}
?>
</center>
</div>

<br>
<br>
<br>
<br>
<br>


<div>
  <center>

    <h2> Factorial Program using loop in PHP </h2>
    <br>

    <body>
      <form method="post">
        Enter the Number:
        <input type="number" name="number" id="number">
        <button type="submit">Compute </button>
      </form>
      <br>
      <?php
      if ($_POST) {
        $fact = 1;
        //getting value from input text box 'number'  
        $number = $_POST['number'];
        echo "The Factorial of $number is equal to ";
        //start loop  
        for ($i = 1; $i <= $number; $i++) {
          $fact = $fact * $i;
        }
        echo $fact;
      }
      ?>
  </center>
</div>



<br>
<br>
<br>
<br>
<br>


</body>

</html>
