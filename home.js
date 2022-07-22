document.getElementById("submit").addEventListener("click", subfunc);
let subArr=JSON.parse(localStorage.getItem("homedata"))||[]

function subfunc(event) {
  event.preventDefault();
  let subobj = {
    opname: document.querySelector("#name").value,
    oplast: document.querySelector("#last").value,
    opemail: document.querySelector("#email").value,
    opcomp: document.querySelector("#company").value,
    opjob: document.querySelector("#job").value,
    opnumber: document.querySelector("#num").value,
    opcountry:document.querySelector("#country").value
  };
  if(subobj.opname==""||subobj.oplast==""||subobj.opemail==""||subobj.opcomp==""||subobj.opjob==""){
    alert("please fill")
  }
  else{
    subArr.push(subobj)
    localStorage.setItem("homedata",JSON.stringify(subArr))
    window.location.href="sucss.html"
  }


}
