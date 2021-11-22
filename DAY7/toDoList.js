const $inputSpace = document.querySelector('.input-space');
const $addButton = document.querySelector('.add-button');
const $dateInput = document.querySelector('.date-input');


const $classificationContainer = document.querySelector('.classification-container');
const $classificationDate = document.querySelector('.classification-date')
const $listContainer = document.querySelector('.list-container');


$addButton.addEventListener(('click'), () => {
    makeNewDay($dateInput);
    $inputSpace.value = "";
})

$listContainer.addEventListener('click', (event) => {
    handleClickDelete(event.target, 'delete-button');
    handleClickModify(event.target, 'modify-button');
    handleClickCheckbox(event.target, 'checkbox');

})

$classificationContainer.addEventListener(('click'), (event) => {
    handleClickCompleteButton(event.target, 'complete-button');
    handleClickUnCompleteButton(event.target, 'uncomplete-button');
    handleClickAllViewButton(event.target, 'all-view-button');
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
        target.checked === true ? target.nextSibling.classList.add('checked') : target.nextSibling.classList.remove('checked')
    }
};

function makeNewDay() {
    const newPost  = document.createElement('div');
    newPost.id = $dateInput.value;
    newPost.className = 'new-post';
    $listContainer.appendChild(newPost);

    const newh3 = document.createElement('div');
    newh3.textContent = $dateInput.value;
    newPost.appendChild(newh3);

    appendNewTextContainer(newPost);
}

function appendNewTextContainer(node) {
    
    const newLi = document.createElement('li');
    newLi.className = 'new-list';
        
    const newCheckbox = document.createElement('input');
    newCheckbox.className = 'checkbox';
    newCheckbox.setAttribute('type', 'checkbox');    

    const newP = document.createElement('p');
    newP.className = 'new-List-text';
    newP.textContent = $inputSpace.value;
    newP.contentEditable = false;
    
        // node.appendChild(newAddInput);
    node.appendChild(newCheckbox);
    node.appendChild(newP);   

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

function handleClickCompleteButton(target, class_name) {
    if(target.className === class_name) {
        document.querySelectorAll('.new-List-text').forEach((node) => {
            if(node.className !== 'new-List-text checked') {
                node.parentNode.classList.add('hidden');
            }
        })
    }
}

function handleClickUnCompleteButton(target, class_name) {
    if(target.className === class_name) {
        document.querySelectorAll('.new-List-text.checked').forEach((node) => {
            node.parentNode.classList.add('hidden');
        })
    }
}

function handleClickAllViewButton(target, class_name) {
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