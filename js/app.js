document.addEventListener("DOMContentLoaded", function() {

var taskInput = document.getElementById('taskInput');
var buttonAdd = document.getElementById('addTaskButton');
var buttonRemove = document.getElementById('removeFinishedTasksButton');
var ulList = document.getElementById("taskList");
var priority = document.getElementById('taskPriority');
var headerEl = document.querySelector('header');


    var counter = document.createElement('h2');
    counter.id = "counter";
    headerEl.appendChild(counter);

    buttonAdd.addEventListener('click', function () {
        if(taskInput.value.length >5 &&
            taskInput.value.length <100 &&
            priority.value > 0 &&
            priority.value <= 10

        ){
            var li = document.createElement('li');
            li.dataset.id = priority.value;
            li.innerHTML = "<h3>" + taskInput.value + "   -> task priority: "+ priority.value + "</h3>" +
                            '<button>Delete</button>'+
                            '<button>Complete</button>';
            li.style.listStyle="none";

            ulList.appendChild(li);
            taskInput.value="";
            priority.value="";
            counter.innerText= "Things to do: " + ulList.querySelectorAll('li:not(.done)').length;

            var liArr = Array.from(ulList.children);

            var liArrSor = liArr.sort(function (a, b) {
                return b.dataset.id - a.dataset.id;
            })
            liArrSor.forEach(function (elem) {
                ulList.appendChild(elem);
            });


            var buttonComplete= li.querySelector('button:last-of-type');
            buttonComplete.addEventListener('click', function () {
                this.parentElement.classList.toggle('done');
            })
            
            var buttonDelete= li.querySelector('button:first-of-type');
            buttonDelete.addEventListener('click', function () {
                this.parentElement.parentElement.removeChild(this.parentElement);
            })


        }else if(taskInput.value.length <5 || taskInput.value.length >100){
            alert("Niepoprawna liczba znaków: zadanie musi mieć więcej niż 5 znaków i mniej niż 100");
        }else{
            alert("Podaj liczbę z zakresu: 1 - 10");
        }
        buttonRemove.addEventListener('click', function () {
            var deleteElements = document.querySelectorAll('.done');
            for(var i=0; i<deleteElements.length; i++){
                deleteElements[i].parentElement.removeChild(deleteElements[i]);
            }
        })
    })


});
