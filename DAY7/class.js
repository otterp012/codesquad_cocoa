const $inputSpace = document.querySelector('.input-space');
const $addButton = document.querySelector('.add-button');
const $dateInput = document.querySelector('.date-input');


const $classificationContainer = document.querySelector('.classification-container');
const $classificationDate = document.querySelector('.classification-date')
const $listContainer = document.querySelector('.list-container');


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