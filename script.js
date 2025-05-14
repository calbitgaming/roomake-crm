
document.querySelector(".submit-btn").addEventListener("click", async () => {
  const data = {
    client_name: document.querySelector("[name='client_name']").value,
    contact: document.querySelector("[name='contact']").value,
    manager: document.querySelector("[name='manager']").value,
    region: document.querySelector("[name='region']").value,
    comment: document.querySelector("[name='comment']").value
  };

  const params = new URLSearchParams(data);
  const url = "https://script.google.com/macros/s/AKfycbzTrY1MUOgE4tBUBMlkb-5cyysCSqXrmtlPriffgGg5Ro9UEpWzldwAD0X2UXZnhdZ_/exec?" + params.toString();

  try {
    const response = await fetch(url);
    if (response.ok) {
      alert("Заявка отправлена!");
    } else {
      alert("Ошибка: " + response.status);
    }
  } catch (err) {
    console.error(err);
    alert("Сетевая ошибка");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("today-date").textContent = today;
});
