//json 파일로부터 목록 가져오기
function loadItems() {
  return fetch("./data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

// 동적으로 아이템리스트 출력
function displayItems(items) {
  const contaniner = document.querySelector(".items");
  contaniner.innerHTML = items.map((item) => createHTMLString(item)).join("");
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

//각 버튼 클릭하였을 때 필터링.
function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  //버튼 전체를 지정하였기때문에 null일 경우에는 return;
  if (key == null || value == null) {
    return;
  }

  displayItems(items.filter((item) => item[key] === value));
}

//로고 누르면 전체 아이템 리스트
// 버튼 누르면 각 아이템 필터링

function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  const button = document.querySelector("#category");
  logo.addEventListener("click", () => displayItems(items));
  button.addEventListener("click", (event) => onButtonClick(event, items));
}

//main
loadItems()
  //promise가 return이 되면
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
