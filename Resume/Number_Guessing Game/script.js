let number;
const generate_number =()=>{
    let n1=Math.random();
    console.log(n1);
   // alert(n1);
let n2= n1*10;
n2= Math.trunc(n2);
n2=(n2%6)+1;
number=n2;
console.log(n2);
}
// generate_number();

const generate_number_btn_click =()=>{
//    alert("Testing");
    document.querySelector("#section1").style.display='none';
    document.querySelector("#section2").style.display='none';
    document.querySelector("#section3").style.display='block';
setTimeout(()=>{
generate_number();

document.querySelector("#inputField").value='';

document.querySelector("#section1").style.display='none';
document.querySelector("#section2").style.display='block';
document.querySelector("#section3").style.display='none';

},3000);

};

const check_btn=()=>{
 
    let value=document.querySelector("#inputField").value;
    if(value==number)
    {
        alert('Congrants you Won Game');
    
    }
    else{
    alert('OOPs your Guess is wrong');
}
generate_number_btn_click();
}