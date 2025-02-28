const studentsInitialData = [
    { id: 1, name: "Alice", age: 22, grades: [85, 90, 78] },
    { id: 2, name: "Bob", age: 23, grades: [88, 76, 95] },
    { id: 3, name: "Charlie", age: 21, grades: [92, 89, 85, 67, 89] },
    { id: 4, name: "David", age: 20, grades: [70, 75, 80] },
    { id: 5, name: "Eve", age: 24, grades: [95, 100, 98] }
  ];


const classManager = new ClassManager(studentsInitialData.map(student => new Student(student.id, student.name, student.age, student.grades)));
console.log('classManager', classManager);


const botonParaAgregarEstudiante = document.getElementById('boton-para-agregar-estudiante');
botonParaAgregarEstudiante.addEventListener('click', classManager.addStudent.bind(classManager));

const botonParaEliminarTodos = document.getElementById('boton-para-eliminar-todos');
botonParaEliminarTodos.addEventListener('click', () => classManager.removeAllStudents());


// Renderizar la lista de estudiantes al cargar la página
classManager.renderListOfStudents()


const botonParaAbrirCerrarMenu = document.getElementById('abrircerrarmenu');
botonParaAbrirCerrarMenu.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
});


