document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.querySelector('.input_area input');
  const addButton = document.querySelector('.input_area button');
  const todosList = document.querySelector('.todos');

  // Function to create a new task item
  function createTask(taskText) {
      const li = document.createElement('li');
      li.classList.add('list-group-item');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('task-checkbox');

      const span = document.createElement('span');
      span.textContent = taskText;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = '🗑️';
      deleteButton.classList.add('delete-btn');

      // Append checkbox, span, and delete button to the li
      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteButton);

      // Add event listener for delete
      deleteButton.addEventListener('click', function () {
          li.remove();
      });

      // Add event listener for toggling completeness
      checkbox.addEventListener('change', function () {
          li.classList.toggle('completed');
          updateTaskOrder();
      });

      return li;
  }

  // Function to add new task to the list
  function addTask() {
      const taskText = inputField.value.trim();
      if (taskText === '') return;

      const newTask = createTask(taskText);
      todosList.prepend(newTask); // Add new tasks at the top

      inputField.value = ''; // Clear input field
  }

  // Update the task order, moving completed tasks to the end
  function updateTaskOrder() {
      const allTasks = Array.from(todosList.children);
      const completedTasks = allTasks.filter(task => task.classList.contains('completed'));
      const pendingTasks = allTasks.filter(task => !task.classList.contains('completed'));

      // Remove all tasks from the list
      todosList.innerHTML = '';

      // Add pending tasks first, followed by completed tasks
      pendingTasks.forEach(task => todosList.appendChild(task));
      completedTasks.forEach(task => todosList.appendChild(task));
  }

  // Add event listener to the add button
  addButton.addEventListener('click', addTask);

  // Allow adding task by pressing Enter
  inputField.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
          addTask();
      }
  });

  // Initial event listener for existing tasks
  document.querySelectorAll('.list-group-item').forEach(item => {
      const checkbox = item.querySelector('.task-checkbox');

      checkbox.addEventListener('change', function () {
          item.classList.toggle('completed');
          updateTaskOrder();
      });

      item.querySelector('.delete-btn').addEventListener('click', function () {
          item.remove();
      });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const inputField = document.querySelector('.input_area input');
//   const addButton = document.querySelector('.input_area button');
//   const todosList = document.querySelector('.todos');

//   // Function to create a new task item
//   function createTask(taskText) {
//       const li = document.createElement('li');
//       li.classList.add('list-group-item');

//       const span = document.createElement('span');
//       span.textContent = taskText;

//       const deleteButton = document.createElement('button');
//       deleteButton.textContent = '🗑️';
//       deleteButton.classList.add('delete-btn');

//       // Append span and delete button to the li
//       li.appendChild(span);
//       li.appendChild(deleteButton);

//       // Add event listener for delete
//       deleteButton.addEventListener('click', function () {
//           li.remove();
//       });

//       // Add event listener for toggle completeness
//       li.addEventListener('click', function () {
//           li.classList.toggle('completed');
//           updateTaskOrder();
//       });

//       return li;
//   }

//   // Function to add new task to the list
//   function addTask() {
//       const taskText = inputField.value.trim();
//       if (taskText === '') return;

//       const newTask = createTask(taskText);
//       todosList.prepend(newTask); // Add new tasks at the top

//       inputField.value = ''; // Clear input field
//   }

//   // Update the task order, moving completed tasks to the end
//   function updateTaskOrder() {
//       const allTasks = Array.from(todosList.children);
//       const completedTasks = allTasks.filter(task => task.classList.contains('completed'));
//       const pendingTasks = allTasks.filter(task => !task.classList.contains('completed'));

//       // Remove all tasks from the list
//       todosList.innerHTML = '';

//       // Add pending tasks first, followed by completed tasks
//       pendingTasks.forEach(task => todosList.appendChild(task));
//       completedTasks.forEach(task => todosList.appendChild(task));
//   }

//   // Add event listener to the add button
//   addButton.addEventListener('click', addTask);

//   // Allow adding task by pressing Enter
//   inputField.addEventListener('keypress', function (e) {
//       if (e.key === 'Enter') {
//           addTask();
//       }
//   });

//   // Initial event listener for existing tasks
//   document.querySelectorAll('.list-group-item').forEach(item => {
//       item.addEventListener('click', function () {
//           item.classList.toggle('completed');
//           updateTaskOrder();
//       });

//       item.querySelector('.delete-btn').addEventListener('click', function () {
//           item.remove();
//       });
//   });
// });
