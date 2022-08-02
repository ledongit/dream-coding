const input = document.querySelector("#main .inputBox .input");
const shoppingList = document.querySelector("#main .shoppingList");
const shoopingListAll = document.querySelectorAll("#main .shoppingList li");
const enterBtn = document.querySelector("#main .inputBox .enterBtn");
const binIcon = document.querySelectorAll("#main .shoppingList li .binIcon");
const clearAll = document.querySelector("#main .clearBtnBox .clearAllBtn");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // console.log(input.value)
    if (input.value === "" || input.value === " ") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
      shoppingList.innerHTML += `
            <li>
              <input type="checkbox" name="" id="" />
                <p>${input.value}</p>
              <span class="binIcon material-icons">delete_outline</span>
            </li>`;
      input.value = null;
    }
  }
});

// remove list
binIcon.forEach((e) => {
  e.addEventListener("click", () => e.parentNode.remove());
});

// clear all
shoopingListAll.forEach((e) => {
  clearAll.addEventListener("click", () => e.remove());
});
