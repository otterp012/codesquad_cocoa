const $inputSpace = document.querySelector('.input-space');
const $addButton = document.querySelector('.add-button');
const $dateInput = document.querySelector('.date-input');


const $classificationButton = document.querySelector('.classification-button');
const $classificationDate = document.querySelector('.classification-date')

const $listContainer = document.querySelector('.list-container');



$addButton.addEventListener(('click'), () => {
    makeNewLists();
    console.log($dateInput.value);
})

$classificationDate.onchange = handle;

function handle(e) {
    const $listDates = document.querySelectorAll('.list-date');
    $listDates.forEach((node) => {
        if(e.target.value !== node.value) {
            node.parentNode.id = "hidden";
            console.log("맙ㅈ음");
        } else {
            node.parentNode.id = "unhidden";
        }
    })
    console.log(e.target.value);
}

$classificationButton.addEventListener(('click'), () => {
    console.log($classificationButton.textContent);
    const $checkedList = document.querySelectorAll('.checked');

    if($classificationButton.innerText === "completed") {
        console.log("yest");
        $checkedList.forEach((node) => {
            node.id = "hidden";
        })
        console.log($classificationButton.innerText);
        $classificationButton.innerText = "uncompleted"
    } else  {
        console.log("no");
        $checkedList.forEach((node) => {
            node.id = "unhidden";
        })
        $classificationButton.innerText = "completed";
    }
})

$listContainer.addEventListener('click', (event) => {
    if(event.target.id === "checkbox") {
        event.target.parentNode.classList.toggle("checked");

        // if(event.target.classList.contains("checked")) {
        //     event.target.parentNode.classList.add("checked");
        // } else {
        //     event.target.parentNode.classList.remove("checked");
        // }
    } 
    
    if(event.target.className === "delete-button") {
        event.target.parentNode.id = "deleted";
        document.getElementById("deleted").remove();
    }
  
    const $p = document.querySelector("p");
    if(event.target.tagName === "P") {
        $p.addEventListener(("click"), (e) => {

            if($p.contentEditable === "false") {
                $p.classList.add("contentEditable");
                $p.contentEditable = true;
            } else {
                  $p.classList.add("contentEditable");
                $p.contentEditable = true;
            }
           
            e.stopPropagation();
            // e.preventDefault와 차이점 공부하기.
        })
    }
})

function makeNewLists() {
    const $data = $inputSpace.value;
    const makeLiTag = document.createElement("li");
    const makeInputTag = document.createElement("input");
    const makePTag = document.createElement("p");
    const makedate = document.createElement("input");
    const makeModifyButton = document.createElement("button");
    const makeDeleteButton = document.createElement("button");

    $listContainer.appendChild(makeLiTag);
    makeLiTag.appendChild(makeInputTag);
    makeLiTag.appendChild(makePTag);    
    makeLiTag.appendChild(makedate);
    makeLiTag.appendChild(makeModifyButton);
    makeLiTag.appendChild(makeDeleteButton);
    
    makeLiTag.classList.add("new-list")
    makeInputTag.setAttribute("type", "checkbox");
    makeInputTag.setAttribute("id", "checkbox");
    makedate.setAttribute("type", "date");
    makedate.setAttribute("class", "list-date");
    makeModifyButton.setAttribute("class",
    "modify-button");
    makeDeleteButton.setAttribute("class", "delete-button");

    makePTag.innerText = $data;
    makedate.value = $dateInput.value;
    makeModifyButton.innerText = "Modify";
    makeDeleteButton.innerText = "delete";
    $inputSpace.value = null;
}

// https://stackoverflow.com/questions/33451050/classname-vs-get-setattribute-method