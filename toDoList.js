

const $addButton = document.querySelector('.add-button');
const $toDoList = document.querySelector('.todo-lists');
const $inputSpace = document.querySelector('.input-space')



function makeNewLists() {
    const data = $inputSpace.value;
    const makeLabelTag = document.createElement("label");
    const makeInputTag = document.createElement("input");
    const makePTag = document.createElement("p");
    const makeDeleteButton = document.createElement("button");
    makeDeleteButton.classList.add("delete-button");
    makePTag.innerText = data;
    makeInputTag.setAttribute("type", "checkbox");
    makeInputTag.classList.add("list");

    
    $toDoList.appendChild(makeLabelTag)
    makeLabelTag.appendChild(makeInputTag);
    makeLabelTag.appendChild(makePTag);    
    makeLabelTag.appendChild(makeDeleteButton);

    const $label = document.querySelector('label');
    $label.addEventListener(('click'), (e) => {
    e.target.style.color = "red";
});
}



function removeList() {
    const $deleteButton = document.querySelector('.delete-button');
    $deleteButton.addEventListener(("click"), () => {
        while($label.firstChild) {
            $label.removeChild($label.firstChild);
        }
    })
}

function concludeList(e) {
    e.target.style.textDecoration = "line-thorough";
}
$addButton.addEventListener(('click'), () => {
    makeNewLists();
    $inputSpace.value = null;
})



//https://hi098123.tistory.com/256




// let makelitag = document.createElement("li");

// let makeinputtag = document.createElement("input");
// makeinputtag.setAttribute("type", "checkbox");
// makeinputtag.setAttribute("class", "news");
// let makelabeltag = document.createElement("p");
// exp.appendChild(makelitag);
// makelitag.appendChild(makeinputtag);
// makeinputtag.appendChild(makelabeltag);

// let maketext = document.createTextNode("이게되나");
// makelabeltag.appendChild(maketext);

// input값의 텍스트를 구성해주기 위해서,
// 1) label을 자식요소로 붙여서 한다 -> input은 자식요소를 가질 수 없었음
// 2) label을 상위요소로 한다 -> checkbox가 맨 뒤로 가게됨
// 3) <li>로 waraping하고 형제요소 <p>에 텍스트 넣기로 진행할 예쩡.
