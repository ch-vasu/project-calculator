var dispExp="";
var originalExp="";
disp=document.getElementById("input-data");
basic=document.getElementById("basic");
advanced=document.getElementById("advanced");
bas=document.getElementById("bas");
adv=document.getElementById("adv");

//advance buttons referemces

root=document.getElementById("root");
rem=document.getElementById("rem");
div=document.getElementById("div");
mul=document.getElementById("mul");
sub=document.getElementById("sub");
add=document.getElementById("add");
pi=document.getElementById("pi");

function reset(){
  dispExp="";
  originalExp="";
  adv.checked=true;
  disp.value=0;
  disp.style.border="2px solid black";
  disp.style.color="black";
  disp.style.textAlign="left";
}
function expression(orig,dup){
  dispExp +=dup;
  originalExp +=orig;
  disp.value=dispExp;
  console.log(originalExp,dispExp);
}
function calculate(){
  let evalValue;
  try{
  evalValue=eval(originalExp);
  }
  catch (err){
    evalValue="Syntax Error";
    disp.style.borderColor="red";
    disp.style.color="red";
    disp.style.textAlign="center";
    disp.value="Syntax error";
  }
  disp.value=evalValue.toFixed(4);
}

function change(){
  if(basic.checked){
  bas.style.color="lime";
  adv.style.color="white";
    add.innerHTML="+";
    add.setAttribute("onclick","expression('+','+')");

    sub.innerHTML="-";
    sub.setAttribute("onclick","expression('-','-')");

    mul.innerHTML="X";
    mul.setAttribute("onclick","expression('*','*')");

    div.innerHTML="/";
    div.setAttribute("onclick","expression('/','/')");

    rem.innerHTML="Rem";
    rem.setAttribute("onclick","expression('%','%')");

    root.innerHTML="\u221A";
    root.setAttribute("onclick","expression('Math.sqrt(','\u221A (')");

    pi.innerHTML="PI";
    pi.setAttribute("onclick","expression('Math.PI','PI')");
  }
  else {
    adv.style.color="lime";
    bas.style.color="white";
    add.innerHTML="sin";
    add.setAttribute("onclick","expression('Math.sin(Math.PI/180*','sin(')");

    sub.innerHTML="cos";
    sub.setAttribute("onclick","expression('Math.cos(Math.PI/180*','cos(')");

    mul.innerHTML="tan";
    mul.setAttribute("onclick","expression('Math.tan(Math.PI/180*','tan(')");

    div.innerHTML="sinh";
    div.setAttribute("onclick","expression('Math.sinh(Math.PI/180*','sinh(')");

    rem.innerHTML="cosh";
    rem.setAttribute("onclick","expression('Math.cosh(Math.PI/180*','cosh(')");

    root.innerHTML="tanh";
    root.setAttribute("onclick","expression('Math.tanh(Math.PI/180*','tanh(')");

    pi.innerHTML="\u03A0 ";
    pi.setAttribute("onclick","expression('180','\u03A0')");
  }

}
