function addTask() {
    const dummyTask = document.createElement('div');
    const description = document.createElement('div');
    const actions = document.createElement('div');
    const categoryButton = document.createElement('div');


    dummyTask.id = 'dummy-task';
    description.id = 'description';
    actions.id = 'actions';
    categoryButton.id = 'category-button-container';

    description.innerHTML = `<p>
    Lorem ipsum dolor sit amet.
</p>`;
    categoryButton.innerHTML = `<button id="complete-button"><span>✅</span>&nbsp; Complete</button>
    <p id="category">Work</p>`
    ;
    actions.innerHTML = `<p id="due-date"><span>🗓️</span>&nbsp; 2 January, 2022 Friday</p>`
    ;

    actions.append(categoryButton);

    dummyTask.append(description);
    dummyTask.append(actions);

    console.log(dummyTask)
    document.getElementById('d-tasks').prepend(dummyTask);
}