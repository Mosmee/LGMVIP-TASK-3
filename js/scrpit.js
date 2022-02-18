var list1=[];
var list2=[];
var list3=[];
var list4=[];
var list5=[];
var list6=[];
var list7=[];
var list0=[];

var n=1;
var x=0;

function onFormSubmit()
{
let prerequisite =document.forms[0];
let txt="";
let i;
for (i=0;i<prerequisite.length;i++)
{
    if(prerequisite[i].checked){
        txt=txt+prerequisite[i].value + "";
    }
}
    var onFormSubmit = document.getElementById("cousreList");
    var NewRow = onFormSubmit.insertRow(n);
    list0[x] = document.getElementById("mr").value;
    list1[x] = document.getElementById("Name").value;
    list2[x] = document.getElementById("course1").value;
    list3[x] = document.getElementById("pre").value = txt;
    list4[x] = document.getElementById("gender").value;
    list5[x] = document.getElementById("date").value;
    list6[x] = document.getElementById("email").value;
    list7[x] = document.getElementById("phone").value;
var cell1=NewRow.insertCell(-1);
var cell2= NewRow.insertCell(1);
var cell3= NewRow.insertCell(2);
var cell4= NewRow.insertCell(3);
var cell5= NewRow.insertCell(4);
var cell6= NewRow.insertCell(5);
var cell7= NewRow.insertCell(6);
var cell8= NewRow.insertCell(7);

cell1.innerHTML = list0[x];
cell2.innerHTML = list1[x];
cell3.innerHTML = list2[x];
cell4.innerHTML = list3[x];
cell5.innerHTML = list4[x];
cell6.innerHTML = list5[x];
cell7.innerHTML = list6[x];
cell8.innerHTML = list7[x];

n++;
x++;

}