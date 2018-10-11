function validateForm()
{

	if(document.forms["myForm"]["name"].value=="")
	{
		alert("Name must be filled out");
		document.getElementById("name").focus();
        return false;
    }
  

	if(document.forms["myForm"]["surname"].value=="")
	{
		alert("Surname must be filled out");
		document.getElementById("surname").focus();
        return false;
    }

	if(document.forms["myForm"]["email"].value=="")
	{
		alert("Email must be filled out");
		document.getElementById("email").focus();
        return false;
    }
	
	if(document.forms["myForm"]["phone"].value=="")
	{
		alert("Phone No. must be filled out");
		document.getElementById("phone").focus();
        return false;
    }
	
	if(document.forms["myForm"]["password"].value=="")
	{
		alert("Password must be filled out");
		document.getElementById("password").focus();
        return false;
    }
	
	

	
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(	document.forms["myForm"]["email"].value.match(mailformat))
		{
			document.getElementById("phone").focus();
			return true;
		}
		else
		{
			alert("You have entered an invalid email address!");
			document.getElementById("email").value = "";
			document.getElementById("email").focus();
			return false;
		}
		
		
		var myInput = document.getElementById("password");
	
		myInput.onkeyup = function() 
		{
			  // Validate lowercase letters
			  var lowerCaseLetters = /[a-z]/g;
			  if(myInput.value.match(lowerCaseLetters)) {  
				letter.classList.remove("invalid");
				letter.classList.add("valid");
			  } else {
				letter.classList.remove("valid");
				letter.classList.add("invalid");
			  }
			  
			  // Validate capital letters
			  var upperCaseLetters = /[A-Z]/g;
			  if(myInput.value.match(upperCaseLetters)) {  
				capital.classList.remove("invalid");
				capital.classList.add("valid");
			  } else {
				capital.classList.remove("valid");
				capital.classList.add("invalid");
			  }

			  // Validate numbers
			  var numbers = /[0-9]/g;
			  if(myInput.value.match(numbers)) {  
				number.classList.remove("invalid");
				number.classList.add("valid");
			  } else {
				number.classList.remove("valid");
				number.classList.add("invalid");
			  }
			  
			  // Validate length
			  if(myInput.value.length >= 8) {
				length.classList.remove("invalid");
				length.classList.add("valid");
			  } else {
				length.classList.remove("valid");
				length.classList.add("invalid");
			  }
		}
			
	
	
}

	function onlyAlphabets(e, t)
	{
         try {

                if (window.event) {

                    var charCode = window.event.keyCode;

                }

                else if (e) {

                    var charCode = e.which;

                }

                else { return true; }

                if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))

                    return true;

                else

                    return false;

            }

            catch (err) {

                alert(err.Description);

            } 
    }
	
	
	
	
