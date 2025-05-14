document.querySelector(".submit-btn").addEventListener("click", async () => {
  const data = {
    client_name: document.querySelector("[name='client_name']").value,
    contact: document.querySelector("[name='contact']").value,
    manager: document.querySelector("[name='manager']").value,
    region: document.querySelector("[name='region']").value,
    comment: document.querySelector("[name='comment']").value
  };

  const params = new URLSearchParams(data);
  const url = "https://script.google.com/macros/s/AKfycbxbW1Xsm8ZqYc-tifOO-Xmg_LXC_To6CfaY2DopJQYufGN9pTo0LKMPNRXrgRIXW-sV/exec?" + params.toString();

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
