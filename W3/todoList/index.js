const $addButton = document.querySelector('.add-button');
const $inputSpace = document.querySelector('.input-space');
const $listContainer = document.querySelector('.list-container');

// $listContainer.appendChild(document.createElement("li"));

// const $list = document.querySelector('li');

// $list.appendChild(document.createElement("input"));

// const $checkBox = document.querySelector("ul input");
// $checkBox.classList.add("check-box");
// $checkBox.setAttribute("type", "checkbox");

// $checkBox.appendChild(document.createElement("p"));

function makeNewLists() {
    const data = $inputSpace.value;
    const makeLiTag = document.createElement("li");
    makeLiTag.classList.add("new-list")

    const makeInputTag = document.createElement("input");
    makeInputTag.setAttribute("type", "checkbox");

    const makePTag = document.createElement("p");
    const makeDeleteButton = document.createElement("button");
    makeDeleteButton.innerText = "delete";
  
    $listContainer.appendChild(makeLiTag);
    makeLiTag.appendChild(makeInputTag);
    makeLiTag.appendChild(makePTag);    
    makeLiTag.appendChild(makeDeleteButton);
    makePTag.innerText = data;

    $inputSpace.value = null;
}


$addButton.addEventListener(('click'), () => {
    makeNewLists();
})


console.log($listContainer);


$listContainer.addEventListener('click', (event) => {
    const $checkBox = document.querySelectorAll("li input");
    console.log(event.target);
    if(event.target.tagName === "INPUT") {
        event.target.classList.toggle("checked");

        if(event.target.classList.contains("checked")) {
            event.target.parentNode.classList.add("checked");
        } else {
            event.target.parentNode.classList.remove("checked");
        }
    } 
    
    if(event.target.tagName === "BUTTON") {
        const $list = event.target.parentNode;
        console.log($list);

        while($list.firstChild) {
            $list.removeChild($list.firstChild);
        }
    }
})


// $listContainer.addEventListener('click', (event) => {
//     const $checkBox = document.querySelectorAll("li input");
    
//     if(event.target.tagName === "INPUT" && $checkBox.checked === true) {
//         console.log(event.target.parentNode);
//         event.target.parentNode.classList.add("checked");
//     } else if (event.target.tagName === "INPUT" && $checkBox.checked === false) {
//         event.target.parentNode.classList.remove("checked");
//     }
// })

// 이벤트 캡쳐링 활용하려고했는데 실패함.



// $addButton.addEventListener(('click'), () => {

//     const toDoData = $inputSpace.value;

//     $listContainer.appendChild(document.createElement("li"));

//     const $list = document.querySelector('li');
    
//     const makeInputTag = document.createElement("input");
//     $list.appendChild(makeInputTag);
    
//     const $checkBox = document.querySelector("li input");
//     $checkBox.setAttribute("type", "checkbox");
    
//     const makePTag = document.createElement("p");
//     $list.appendChild(makePTag);

//     const $pText = document.querySelector("li p");
//     console.log($pText);
//     $pText.appendChild(document.createTextNode(toDoData));
//     // 이부분 왜 innerText나 innerHtml 안먹히는지 궁금.

//     const makeDeleteButton = document.createElement("button");
//     $list.appendChild(makeDeleteButton);

//     $deleteButton = document.querySelector("li button");
//     $deleteButton.innerText = "delete";
    
//     $inputSpace.value = null;
// })




// var check2_stat = document.getElementById('check2').checked;
// 체크여부 확인


// 돌아는 가는데
// class로 함수 재구현하기
