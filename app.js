//NOT CORRECT JS
// const form=document.querySelector('.form-item');
// const taskInput=document.querySelector('#task');
// const taskList = document.querySelector('.list-group');
// const clearBtn=document.querySelector('.clear-task');

// loadEventlistener();

// function loadEventlistener(){
//     // document.addEventListener('DOMContentLoaded', getTasks);
//     form.addEventListener('submit', addTask);
//     taskList.addEventListener('click', removeTask);
//     // clearBtn.addEventListener('click', clearTask);
//     taskList.addEventListener('click' , editTask)
// }
// // function getTasks(){
// //     let tasks;
// //     if (localStorage.getItem('tasks')=== null){
// //         tasks=[];
// //     }
// //     else{
// //         tasks=JSON.parse(localStorage.getItem('tasks'));
// //     }
// //     tasks.forEach(function (task) {
// //         const li = document.createElement('li');
// //         li.className='list-group-item';
// //         li.appendChild(document.createTextNode(task));
// //         const i= document.createElement('i');
// //         i.className='fas fa-times delete-item';
// //         li.appendChild(i);
// //         taskList.appendChild(li);
// //     });
// // }

// function addTask(e){
//     if (taskInput.value ==='') {
//         alert('please Enter');
//     }
//         else{
//             const li=document.createElement('li');
//             li.id='list-group-item';
//             li.appendChild(document.createTextNode(taskInput.value));
//             const btn1=document.createElement('button');
//             btn1.className='fas fa-times btn-delete';
//             btn1.id= 'delete-item';
//             const btn2=document.createElement('button');
//             btn2.className='fas fa-pencil-alt btn-edit';
//             btn2.id='edit-item';
//             const div1=document.createElement('div');
//             div1.id='btnList';
//             div1.appendChild(btn1);
//             div1.appendChild(btn2);
//             li.appendChild(div1);
//             taskList.appendChild(li);
//             let con = document.querySelector("#list-group-item");
//             con.style.display = "flex";
//             con.style.justifyContent="spaceBetween";
//             document.getElementById("list-group-item").style.listStyle = "none";
//             document.getElementById("list-group-item").style.paddingLeft="1rem";
//             document.getElementById("list-group-item").style.border="solid 1px #8fa8fc";
//             document.getElementById("list-group-item").style.borderRadius="5px";
//             document.getElementById("btnList").style.paddingLeft= "9.5rem";
//             document.getElementById("delete-item").style.background = "#fdc9cc";
//             document.getElementById("delete-item").style.border="none";
//             document.getElementById("delete-item").style.borderRadius="5px"
//             document.getElementById("delete-item").style.padding= ".2rem .3rem";
//             document.getElementById("edit-item").style.background= "#8fa8fc";
//             document.getElementById("edit-item").style.border="none";
//             document.getElementById("edit-item").style.borderRadius="5px"
//             document.getElementById("edit-item").style.padding= ".2rem";
//             document.getElementById("edit-item").style.margin= ".2rem";
//             // storeTaskInLocalStorage(taskInput.value);
//             taskInput.value='';
//             e.preventDefault();
//         }
//     }
// function editTask(e){
//     if (e.target.classList.contains('btn-edit')){
//             let input=document.createElement('input');
//             // let li=document.createElement('li');

//             // let inc=document.getElementById('inputId');
//             // li.id='list-group-item';
//             let li=e.target.parentElement.parentElement;
//             // const oldvar=document.getElementById('list-group-item');
//             // taskList.replaceChild(input,oldvar);
//             let span=document.createElement('span');
//             li.appendChild(span);
//             span= taskList.firstElementChild.textContent;
//             span=taskList.firstElementChild.firstElementChild.firstElementChild;
//             console.log(li);
//             // input= span;
//             // input.type='text';
//             // const li2 = li.firstElementChild.lastElementChild;
//             // console.log(li2);
//             // li2.insertBefore(input , span);
//             // li.removeChild(span);
//             // button.textContent = 'save';
//             // li.insertAdjacentElement("afterbegin",inc);
//          // taskList.replaceChild(input,btn2);
//     }
// }
// // var s = document.getElementById("mySpan");
// // var h = document.getElementById("myH2");
// // h.insertAdjacentElement("afterend", s);
//     function removeTask(e){
//         if (e.target.classList.contains('btn-delete')) {
//             if(confirm('Are you sure for item delete?')){
//                 e.target.parentElement.parentElement.remove();
//                 // removeTaskFromLocalStorage(e.target.parentElement);
//             }
//         }
//     }
//     // function removeTaskFromLocalStorage(taskItem) {
//     //     let tasks;
//     //     if (localStorage.getItem('tasks') === null) {
//     //       tasks = [];
//     //     } else {
//     //       tasks = JSON.parse(localStorage.getItem('tasks'));
//     //     }
      
//     //     tasks.forEach(function (task, index) {
//     //       if (taskItem.textContent === task) {
//     //         tasks.splice(index, 1);
//     //       }
//     //     });
//     //     localStorage.setItem('tasks', JSON.stringify(tasks));
//     // }

//     // function storeTaskInLocalStorage(task) {     
//     //     let tasks;
//     //     if (localStorage.getItem('tasks') === null) {
//     //       tasks = [];
//     //     } else {
//     //       tasks = JSON.parse(localStorage.getItem('tasks'));
//     //     }
//     //     tasks.push(task);
//     //     localStorage.setItem('tasks', JSON.stringify(tasks));
//     //   }
//     // function clearTask() {
//     //     taskList.innerHTML = '';
//     //     clearTasksFromLocalStorage();
//     //   }
//     //   function clearTasksFromLocalStorage(){
//     //       localStorage.clear();
//     //   }