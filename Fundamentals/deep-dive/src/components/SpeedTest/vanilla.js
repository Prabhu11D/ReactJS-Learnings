console.time()
const JS = document.getElementById("js");

const N1 = 1000;
const N2 = 200;

const list = [];
for (let i = 1; i <= N1; i++) {
  list.push("L-" + i)
}

let ul = document.createElement("ul");

list.map(l => {
  let li = document.createElement("li");
  li.textContent = l;
  let subUl = document.createElement("ul");
  for (let i = 1; i <= N2; i++) {
    let li = document.createElement("li");
    li.textContent = l + "--" + i;
    subUl.appendChild(li);
  }
  li.appendChild(subUl)
  ul.appendChild(li);
});

JS.appendChild(ul);
console.timeEnd();