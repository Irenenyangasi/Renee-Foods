document.addEventListener("DOMContentLoaded", () => {
  const foodContainer = document.getElementById("food-container");
  const search = document.getElementById("search");
  async function getPizzas(url) {
    const promise = await fetch(url);
    const resp = await promise.json();
    return resp;
  }
  getPizzas("https://www.themealdb.com/api/json/v1/1/categories.php").then(
    (resp) => {
      resp.categories.forEach((pizza) => {
        const food = document.createElement("div");
        food.className = "food";
        const image = document.createElement("div");
        image.className = "image";
        const category = document.createElement("p");
        category.className = "category";
        const description = document.createElement("p");
        description.className = "description";
        image.style.backgroundImage = `url(${pizza.strCategoryThumb})`;
        category.textContent = pizza.strCategory;
        description.textContent = pizza.strCategoryDescription;
        food.appendChild(image);
        food.appendChild(category);
        food.appendChild(description);
        foodContainer.appendChild(food);
        search.addEventListener("keyup", () => {
          if (search.value.toLowerCase() === pizza.strCategory.toLowerCase()) {
            food.style.display = "block";
          } else {
            food.style.display = "none";
          }
        });
      });
    }
  );
});
