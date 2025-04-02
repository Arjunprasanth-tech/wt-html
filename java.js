//var userInput=prompt("enter your name")
//	console.log("hello,"+ userInput);
//alert("welcomemr indhuchudan")
//console.log("poda poyi tharathil poyi kaliyaddaa")
//document.write("<p>hi moneee nannayi mon onum cheyathe</p>")
//function kuttan(){
//document.getElementById("heading").innerHTML="poyidaa";
//}

	function vali()
	{
		var email= document.getElementById("output").value;
		var emailPattern=/^.*@.*.$/;
		if(!emailPattern.test(email))
			{
				alert("error");
			}
	}
 	function valid()
	{
		var passwo=document.getElementById("passw").value;
		if(passwo.length<6||passwo.length>12)
		{
				alert("password must be g than 6 and l than 12")
		}
	}	

//function valid()
//{
//	var passwo=document.getElementById("passw").value;
//	if(passwo.length<6||passwo.length>12)
//	{
//		alert("password must be g than 6 and l than 12")
//	}
//}


	