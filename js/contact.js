document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (send) {
    send.preventDefault();

    const userName = document.getElementById("contactUserName").value;
    const userEmail = document.getElementById("contactUserEmail").value;
    const userMessage = document.getElementById("contactUserMessage").value;
    const userSubject = document.getElementById("contactUserSubject").value;

    const formData = {
      userName,
      userEmail,
      userMessage,
      userSubject,
      Date: new Date().toLocaleString(),
    };

    let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
    messages.push(formData);
    localStorage.setItem("contactMessages", JSON.stringify(messages));

    toastr.success("Your message has been sent successfully!");

    form.reset();
  });
});
