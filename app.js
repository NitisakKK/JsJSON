// JS object
const list = document.getElementById("list");
let output = "";

fetch("user.json") // ดึงข้อมูลจาก JSON
  .then((res) => res.json())
  .then((json) => {
    json.users.forEach((item) => {
      output += "<li>" + item.name + "</li>";
    });
    list.innerHTML = output;
  })
  .catch((err) => {
    console.log(err);
  });

// asysnc / await
async function getUsers() {
  const res = await fetch("user.json");
  const json = await res.json();
  json.users.forEach((item) => {
    output += "<li>" + item.name + "<li>";
    output += "<li>" + item.age + "<li>";
  });
  list.innerHTML = output;
}
getUsers();
