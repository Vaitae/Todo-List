var button=document.getElementById("add");
var input=document.getElementById("user-input");
var ul=document.querySelector("ul");
var li=document.querySelector("li");

button.addEventListener("click",function(){
    if(input.value.length>0){
        var li=document.createElement("li");
        var del=document.createElement("button");
        li.appendChild(document.createTextNode(input.value));
        del.appendChild(document.createTextNode("Delete"));
        del.classList.add("delete-btn");
        li.append(del);
        ul.appendChild(li);
        
        input.value="";
    }else{
        alert("Empty Task!");
    }

    li.addEventListener("click",function(){
        li.classList.toggle("delete");
    })

    del.addEventListener("click",function(){
        li.parentNode.removeChild(li);
    })


})

input.addEventListener("keydown",function(e){
    if(input.value.length>0 && e.key==="Enter"){
        var li=document.createElement("li");
        var del=document.createElement("button");
        li.appendChild(document.createTextNode(input.value));
        del.appendChild(document.createTextNode("Delete"));
        del.classList.add("delete-btn");
        ul.appendChild(li);
        li.append(del);
        input.value="";
    }

    li.addEventListener("click",function(){
        li.classList.toggle("delete");
    })

    del.addEventListener("click",function(){
        li.parentNode.removeChild(li);
    })
    

})



