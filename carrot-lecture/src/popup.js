"use strict";

export default class PopUp {
  // 클래스를 바깥으로 노출 시킴.
  // 외부에서도 볼 수 있도록
  constructor() {
    this.popUp = document.querySelector(".pop-up");
    this.popUpText = document.querySelector(".pop-up__message");
    this.popUpRefresh = document.querySelector(".pop-up__refresh");
    this.popUpRefresh.addEventListener("click", () => {
      this.onClick && this.onClick();
      this.hide();
    });
  }
  setClickListener(onClick) {
    // 사용자가 PopUp에 setClickListener를 등록하면 등록된 onclick 호출
    // onclick을 등록해놓으면 PopUp버튼 클릭 시 onClick 호출
    this.onClick = onClick;
  }

  showWithText(text) {
    this.popUpText.innerText = text;
    this.popUp.classList.remove("pop-up--hide");
  }

  hide() {
    this.popUp.classList.add("pop-up--hide");
  }
}
