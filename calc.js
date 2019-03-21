var result;
result="";
function reset(){
  result="";
  document.getElementById("input-data").value=0;
}
function inputExpression(data){
    result +=data;
    // window.alert(result);
    document.getElementById("input-data").value=result;
}

function calculate(){
  let evalValue;
  evalValue=document.getElementById("input-data").value;
  evalValue=eval(evalValue);
  document.getElementById("input-data").value=evalValue;
  result=evalValue;
}
