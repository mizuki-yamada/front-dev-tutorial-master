"use strict";
{
  const btn = document.querySelector("#btn");

  // const hello = () => {
  //     this.style.color = 'red';
  // }
  function hello() {
      this.style.color = "red";
      console.log(this);
  }
  btn.addEventListener("click", hello);
}
