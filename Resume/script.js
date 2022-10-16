// alert('great.......');

function addNewWorkExperience() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("workField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("row", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let weOb = document.getElementById("we");
  let weButtonOb = document.getElementById("weButton");

  weOb.insertBefore(newNode, weButtonOb);
}

// function for add Academic details:

function addAcademic()
{
 let nodeAcademic= document.createElement("textarea");
 nodeAcademic.classList.add("form-control");
 nodeAcademic.classList.add("aqField");
 nodeAcademic.classList.add("mt-2");
 nodeAcademic.setAttribute("placeholder","Enter here");

let aqIdOb= document.getElementById("aqId");
let eqButtonOb=document.getElementById("eqButton");
aqIdOb.insertBefore(nodeAcademic, eqButtonOb);

}
// Generate CV
function generateCV()
{
let nameField=document.getElementById("nameField").value;
let nameT1=document.getElementById("nameT1")
nameT1.innerHTML=nameField;

document.getElementById("nameT2").innerHTML=nameField;
document.getElementById("contactT").innerHTML=namePhone.value;
// console.log(namePhone);
document.getElementById("addressT").innerHTML=nameAddress.value;
document.getElementById("gitHybT").innerHTML=nameGithub.value;
document.getElementById("stackT").innerHTML=nameStack.value;
document.getElementById("nameLikedInT").innerHTML=nameLikedIn.value;
document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

// work ep
let wevalue=document.getElementsByClassName("workField");
let str="";
for(let e of wevalue)
{
  str=str + `<li> ${e.value}</li>`;

}
document.getElementById("weT").innerHTML=str;
// Academic qualification
let acQlua=document.getElementsByClassName("aqField");
let str1="";
for(let e of acQlua)
{
 // scStr =scStr + `<li> ${ac.value}</li>`;
  str1=str1 + `<li> ${e.value}</li>`;
}
document.getElementById("aqT").innerHTML=str1;
// for setting imsges
let file= document.getElementById("imgField").files[0];
console.log(file);
let reader= new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);
reader.onloadend=function()
{
  document.getElementById("imgId").src=reader.result;

}

document.getElementById("cv-form").style.display='none';  
document.getElementById("cv-template").style.display='block';  

}



//print cv
function printCV()
{
window.print();
}



