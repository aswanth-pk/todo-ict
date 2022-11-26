const todoListBtn = document.getElementById('todo-list-btn');
const logoutBtn = document.getElementById('logout-btn');
const table = document.getElementById('data-table');

let data;
let request = new XMLHttpRequest();

function getData(){
    request.open("GET", "https://jsonplaceholder.typicode.com/todos");
    request.send();
    request.onload = ()=>{
    
        if(request.status == 200){
            data = (JSON.parse(request.response))
        }
        data.forEach(element => {
            createTableRow(element.id, element.title, element.completed);
        });
        let done = 0;
        const allCheckBoxes = document.getElementsByTagName('input');
    
        for(let i = 0; i<allCheckBoxes.length; i++){
            allCheckBoxes[i].addEventListener('change', function(){
                if(allCheckBoxes[i].checked){
                    done++;
                }
                else{
                    done--;
                }
                if(done == 5){
                    alert('Congrats you have finished 5 tasks');
                }
            })
        }
    }
}

function createTableRow(id, title, state){

    // cell1
    const newRow = document.createElement('tr');
    const cell1 = document.createElement('td');
    cell1.setAttribute('class', "id-col");
    cell1.innerText = id;

    // cell2
    const cell2 = document.createElement('td');
    cell2.setAttribute('class', 'todo-col');
    cell2.innerText = title;

    // cell3
    const cell3 = document.createElement('td');
    const statusCheckBox = document.createElement('input');
    statusCheckBox.setAttribute('type', 'checkbox');
    statusCheckBox.setAttribute('class', 'check-box');
    if(state){
        statusCheckBox.checked = 'true';
        statusCheckBox.disabled = 'true';
    }
    cell3.appendChild(statusCheckBox);
    cell3.setAttribute('class', 'status-col check-box');

    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    table.appendChild(newRow);
}



logoutBtn.addEventListener('click', function(){
    location.href = "index.html";
})