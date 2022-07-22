let regArr = JSON.parse(localStorage.getItem("homedata"));

regArr.map(function (ele) {
  document.querySelector("#fname").value = ele.opname;
  document.querySelector("#wemail").value = ele.opemail;
  document.querySelector("#comp").value = ele.opcomp;
  document.querySelector("#lname").value = ele.oplast;
  document.querySelector("#pnum").value = ele.opnumber;
  document.querySelector("#jobtit").value = ele.opjob;
});
