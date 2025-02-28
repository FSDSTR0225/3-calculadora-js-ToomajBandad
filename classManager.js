class ClassManager {
    constructor(students) {
        this.students = students;
    }
    
    addStudent() {
        console.log('addStudent and this is the this is this context', this);
        const nombreDelEstudiante = document.getElementById('nombre-del-estudiante')
        const edadDelEstudiante = document.getElementById('edad-del-estudiante')
        const notasDelEstudiante = document.getElementById('nota-del-estudiante')

        const newStudent = new Student(
            this.students.length + 1,
            nombreDelEstudiante.value,
            edadDelEstudiante.value,
            notasDelEstudiante.value.split(',').map(Number)
        )
        
        this.students.push(newStudent);
        
        nombreDelEstudiante.value = '';
        edadDelEstudiante.value = '';
        notasDelEstudiante.value = '';
        
        this.renderListOfStudents();
    }

    removeAllStudents() {
        this.students = [];
        this.renderListOfStudents();
    }

    removeStudent(id) {
        console.log('removeStudent and this is the this is this context', this);
        this.students = this.students.filter(student => student.id !== id);
        this.renderListOfStudents();
    }

    clearVisualListOfStudents() {
        const listElement = document.getElementById('lista-de-estudiantes');
        listElement.innerHTML = '';
    }

    renderListOfStudents() {
        console.log('renderListOfStudents and this is the students', this.students);
        this.clearVisualListOfStudents();
        this.students.forEach(student => student.renderCard());
    }
}