const form = document.querySelector(".form");
const Email = form.querySelector("#Email");
const pw = form.querySelector("#pw");
const greeting = document.querySelector("#greeting");

function savedValue(event) {
    event.preventDefault();
    localStorage.setItem('Email', Email.value);
    localStorage.setItem("Pw", pw.value);
    form.classList.add('hidden');
    Email.value ="";
    pw.value ="";
    alert(`hello, ${localStorage.getItem("Email")}`);
    greeting.classList.remove('hidden');
}
form.addEventListener("submit", savedValue);

const savedUser = localStorage.getItem("Email");
if (savedUser != null) {
    
}
