const input = document.querySelector("#footer .inputBox .input");
const shoppingList = document.querySelector(".shoppingList");
const enterBtn = document.querySelector("#footer .inputBox .enterBtn");
const form = document.querySelector(".new-form");

// DOM에 변동이 많을 경우에는 innerHTML 보다는 createElement를 활용
// 주석은 함수 단위를 어떤 것을 하는 것인지를 명시한느 것이 좋음
// 왜? 를 설명할 수 있어야함.

form.addEventListener("submit", (event) => {
  event.preventDefault();
  onAdd();
});

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

// create new itemrow
let id = 0;
// UUID로 사용해야 함.
// incremental ID는 사용을 지양해야함

function createItems(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "itemRow");
  itemRow.setAttribute("data-id", id);

  itemRow.innerHTML = `
      <input type="checkbox" name="" id="">
      <p>${text}</p>
      <button class="item__delete"> 
        <span class="binIcon fa-solid fa-trash-can" data-id=${id}></span>
      </button>
        `;
  id++;
  return itemRow;
}

// form으로 대체

// // enter click event
// enterBtn.addEventListener("click", () => {
//   onAdd();
// });

// // enter button event
// input.addEventListener("keydown", (event) => {
//   if (event.isComposing) {
//     return;
//   }
//   if (event.key === "Enter") {
//     onAdd();
//   }
// });

shoppingList.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.itemRow[data-id="${id}"]`);
    toBeDeleted.remove();
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
