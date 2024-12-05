const submit = document.getElementById("submit");
const tbody = document.getElementById("tbody");
const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const amount = document.getElementById("amount").value;
  if (description && category && !isNaN(amount)) {
    const innerHTML = document.createElement("tr");
    innerHTML.innerHTML = `<td>${description}</td><td>${category}</td><td>${amount}</td>`;
    tbody.appendChild(innerHTML);
    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
  } else {
    alert("Please fill fields with valid data");
  }
});
