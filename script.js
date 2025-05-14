
document.querySelector(".submit-btn").addEventListener("click", async () => {
  const data = {
    client_name: document.querySelector("[name='client_name']").value,
    contact: document.querySelector("[name='contact']").value,
    manager: document.querySelector("[name='manager']").value,
    region: document.querySelector("[name='region']").value,
    comment: document.querySelector("[name='comment']").value
  };

  const params = new URLSearchParams(data);
  const url = "https://script.google.com/macros/s/AKfycbwe_Z7fN9PLGtIDNwO-QUX6XGVxuSZ_cVanvu12XaW70vGqKYpYX_2tQpiYHCmsNpN5/exec?" + params.toString();

  const response = await fetch(url);
  if (response.ok) {
    alert("Заявка отправлена!");
  } else {
    alert("Ошибка отправки: " + response.status);
  }
});
