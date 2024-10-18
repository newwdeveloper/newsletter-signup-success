const btn = document.querySelector("#btn");
const success = document.querySelector(".success");
const container = document.querySelector(".container");
const mail = document.querySelector("#email");
const exitBtn = document.querySelector("#exitbtn");

btn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  const email = mail.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validate email
  if (emailPattern.test(email)) {
    container.style.display = "none"; // Hide the container
    success.style.display = "flex"; // Show the success message as flex
    success.style.backgroundColor = "white";
    document.body.style.backgroundColor = "rgb(48, 25, 52)";
    document.querySelector("#change").innerText = email; // Update the email in the success message
  } else {
    alert("Please enter a valid email address.");
  }
});

exitBtn.addEventListener("click", function () {
  success.style.display = "none"; // Hide the success message
  container.style.display = "flex"; // Show the container again
  mail.value = ""; // Clear the email input
  document.querySelector("#change").innerText = ""; // Clear the displayed email in the success message
  success.style.backgroundColor = "";
  document.body.style.backgroundColor = "";
});
