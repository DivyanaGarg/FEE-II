(function (){
    let todos=JSON.parse(localStorage.getitem("todos"))||[];
    let id = number(JSON.parse(localStorage.getitem("id")))||0;
   
    const todocontainer=document.getElementById("todo");
    const todoinput=document.createElement("input");
    todoinput.type="text";
    todoinput.placeholder="Enter task..."
    const addbtn=document.createElement("button");
    addbtn.textContent="ADD";
    const todolist=document.createElement("div");
    todolist.style.border="2px solid black"
    todocontainer.append(todoinput,addbtn,todolist);
   


    function rendertask(task){
        
        const todoitem=document.createElement("div");
        todoitem.style.border="2px solid red";
        todoitem.style.margin="10px";

        const p=document.createElement("p");
        p.textContent=task;
        const deletebtn=document.createElement("button");
        deletebtn.textContent="DELETE";
        const editbtn=document.createElement("button");
        editbtn.textContent="EDIT";
        const completebtn = document.createElement("button");
        completebtn.textContent = "COMPLETED";
        completebtn.addEventListener("click", function(){
            todoitem.style.backgroundColor = "green";
            completebtn.remove();
        })
        
        editbtn.addEventListener("click",function(){
            const editinput=document.createElement("input");
            editinput.value=task;
            const savebtn=document.createElement("button");
            savebtn.textContent="Save";
            todoitem.prepend(editinput,savebtn);
            editinput.focus();
            savebtn.addEventListener("click",function(){
                const updatedtask=editinput.value;
                if(!updatedtask){
                    return;
                }
                p.textContent=updatedtask;
                const index=todos.indexOf(task);
                todos[index]=updatedtask;
                editinput.remove();
                savebtn.remove();
                todoitem.style.backgroundColor="white";
                console.log(todos);
            })
        })

        deletebtn.addEventListener("click",function(){
            const index=todos.indexOf(task);
            todos.splice(index,1);
            todoitem.remove();
        })
        todoitem.append(p,deletebtn,editbtn, completebtn);
        todolist.prepend(todoitem);
        
    }
    function addtodo(){
        const task=todoinput.value;
        if(!task){
            return;
        }
        id = id + 1;
        const obj ={ 
        id: id,
        text: task,
        complete: false,
        edit:0,
        }

        
        console.log(task);
        
        todos.unshift(task);
        rendertask(task);
        localStorage.setItem("todos", JSON.stringify(todos));
        localStorage.setItem("id", id);
        todoinput.value="";
        todoinput.focus();


    }
    addbtn.addEventListener("click",addtodo);
    todoinput.addEventListener("keydown",function(e){
        if(e.key==="Enter"){
            addtodo();
        }
    })

})()
//immediatedly invoked function expression