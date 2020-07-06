class List {
    constructor() {
        this.todoList = document.getElementById('todo-list');
        this.todoItems = document.querySelectorAll('.todo-item');
    }

    /**
     * Метод устанавливает слушатели событий на все дочерние элементы элемента li
     * @param {'элемент li списка задач'} todoItem 
     */
    bindEvents(todoItem) {
        const checkbox = todoItem.querySelector('.checkbox');
        const editButton = todoItem.querySelector('button.edit');
        const deleteButton = todoItem.querySelector('button.delete');
    
        checkbox.addEventListener('change', this.toggleTodoItem);
        editButton.addEventListener('click', this.editTodoItem);
        deleteButton.addEventListener('click', this.deleteTodoItem.bind(this));
    }

    /**
     * Метод переключает значение пункта из списка задач на "выполненно" или "не выполненно"
     * @param {event} event изменение текста в поле ввода
     */
    toggleTodoItem(event) {
        const listItem = event.target.parentNode;
        listItem.classList.toggle('completed');
    }

    /**
     * Метод позволяет изменять содержание уже добавленного в список пункта
     */
    editTodoItem() {
        const listItem = event.target.parentNode;
        const title = listItem.querySelector('.title');
        const editInput = listItem.querySelector('.textfield');
        const isEditing = listItem.classList.contains('editing');
    
        if (isEditing) {
            title.innerText = editInput.value;
            this.innerText = 'Edit';
        } else {
            editInput.value = title.innerText;
            this.innerText = 'Save';
        }
    
        listItem.classList.toggle('editing');
    }

    /**
     * Метод удаляет выбранный пункт из списка задач
     */
    deleteTodoItem() {
        const listItem = event.target.parentNode;
        this.todoList.removeChild(listItem);
    }
    
    /**
     * метод добавляет новую задачу в список
     * @param {текст} title текст новой задачи для списка
     */
    createTodoItem(title) {
        const checkbox = this.createElement('input', {type: 'checkbox', className: 'checkbox'});
    
        const label = this.createElement('label', {className: 'title'}, title);
    
        const editInput = this.createElement('input', {type: 'text', className: 'textfield'});

        const editButton = this.createElement('button', {className: 'edit'}, 'EDIT');
    
        const deleteButton = this.createElement('button', {className: 'delete'}, 'DELETE');
    
        const listItem = this.createElement('li', {className: 'todo-item'}, checkbox, label, editInput, editButton, deleteButton);
        
        this.bindEvents(listItem);
    
        return listItem;
    }

    /**
     * метод создаёт элемент с указанным тегом и перечисленными параметрами. при необходимости добавляет текст или дочерние элементы
     * @param {тег} tag 
     * @param {атрибуты тега} props 
     * @param  {дочерние элементы тега или текст для вставки} children 
     * @returns {HTMLElement}
     */
    createElement(tag, props, ...children) {
        const element = document.createElement(tag);
        Object.keys(props).forEach(key => element[key] = props[key]);
    
        if (children.length > 0) {
            children.forEach(child => {
                if (typeof child === 'string') {
                    child = document.createTextNode(child);
                }
    
                element.appendChild(child);
            })
        }
    
        return element;
    }
}