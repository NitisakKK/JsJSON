// ดึง API ไปแสดงผล
const list = document.getElementById("list");
let output = "";

async function getDataFromAPI() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(url);
  const json = await res.json();
  json.forEach((item) => {
    output += "<li>" + item.name;
  });
  list.innerHTML = output;
}
getDataFromAPI();
