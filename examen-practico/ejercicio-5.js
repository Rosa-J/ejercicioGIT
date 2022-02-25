/* EJERCICIO 5
Definir la siguiente jerarquía de objetos: (50 pts) */

class Persona{
    constructor(nombre, edad){
        this.nombre= nombre
        this.edad=edad
    }
    obtDetalles(){
        return `Su nombre es ${this.nombre} y tiene ${this.edad} años`
    }
}

class Estudiante extends Persona{
    constructor(nombre, edad, calificacion){
        super(nombre, edad);
        this.calificacion = calificacion
    }
    obtDetalles(){
        return `El nombre del estudiante es ${this.nombre} tiene ${this.edad} años y su 
        calificacion es ${this.calificacion}`
    }
}

class Profesor extends Persona{
    constructor(nombre, edad, asignatura, nivel){
        super(nombre, edad)
        this.asignatura = asignatura
        this.nivel = nivel
    }
    obtDetalles(){
        return `El nombre del profesor es ${this.nombre} tiene ${this.edad} años, 
        la asignatura que dicta es ${this.asignatura} y su nivel en ella es ${this.nivel}`
    }
}
// class Grupo 
