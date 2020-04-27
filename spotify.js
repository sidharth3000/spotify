function myFunction(x) {
  x.classList.toggle("change");
}

function closeNav()
{
	document.getElementById("mySidenav").style.width = "0";
	    document.getElementById("main").style.marginLeft = "0";
	    // document.body.style.backgroundColor = "black";
	    // document.body.style.opacity = "1"
	    document.getElementById("main").style.backgroundColor = "black";
		document.getElementById("main").style.opacity = "1";

		document.getElementById("main2").style.marginLeft = "0";
	    // document.body.style.backgroundColor = "black";
	    // document.body.style.opacity = "1"
	    document.getElementById("main2").style.backgroundColor = "black";
		document.getElementById("main2").style.opacity = "1";
		document.getElementById("containerr").style.opacity = "1";
}

function openNav() {

	if(document.getElementById("mySidenav").style.width !== "250px")
	{
		document.getElementById("mySidenav").style.width = "250px";
		document.getElementById("main").style.marginLeft = "250px";
		// document.body.style.backgroundColor = "black"
		// document.body.style.opacity = "0.5"
		// document.getElementById("mySidenav").style.opacity = "1";
		document.getElementById("main").style.backgroundColor = "black";
		document.getElementById("main").style.opacity = ".5";

		document.getElementById("main2").style.marginLeft = "250px";
		// document.body.style.backgroundColor = "black"
		// document.body.style.opacity = "0.5"
		// document.getElementById("mySidenav").style.opacity = "1";
		document.getElementById("main2").style.backgroundColor = "black";
		document.getElementById("main2").style.opacity = ".5";
		document.getElementById("containerr").style.opacity = "1";
	}

	else
	{
		document.getElementById("mySidenav").style.width = "0";
	    document.getElementById("main").style.marginLeft = "0";
	    // document.body.style.backgroundColor = "black";
	    // document.body.style.opacity = "1"
	    document.getElementById("main").style.backgroundColor = "black";
		document.getElementById("main").style.opacity = "1";

		document.getElementById("main2").style.marginLeft = "0";
	    // document.body.style.backgroundColor = "black";
	    // document.body.style.opacity = "1"
	    document.getElementById("main2").style.backgroundColor = "black";
		document.getElementById("main2").style.opacity = "1";
	}  
}


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function play()
{

	
		document.getElementById("main").style.display ="none";
		document.getElementById("main2").style.display="block";
		
	
	
	
}

function home()
{
	document.getElementById("main").style.display ="block";
		document.getElementById("main2").style.display="none";
}






