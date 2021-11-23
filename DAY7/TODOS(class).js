
class ToDosCreater {
    
    createPostBox(ancestor, dateValue) {
        this.newPost = document.createElement('div');
        this.newPost.id = dateValue;
        this.newPost.className = 'new-post';
        ancestor.appendChild(this.newPost);

        this.newDateInput = document.createElement('input');
        this.newDateInput.setAttribute('type', 'date')
        this.newDateInput.setAttribute('value', dateValue);
        this.newDateInput.className = 'new-date-input';
        this.newPost.appendChild(this.newDateInput);

    }
     createPostText(inputSpaceValue) {
       
        this.newCheckbox = document.createElement('input');
        this.newCheckbox.className = 'checkbox';
        this.newCheckbox.setAttribute('type', 'checkbox');
        this.newPost.appendChild(this.newCheckbox);

        this.newText = document.createElement('p');
        this.newText.className = 'new-List-text';
        this.newText.textContent = inputSpaceValue;
        this.newText.contentEditable = false;
        this.newPost.appendChild(this.newText);  
    }

    createButton() {
        this.newButtonContainer = document.createElement('div');
        this.newButtonContainer.className = 'new-button-container';

        this.newModifyButton = document.createElement('button');
        this.newModifyButton.className = 'modify-button';
        this.newModifyButton.textContent = 'modify';

        this.newDeleteButton = document.createElement('button');
        this.newDeleteButton.className = 'delete-button';
        this.newDeleteButton.textContent = "delete";
            
        this.newPost.appendChild(this.newButtonContainer);
        this.newButtonContainer.appendChild(this.newModifyButton);
        this.newButtonContainer.appendChild(this.newDeleteButton);
    }
}

class ToDosEventHandler {
    // constructor() {
    //     this.target = event.target;
    //     this.class_name = className;
    // } constructor이걸로, 이용하면 될거같은데 공부중

    handleClickDelete(target, class_name) {
        if(target.className === class_name){
            target.parentNode.parentNode.id = 'deleted';
            document.getElementById('deleted').remove();
        }
    };

    handleClickModify(target, class_name) {
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

    handleClickCheckbox(target, class_name) {
        if(target.className === class_name) {
            target.checked === true 
            ? target.nextSibling.classList.add('checked') 
            : target.nextSibling.classList.remove('checked')
        }
    }
}

class ClassificationManager {
    
    classifyComplete(target, class_name) {
        if(target.className === class_name) {
            document.querySelectorAll('.new-List-text').forEach((node) => {
                if(node.className !== 'new-List-text checked') {
                    node.parentNode.classList.add('hidden');
                }
            })
        }
    };

    classifyUnComplete(target, class_name) {
        if(target.className === class_name) {
            document.querySelectorAll('.new-List-text.checked').forEach((node) => {
                node.parentNode.classList.add('hidden');
            })
        }
    };

    classifyAllView(target, class_name) {
        if(target.className === class_name) {
            document.querySelectorAll('.hidden').forEach((node) => {
                node.classList.remove('hidden');
            })
        }
    }
}

class Init {

    createtodos = () => {
        const $addButton = document.querySelector('.add-button');
        const toDosCreater = new ToDosCreater();

        $addButton.addEventListener(('click'), () => {
            const $listContainer = document.querySelector('.list-container');
            const $dateInput = document.querySelector('.date-input');
            const $inputSpace = document.querySelector('.input-space');
            toDosCreater.createPostBox($listContainer,$dateInput.value);
            toDosCreater.createPostText($inputSpace.value);
            toDosCreater.createButton();

            $inputSpace.value = "";
        })
    }

    handleToDosEvent = () => {
        
        const toDosEventHandler = new ToDosEventHandler();
        const $listContainer = document.querySelector('.list-container');
        $listContainer.addEventListener(('click'), (event) => {

            toDosEventHandler.handleClickDelete(event.target, 'delete-button');
            toDosEventHandler.handleClickModify(event.target, 'modify-button');
            toDosEventHandler.handleClickCheckbox(event.target, 'checkbox');
        })
    }

    classifyToDos = () => {
        const classificationManager = new ClassificationManager();
        const $classificationContainer = document.querySelector('.classification-container')

        $classificationContainer.addEventListener(('click'), (event) => {
            classificationManager.classifyComplete(event.target, 'complete-button');
            classificationManager.classifyUnComplete(event.target, 'uncomplete-button');
            classificationManager.classifyAllView(event.target, 'all-view-button');
        })
    }
}

const init = new Init();
init.createtodos();
init.handleToDosEvent();
init.classifyToDos();
