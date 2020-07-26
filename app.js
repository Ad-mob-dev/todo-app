var list = document.getElementById("list");
var i=0;

function add(){
var inp = document.getElementById("todo");
if(inp.value !== ""){
  var li = document.createElement("li");
var todo = document.createElement("span");
var ltext = document.createTextNode(inp.value);
todo.appendChild(ltext);
todo.className += " bg-dark text-white p-2 m-1 mr-2 d-inline ml-1";
li.appendChild(todo);
list.appendChild(li);
li.className += "list-group-item-light list-group-item-action";

inp.value = "";

// edit btn
var ebtn = document.createElement("button");
var etext = document.createTextNode("Edit");
ebtn.className += "btn-outline-info btn m-2";
ebtn.setAttribute("onclick","edit(this)");
ebtn.appendChild(etext);
li.appendChild(ebtn);


// del btn
var dbtn = document.createElement("button");
var dtext = document.createTextNode("Delete");
dbtn.className += "btn-outline-danger btn m-2";
dbtn.setAttribute("onclick","del(this)");
dbtn.appendChild(dtext);
li.appendChild(dbtn);

// delete all btn
var dallbtn = document.createElement("button");
var dalltext = document.createTextNode("Delete ALL");
dallbtn.className += "btn-outline-danger btn m-2";
dallbtn.setAttribute("onclick","delall()");
dallbtn.appendChild(dalltext);
li.appendChild(dallbtn);

}else{
  alert("you Can not Add Blank ToDo");
}

}

function delall(){
  list.innerHTML = "";


}



function del(kk){
kk.parentNode.remove();
}

function edit(e){
  var v =  e.parentNode.childNodes[0].childNodes[0].nodeValue;
var einput = prompt("Edit your value",v);
    e.parentNode.childNodes[0].childNodes[0].nodeValue =  einput;
}
