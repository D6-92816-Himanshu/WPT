arr=[];
let add = document.getElementById("add");


add.addEventListener("click",()=>{
if(arr.length<6){
    let emp=document.getElementById("emp");
    Ename = emp.value;
    arr.push(Ename);
    console.log(arr);
    }
else{
    let addEle=document.getElementById("addEle");
    addEle.innerHTML="<h2>You have Entered Six names</h2>";
}
});


let disp =document.getElementById("disp");

disp.addEventListener("click",()=>{
    let addEle = document.getElementById("addEle");
    console.log(arr.sort());
    arr.sort();
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
        let ele = document.createElement("li");
        ele.innerText=arr[i];
        addEle.append(ele);
}
});

