# Sistema de Gestión Académica (SGA)

Proyecto desarrollado durante la materia Programación IV.


## Descripción

El Sistema de Gestión Académica (SGA) es una aplicación web que permitirá administrar alumnos, docentes, cursos y materias.


Durante el desarrollo del proyecto se incorporarán progresivamente nuevas tecnologías y funcionalidades.



## Objetivos

- Gestionar alumnos.

- Gestionar docentes.

- Gestionar cursos.

- Gestionar materias.

- Implementar autenticación de usuarios.

- Consumir una API REST.

- Persistir la información en MongoDB.




## Tecnologías
Actualmente:
- HTML5
- JavaScrip
- CSS3
- Node.js
- Express

Próximamente:
- React
- MongoDB


## Estado del proyecto

- Versión:
Clase 12 - Estructura actual 
SGA/
frontend
 |
 |__ index.html
 |__ alumnos.html
 |__ docentes.html
 |
 |__ CSS/
 |    estilos.css
 |
 |__ JS/
     alumnos.js
     docentes.js
backend

## Estado actual
- Página de inicio y navegación entre módulos
- Módulo alumnos docentes
- CRUD alumnos
- Validaciónes de formularios
- Persistencia mediante localStorage
- Organización del código y refactorización
- Separación inicial entre Frontend y Backend
- Implementación de validaciones para los datos recibidos mediante req.body
- Uso de status 400 para datos invalidos 
- Status 404 para alumno no encontrado
- Status 201 para registrar nuevo alumno
- Manejo básico de errores

## Almacenamiento
- localStorage
- JSON.stringify()
- JSON.parse()

## Autor
Melany Zeballos

Programación IV