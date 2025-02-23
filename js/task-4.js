const form = document.querySelector(".login-form");

form.addEventListener("submit", check);

function check(event) {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  console.log({ email, password });
  event.target.reset();
}


