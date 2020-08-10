//Fetch the items from the JSON file
function loadItems() {
  return fetch("./data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

// 동적으로 아이템리스트 출력
function displayItems(items) {
  const contaniner = document.querySelector(".items");
  contaniner.innerHTML = items.map((item) => createHTMLString(item));
}

// 아이템 목록 보여주는 li 리스트
function createHTMLString(item) {
  return `
      <li class="item">
          <img src=${item.image} alt="${item.type}" class="item__thumbnail" />
          <span class="item__description">${item.gender}, ${item.size}</span>
      </li>
  `;
}

//main
loadItems()
  //promise가 return이 되면
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
