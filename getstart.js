let startArr = JSON.parse(localStorage.getItem("homedata")) || [];

startArr.map(function (ele) {
  document.querySelector("#sname").value = ele.opname;
  document.querySelector("#slast").value = ele.oplast;
  document.querySelector("#semail").value = ele.opemail;
  document.querySelector("#scomp").value = ele.opcomp;
  document.querySelector("#sjob").value = ele.opjob;
  document.querySelector("#snum").value = ele.opnumber;
  document.querySelector("#scountry").value = ele.opcountry;
});

document.querySelector("#getsubmit").addEventListener("click", getfunc);

function getfunc() {
    
  window.location.href = "getsucsuss.html";
}
