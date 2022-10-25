class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = libros,
        this.mascotas = mascotas
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(book, author) {
        this.libros.push({nombre: book, autor: author})
    }

    getBookNames() {
        const arrayBookNames = this.libros.map(element => element.nombre);
        console.log(arrayBookNames)
    }
}

//Creación de objeto
const Creator = new Usuario('Maximiliano', 'Friss', [], []);
//Nombre completo
console.log(`Nombre completo: ${Creator.getFullName()}`);
//Agregar mascotas
Creator.addMascota('Iguana');
Creator.addMascota('Erizo Africano');
Creator.addMascota('Gato Montés');
//Contar mascotas
console.log(`Número total de mascotas: ${Creator.countMascotas()}`);
//Agregar libros
Creator.addBook('El Fin de la Eternidad','Isaac Asimov');
Creator.addBook('Dune', 'Frank Herbert');
//Leer nombres de libros
Creator.getBookNames();

