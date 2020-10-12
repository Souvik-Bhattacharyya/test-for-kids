function submitForm(e) {
    e.preventDefault();
    let name = document.forms["form"]["name"].value;
	console.log(name);  
    sessionStorage.setItem("name", name);
  
    location.href = "../Test Page.html";
  }