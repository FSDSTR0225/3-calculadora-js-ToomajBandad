class Student {
    constructor(id, name, age, grades) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.grades = grades;
    }

    renderCard() {
        const liElement = document.createElement('li');
        liElement.classList.add('card');
      
        const nameParagraph = document.createElement('p');
        const ageParagraph = document.createElement('p');
        const gradesParagraph = document.createElement('p');
      
        const buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Eliminar';

        buttonDelete.addEventListener('click', () => {
            classManager.removeStudent(this.id);
        });
      
        nameParagraph.textContent = this.name;
        ageParagraph.textContent = this.age;
        gradesParagraph.textContent = this.grades.join(', ');
      
        liElement.appendChild(nameParagraph);
        liElement.appendChild(ageParagraph);
        liElement.appendChild(gradesParagraph);
      
        liElement.appendChild(buttonDelete);
      
        const listElement = document.getElementById('lista-de-estudiantes');
        listElement.appendChild(liElement);
      }
  }