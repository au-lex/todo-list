let todo = document.querySelector('.todo-container');

    todo.addEventListener('submit', function (e) {
      e.preventDefault();
        if(document.querySelector('.todo-container input').value.length == 0){
            // alert("Kindly Enter Task Name Boss Man")

        }
        
        else{
            document.querySelector('.tasks').innerHTML += `
            <div class="task">
            <span id="taskname">
            ${document.querySelector('.todo-container input').value}
            </span>
            <button class="delete">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </div>
        `;
    
         // deleting the task 

        let current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }


        })