const api = "https://fakestoreapi.com/products";

async function fetchProducts(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function displayProduct(product) {
  const { id, title, price, image } = product;
  const container = document.getElementById("product");
  const card = document.createElement("div");

  card.innerHTML = `
    <div
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-wrap: wrap;
          width: 200px;
          border: 2px dashed purple;
          border-radius: 20px;
          padding: 10px;
          margin: 10px;
          height: 300px;
          background-color: beige;
        "
      >
        <img
          src="${image}"
          alt="${id}"
          style="height: 120px;"

        />
        <p>${title}</p>
        <p>${price}</p>
      </div>
    `;

  container.appendChild(card);
}

async function viewProduct() {
  const data = await fetchProducts(api);
  console.log(data);
  console.log(data.length);
  for (let i = 0; i < data.length; i++) {
    displayProduct(data[i]);
  }
}

viewProduct();
