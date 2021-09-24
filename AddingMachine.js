var sum = 0;
var iteration = 0;

function add(x)
{
  sum=sum+x;
  iteration++;
  printit();
}

function printit()
{
  document.getElementById("r1").innerHTML = "Sum: " + sum;
  document.getElementById("r2").innerHTML = "Iteration: " + iteration;
}

function clearit()
{
  sum = 0;
  iteration = 0;
  document.getElementById("r1").innerHTML = "";
  document.getElementById("r2").innerHTML = "";
}
