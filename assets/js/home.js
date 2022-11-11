let taskAddToggle = true;

function addTask() {
    if(taskAddToggle) {
        const addTask = document.getElementById('add-task-new');
        if (addTask != undefined) {
            addTask.setAttribute('style', 'display: none');
        }
        const addTaskForm = document.createElement('form');
        const formHeader = document.createElement('div');
        const dateAndDropdown = document.createElement('div');
        const dropdown = document.createElement('div');
        const dropdownContent = document.createElement('div');
        const textArea = document.createElement('textarea');
        const button = document.createElement('button');


        dropdownContent.className = 'dropdown-content';
        dropdown.className = 'dropdown';
        dateAndDropdown.id = 'date-dropdown';
        formHeader.className = 'form-header';
        addTaskForm.id = 'add-task-form';
        button.id = 'add-task-button';
        addTaskForm.action = '/create-task';
        addTaskForm.method = 'post';
        button.type = 'submit';
        textArea.name = 'description';

        

        dropdownContent.innerHTML = `<p name="category" onclick="addWork()" id="work-cat">Work</p>
        <p name="category" onclick="addSchool()" id="school-cat">School</p>
        <p name="category" onclick="addPersonal()" id="personal-cat">Personal</p>
        <p name="category" onclick="addOther()" id="other-cat">other</p>`
        ;
        dropdown.innerHTML = `<span id="select-cat">Category</span>`
        ;
        dropdown.append(dropdownContent);

        dateAndDropdown.innerHTML = `<input type="date" name="date" placeholder="Due Date" class="date-picker" min="2022-10-5" required>`
        ;
        dateAndDropdown.append(dropdown);

        formHeader.innerHTML = `<p class="form-heading"><span>🤘</span>New Task</p>
        <p onclick="removeButton()" id="cancel-button">❌</p>`
        ;

        addTaskForm.append(formHeader);

        textArea.innerHTML = `Get Groceries`
        ;
        addTaskForm.append(textArea);
        addTaskForm.append(dateAndDropdown);

        button.innerHTML = `<span>🧿&nbsp;</span>Add Task`
        ;
        addTaskForm.append(button);

        document.getElementById('d-tasks').prepend(addTaskForm);
        createInput("Other");
        var today = new Date().toISOString().split('T')[0];
document.getElementsByName("date")[0].setAttribute('min', today);

        // Fade In animation
        const a = document.getElementById('add-task-form');
        a.classList.toggle('fade-in');
        document.getElementById('add-task-new').append
        taskAddToggle = !taskAddToggle;
    } else {
        const a = document.getElementById('add-task-form');
        a.classList.toggle('fade-in');
    }
    
}



// Category selection 

function createInput(category) {
    const input = document.createElement('input');
    input.name = 'category';
    input.type = 'hidden';
    input.value = category;
    input.id = 'cat-type';
    document.getElementById('add-task-form').append(input);
}

function addWork() {
    const categoryPrev = document.getElementById('cat-type');
    document.getElementById('add-task-form').removeChild(categoryPrev);

    createInput('Work');
    const workCategory = document.getElementById('work-cat');
    const selectCategory = document.getElementById('select-cat');
    selectCategory.innerHTML = workCategory.textContent;
};

function addSchool() {
    const categoryPrev = document.getElementById('cat-type');
    document.getElementById('add-task-form').removeChild(categoryPrev);

    createInput('School');
    const schoolCategory = document.getElementById('school-cat');
    const selectCategory = document.getElementById('select-cat');
    selectCategory.innerHTML = schoolCategory.textContent;
};

function addPersonal() {
    const categoryPrev = document.getElementById('cat-type');
    document.getElementById('add-task-form').removeChild(categoryPrev);

    createInput('Personal');
    const personalCategory = document.getElementById('personal-cat');
    const selectCategory = document.getElementById('select-cat');
    selectCategory.innerHTML = personalCategory.textContent;
};

function addOther() {
    const categoryPrev = document.getElementById('cat-type');
    document.getElementById('add-task-form').removeChild(categoryPrev);
    
    createInput('Other');
    const otherCategory = document.getElementById('other-cat');
    const selectCategory = document.getElementById('select-cat');
    selectCategory.innerHTML = otherCategory.textContent;
};




// Cancel button          transform: translateY(20px);


function removeButton() {
    const b = document.getElementById('add-task-form');
    b.classList.toggle('fade-out');
    setTimeout(function() {
        const div = document.getElementById('d-tasks');
        div.removeChild(document.getElementById('add-task-form'));
        document.getElementById('add-task-new').setAttribute('style', 'display: flex');

    }, 400);
    taskAddToggle = true;

}


function fadeOutAnimation() {
    const b = document.getElementById('dummy-task');
    b.classList.toggle('fade-out');
}


$('.show-hide').click(function() {
    console.log('clicked');
    $('.display-prop').toggle('.hide-element');
})


