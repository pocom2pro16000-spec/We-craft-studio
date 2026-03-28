let projects = [
  "Landing Page",
  "E-commerce UI",
  "Portfolio Website"
];

let container = document.getElementById("projects");

projects.forEach(p=>{
  let div = document.createElement("div");
  div.className = "card";
  div.innerText = p;
  container.appendChild(div);
});