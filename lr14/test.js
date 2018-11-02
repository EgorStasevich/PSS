function privet(){
 alert("simple massege");
  result=confirm("check the button");
   if(result==true){
document.write("it was ok");
}else{
document.write("it was cancel");

}
}
function picture(){

  result=confirm("like it");
alert("ok");

};


function ame(){

name=prompt("input name");
document.write("Have a good day "+ name);
};


function FIO(){

name=prompt("input name");
sername=prompt("input sername");
lastname=prompt("input lastname");
sername=sername[0];
lastname=lastname[0];
document.write("Добрый день, "+ name.toUpperCase()+" "+sername.toUpperCase()+"."+lastname.toUpperCase()+"."+" Мы рады приветствовать вас на сайте "+"<a href history.go()>назад</a>");

};

function sume(){
 x=prompt("insert x");
 y=prompt("insert y");
z=Number(x)+Number(y);
alert(x+"+"+y+"="+z);
}

function T5(){


document.write("<h1>работа с датами</h1>");
var date1 = new Date();
alert(date1);
var date2 = new Date(1981,9,30);
alert(date2);
var date3 = new Date(prompt("year"),prompt("mounth"),prompt("day"));
alert(date3);

document.write(date3.getDay());
}