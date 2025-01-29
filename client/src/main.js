const app = document.getElementById("app");

async function getCats() {
  const response = await fetch("http://localhost:2698/cats");
  const data = await response.json();
  console.log(data);

  data.forEach((cat) => {
    const p = document.createElement("p");
    p.innerText = `${cat.breed} - ${cat.origin}`;
    app.appendChild(p);
  });
}
getCats();
