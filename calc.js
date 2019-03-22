var result;
result="";
function reset(){
  result="";
  document.getElementById("input-data").value=0;
  document.getElementById("input-data").style.border="2px solid black";
  document.getElementById("input-data").style.color="black";
}
function inputExpression(data){

    result +=data;

    document.getElementById("input-data").value=result;
}

function calculate(){
  let evalValue;
  evalValue=document.getElementById("input-data").value;
  try{
    evalValue=eval(evalValue);
  }
  catch(err){
    document.getElementById("input-data").style.border="2px solid red";
    document.getElementById("input-data").style.color="red";

    evalValue="Syntax Error";
  }
  document.getElementById("input-data").value=evalValue;
  result=evalValue;
}
