const input = document.querySelector("#footer .inputBox .input");
const shoppingList = document.querySelector(".shoppingList");
const enterBtn = document.querySelector("#footer .inputBox .enterBtn");
const binIcon = document.querySelectorAll("#main .shoppingList li .binIcon");

// DOM에 변동이 많을 경우에는 innerHTML 보다는 createElement를 활용
// 주석은 함수 단위를 어떤 것을 하는 것인지를 명시한느 것이 좋음
// 왜? 를 설명할 수 있어야함.

function onAdd() {
  const text = input.value;
  // make and add new items
  if (input.value === "" || input.value === " ") {
    input.classList.add("error");
    input.focus();
  } else {
    input.classList.remove("error");
    const item = createItems(text);
    shoppingList.appendChild(item);
    item.scrollIntoView({ block: "center" });
    input.value = "";
    input.focus();
  }
}

function createItems(text) {
  const itemRow = document.createElement("li");

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");

  const p = document.createElement("p");
  p.innerText = text;

  const span = document.createElement("span");
  span.setAttribute("class", "binIcon fa-solid fa-trash-can");
  span.addEventListener("click", () => {
    shoppingList.removeChild(itemRow);
  });

  itemRow.appendChild(input);
  itemRow.appendChild(p);
  itemRow.appendChild(span);

  return itemRow;
}

enterBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    onAdd();
  }
});

// 강의 듣기전 작성 코드

// input.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     // console.log(input.value)
//     if (input.value === "" || input.value === " ") {
//       input.classList.add("error");
//     } else {
//       input.classList.remove("error");
//       shoppingList.innerHTML += `
//             <li>
//               <input type="checkbox" name="" id="" />
//                 <p>${input.value}</p>
//               <span class="binIcon material-icons">delete_outline</span>
//             </li>`;
//       input.value = null;
//     }
//   }
// });

// // remove list
// binIcon.forEach((e) => {
//   e.addEventListener("click", () => e.parentNode.remove());
// });
