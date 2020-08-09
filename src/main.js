//Fetch the items from the JSON file
function loadItems() {
  return fetch("./data/data.json")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

//main
loadItems()
  //promise가 return이 되면
  .then((items) => {})
  .catch(console.log);
