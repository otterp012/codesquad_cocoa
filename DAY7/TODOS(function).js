const $inputSpace = document.querySelector('.input-space');
const $addButton = document.querySelector('.add-button');
const $dateInput = document.querySelector('.date-input');


const $classificationContainer = document.querySelector('.classification-container')
const $listContainer = document.querySelector('.list-container');

// TODOS 만들기.

$addButton.addEventListener(('click'), () => {
    createPostBox($dateInput);
    $inputSpace.value = "";
})

function createPostBox() {
    const newPost  = document.createElement('div');
    newPost.id = $dateInput.value;
    newPost.className = 'new-post';
    $listContainer.appendChild(newPost);

    const newDateInput = document.createElement('input');
    newDateInput.setAttribute('type', 'date');
    newDateInput.setAttribute('value', $dateInput.value);
    newDateInput.className = 'new-date-input';
    
    newPost.appendChild(newDateInput);
    createPostText(newPost);
    createButton(newPost);
}

function createPostText(node) {
    
    const newCheckbox = document.createElement('input');
    newCheckbox.className = 'checkbox';
    newCheckbox.setAttribute('type', 'checkbox');    
    node.appendChild(newCheckbox);

    const newText = document.createElement('p');
    newText.className = 'new-List-text';
    newText.textContent = $inputSpace.value;
    newText.contentEditable = false;
    
    node.appendChild(newText);   
}

function createButton(node) {

    const newButtonContainer = document.createElement('div');
    newButtonContainer.className = 'new-button-container';

    const newModifyButton = document.createElement('button');
    newModifyButton.className = 'modify-button';
    newModifyButton.textContent = 'modify';

    const newDeleteButton = document.createElement('button');
    newDeleteButton.className = 'delete-button';
    newDeleteButton.textContent = "delete";
        
    node.appendChild(newButtonContainer);
    newButtonContainer.appendChild(newModifyButton);
    newButtonContainer.appendChild(newDeleteButton);
}

// ToDosEventHandler

$listContainer.addEventListener('click', (event) => {
    handleClickDelete(event.target, 'delete-button');
    handleClickModify(event.target, 'modify-button');
    handleClickCheckbox(event.target, 'checkbox');
})


function handleClickDelete(target, class_name) {
    if(target.className === class_name){
        target.parentNode.parentNode.id = 'deleted';
        document.getElementById('deleted').remove();
    }
};

function handleClickModify(target, class_name) {
    const $modifiedText = target.parentNode.previousSibling;
    if(target.className === class_name) {
        if($modifiedText.contentEditable === 'false') {
            $modifiedText.id = 'contentEditable';
            $modifiedText.contentEditable = true;
        } else {
            $modifiedText.id = null;
            $modifiedText.contentEditable = false;
        }
    }
};

function handleClickCheckbox(target, class_name) {
    if(target.className === class_name) {
        target.checked === true 
        ? target.nextSibling.classList.add('checked') 
        : target.nextSibling.classList.remove('checked')
    }
};

// ClassificationManager

$classificationContainer.addEventListener(('click'), (event) => {
    classifyComplete(event.target, 'complete-button');
    classifyUnComplete(event.target, 'uncomplete-button');
    classifyAllView(event.target, 'all-view-button');
})

function classifyComplete(target, class_name) {
    if(target.className === class_name) {
        document.querySelectorAll('.new-List-text').forEach((node) => {
            if(node.className !== 'new-List-text checked') {
                node.parentNode.classList.add('hidden');
            }
        })
    }
}

function classifyUnComplete(target, class_name) {
    if(target.className === class_name) {
        document.querySelectorAll('.new-List-text.checked').forEach((node) => {
            node.parentNode.classList.add('hidden');
        })
    }
}

function classifyAllView(target, class_name) {
    if(target.className === class_name) {
        document.querySelectorAll('.hidden').forEach((node) => {
            console.log(node);
            node.classList.remove('hidden');
        })
    }
}

// https://stackoverflow.com/questions/33451050/classname-vs-get-setattribute-method

// 코드의 문제 -> 이벤트 위임으로 모든걸 하려고 하니까.
// 이거 함수 나누기가 힘들어짐.

// setAttribute v s classname
// textcontent vs innerHTML ve innerText
// e.preventDefault vs `
// nodelist vs HTMLCOLLECTION
// 정렬은 나중에 div 정렬하고싶음.