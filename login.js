document.querySelector(".resume").onclick = () => {
  localStorage.setItem("username", "admin");
  localStorage.setItem("pass", "admin");

  let user = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let userName = localStorage.getItem("username");
  let checkPassword = localStorage.getItem("pass");

  if (user != userName || password != checkPassword) {
    alert("Invalid Cridential");
    return false;
  }
  return true;
};

function preventback() {
  window.history.forward();
}
setTimeout("preventback()", 0);
window.onunload = function () {
  null;
};
