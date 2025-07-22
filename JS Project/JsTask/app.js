document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let valid = true;

  const errors = ["nameError", "emailError", "messageError","emailEmptyErr"];

  errors.forEach((id) => document.getElementById(id).classList.add("hidden"));

  if (name === "") {
    document.getElementById("nameError").classList.remove("hidden");
    valid = false;
  }
  
  if (message === "") {
    document.getElementById("messageError").classList.remove("hidden");
    valid = false;
  }
  if(email === ""){
    document.getElementById("emailEmptyErr").classList.remove("hidden");
    valid = false;
  }
  else if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email)) {
    document.getElementById("emailError").classList.remove("hidden");
    valid = false;
  }
  if (!valid) return;

  const currStatus = document.getElementById("formStatus");
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      let rand = Math.random();
      if (rand > 0.5) resolve();
      else reject();
    }, 4000);
  })
    .then(() => {
      currStatus.textContent = "Message sent successfully";
      currStatus.classList = "text-green-500";

      sessionStorage.setItem("Name", name);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("message", message);

      document.getElementById("contactForm").reset();
    })
    .catch(() => {
      currStatus.textContent = "some error occured";
      currStatus.classList = "text-red-500";
    });
});
