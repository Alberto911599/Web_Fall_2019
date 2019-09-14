let btnPost = document.getElementById("btnPost");
let btnClr = document.getElementById("btnClr");
let btnSet = document.getElementById("btnSet");
let btnDel = document.getElementById("btnDel");


btnPost.addEventListener("click", function(event){
	event.preventDefault();
	newElement();
});

btnClr.addEventListener("click", function(event){
	event.preventDefault();
	clearToDos(false);
});

btnSet.addEventListener("click", function(event){
	event.preventDefault();
	clearToDos(true);
});

btnDel.addEventListener("click", function(event){
	event.preventDefault();
	deleteChildren();
});

function newElement() {
	var li = document.createElement("li");
	var x = document.createElement("INPUT");
	x.setAttribute("type", "checkbox");
  	li.appendChild(x);
	var inputValue = document.getElementById("newTask").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === '') {
		alert("You must write something!");
	} else {
		console.log("posting");
		document.getElementById("listOfToDos").appendChild(li);
	}
	document.getElementById("newTask").value = "";
}

function clearToDos(state){
	var list = document.getElementsByTagName("li");
	console.log(list.length);
	for(var i = 0; i < list.length; i++){
		list[i].getElementsByTagName("input")[0].checked = state;
	}
}

function deleteChildren(){
	var e = document.getElementById("listOfToDos"); 
    //e.firstElementChild can be used. 
    var child = e.lastElementChild;  
    while (child) { 
        e.removeChild(child); 
        child = e.lastElementChild; 
    } 
}