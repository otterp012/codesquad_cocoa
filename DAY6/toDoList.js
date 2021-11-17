const $addButton = document.querySelector('.add-button');
const $inputSpace = document.querySelector('.input-space');
const $listContainer = document.querySelector('.list-container');

$addButton.addEventListener(('click'), () => {
    makeNewLists();
})

$listContainer.addEventListener('click', (event) => {
    if(event.target.id === "checkbox") {
        event.target.classList.toggle("checked");

        if(event.target.classList.contains("checked")) {
            event.target.parentNode.classList.add("checked");
        } else {
            event.target.parentNode.classList.remove("checked");
        }
    } 
    
    if(event.target.className === "delete-button") {
        const $list = event.target.parentNode;
        removeList($list);
    }
})

function makeNewLists() {
    const $data = $inputSpace.value;
    const makeLiTag = document.createElement("li");
    const makeInputTag = document.createElement("input");
    const makePTag = document.createElement("p");
    const makeDeleteButton = document.createElement("button");

    $listContainer.appendChild(makeLiTag);
    makeLiTag.appendChild(makeInputTag);
    makeLiTag.appendChild(makePTag);    
    makeLiTag.appendChild(makeDeleteButton);
    
    makeLiTag.classList.add("new-list")
    makeInputTag.setAttribute("type", "checkbox");
    makeInputTag.setAttribute("id", "checkbox");
    makeDeleteButton.setAttribute("class", "delete-button");

    makePTag.innerText = $data;
    makeDeleteButton.innerText = "delete";

    $inputSpace.value = null;
}

function removeList(data) {
    while(data.firstChild) {
        data.removeChild(data.firstChild);
    }
}
