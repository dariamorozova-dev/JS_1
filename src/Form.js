class Form {
    constructor() {
        this.todoForm = document.getElementById('todo-form');
        this.addInput = document.getElementById('add-input');
    }

    init(list) {
        this.list = list;
        this.todoForm.addEventListener('submit', this.addTodoItem.bind(this));
        this.list.todoItems.forEach(item => this.list.bindEvents(item));
    }


    /**
     * Метод реагирует на отправку формы добавлением нового элемента в список задач
     * @param {отправка формы} event 
     */
    addTodoItem(event) {
        event.preventDefault();

        if (this.addInput.value === '') {
            return alert('Введите задачу для добавления в список');
        }

        const todoItem = this.list.createTodoItem(this.addInput.value);
        this.list.todoList.appendChild(todoItem);
        this.addInput.value = '';
    }
}