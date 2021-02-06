// Create a "close" button and append it to each list item
var litag= document.getElementsByTagName("LI");
var i ;
//litag length = <li> number in html ,litag[0]= li lowel...
for (i=0; i < litag.length; i++){
	//<span> dakhlo X closing tag => ndiroh dakhel ga3 les <li> tags
	// wich means mt9drsh dir close class dakhel <li> fhtml psq li jded li tzidhom b js mayjish fihom close tag X
	// hadi for tzidlek lkol <li> X close tag class b style ta3o 
	var span= document.createElement("SPAN");
	var cls= document.createTextNode("\u00D7");
	span.className= "close";
	span.appendChild(cls);
	litag[i].appendChild(span);
}




// Click on a close button to hide the current list item
// <span> is child of <li>
var btn= document.getElementsByClassName("close");
var i;
for (i=0; i< btn.length; i++){
	btn[i].onclick = function(){
		var parent= this.parentElement;
		parent.style.display = 'none';
	}
}




// apply class "checked"  when clicking on a list item

/* querySelector() returns the first Element within the document that matches the specified selector =ol,
 or group of selectors. If no matches are found, null is returned ,,hna it returns ga3 elements dakhel <ol> wahed mor khoh btartib */
var list = document.querySelector('OL');
list.addEventListener('click', function(event) {
	////The target event property returns the element that triggered the event.,either click or load or....hna =click ,li => majuscule
  if (event.target.tagName === 'LI') {
  	/* mala if m3naha if clicked element = <li> , tbdelo classlist b checked, kon ndiro add when click tetbdel class
  	  bsah ki t3awd tkliki mt3awdsh twli kima kanet, toggle=add+remove on click */
    event.target.classList.toggle("checked");
  }
},false);
// addeventlistener(type,function,useCapture(optional)  )  ==> addeventlistener expression
/* *****type/event => mouseevents,keyboard events.windowevents..=> oclick,dblclick,keydown,load...
   *****function =>the function to run when the event occurs,When the event occurs, an event object is passed to function as the first parameter
  The type of the event object depends on the specified event ,For example, the "click" event belongs to the MouseEvent object.
   *****usecapture =>  true =The event handler is executed in the capturing phase,,false=Default: executed in the bubbling phase
   bubbling=> 3ndk <p> dakhel <form> dakhel <div> execution will be p>form>div = mel sghir lel kibr parent
   capturing= l3ax */



// create new task with input and add button
function newtask(){
	// put input inside <li></li>
	var li= document.createElement("LI");
	var val=document.getElementById("inpt").value;
	var txt=document.createTextNode(val);
	li.appendChild(txt);
	if (val=== '') {
		alert("please enter a valid task");
	}
	else {
		document.getElementById("list").appendChild(li);
	}
	
	//clear input after adding task
	document.getElementById("inpt").value= "";
	var span= document.createElement("SPAN");
	var txt=document.createTextNode("\u00D7");
	span.className= "close";
	span.appendChild(txt);
	li.appendChild(span);
	for (var i=0;i< btn.length; i++){
		//btn = les <span> li 3ndhom class close= closing button X 
		btn[i].onclick= function(){
			// onclick 3la span li rana fih = this => parent ta3o=<li> ta3o yroh,,
			//this = current span jdid li zednah ,tsma had display t3 function yne7i ghir <li> jded li zednahom 
			var parnt= this.parentElement;
			parnt.style.display = 'none';
		}
	}
}