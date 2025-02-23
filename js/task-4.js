const form = document.querySelector(".login-form");

form.addEventListener("submit", check);

function check(event) {
  event.preventDefault();
  const email = event.target.elements.email.value; 
  const password = event.target.elements.password.value;
  
  if (email === "" || password === "") {
    return console.log("All form fields must be filled in");
  }

  console.log(`Email: ${email}, Password: ${password}`);
  event.target.reset();
}

