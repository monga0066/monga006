// fill in javascript code here

document.querySelector("form").addEventListener("submit",myfunction)

function myfunction(event){
    event.preventDefault();
let name=document.querySelector("#name").value

let employee=document.querySelector('#employeeID').value

let depart= document.querySelector("#department").value;

let exper= document.querySelector("#exp").value;

let tex = document.querySelector("#email").value;

let mobile=document.querySelector("#mbl").value
  

  let tr=document.createElement("tr");
  let td1=document.createElement("td")
  td1.innerText=name;
  let td2=document.createElement("td")
  td2.innerText=employee;
  let td3=document.createElement("td")
  td3.innerText=depart;
  let td4=document.createElement("td")
  td4.innerText=exper;
  let td5=document.createElement("td")
  td5.innerText=tex;
  let td6=document.createElement("td")
  td6.innerText=mobile;
  let td7=document.createElement("td")
  if(exper>5){
      td7.innerText="Senior";
      td7.style.backgroundColor="green"
  } else if(exper>2){
      td7.innerText="Junior"
      td7.style.backgroundColor="red"
  } else if(exper>=1){
      td7.innerText="Fresher"
      td7.style.backgroundColor="blue"
  }
  let td8=document.createElement("td")
  td8.innerText="DELETE";
  td8.style.backgroundColor="red"
  td8.style.cursor="pointer";
  td8.addEventListener("click", del)
  
  tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
  document.querySelector("tbody").append(tr);
  
}

function del (){
    event.target.parentNode.remove();
}