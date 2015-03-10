var numCurrMeds=0;
var currMeds=["Med1", "Med2", "Med3"];
var itrtMeds=[];
var nextPage;

function addMed(){
	var page=document.getElementById("page1")
	if (page.value=="med1"){
		nextPage="Med1.html";		
	}
	else if(page.value=="med2"){
		nextPage="Med2.html";
	}
	else if(page.value=="med3"){
		nextPage="Med3.html";
	}
	document.getElementById("add").href=nextPage;

}

function addMed1(){
	var page=document.getElementById("page2")
	if(page.value=="med2"){
		nextPage="Meds12.html";
		document.getElementById("add").href=nextPage;
		
	}
	else if(page.value=="med3"){
		nextPage="Meds13.html";
		document.getElementById("add").href=nextPage;


	}
}


function addMed2(){
	var page=document.getElementById("page2")
	if(page.value=="med1"){
		nextPage="Meds12.html";
		document.getElementById("add").href=nextPage;
		
	}
	else if(page.value=="med3"){
		nextPage="Meds23.html";
		document.getElementById("add").href=nextPage;


	}
}

function addMed3(){
	var page=document.getElementById("page2")
	if(page.value=="med1"){
		nextPage="Meds13.html";
		document.getElementById("add").href=nextPage;
		
	}
	else if(page.value=="med2"){
		nextPage="Meds23.html";
		document.getElementById("add").href=nextPage;


	}
}

function allMeds(){
	var page=document.getElementById("page");
			document.getElementById("add").href="Meds123.html";

}

