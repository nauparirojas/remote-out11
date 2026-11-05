# Práctica de Laboratorio - Semana 10: Backend Node.js y MySQL
**Asignatura:** Desarrollo de Aplicaciones Web (IS093A)  
**Estudiante:** Ñaupari Rojas Jhosep Amed 
**Repositorio Remoto:** https://github.com/nauparirojas/remote-out11

## Descripción del Proyecto
Implementación de un servidor backend moderno utilizando **Node.js** y **Express**, estructurado bajo el patrón arquitectónico **Modelo-Vista-Controlador (MVC)**. Utiliza un pool de conexiones asíncrono con **`mysql2/promise`** y sentencias preparadas para prevenir inyecciones SQL.

## Stack Tecnológico
* **Entorno de ejecución:** Node.js (LTS $\ge 20.x$)
* **Framework Web:** Express
* **Base de Datos:** MySQL (Servidor relacional local)
* **Manejo de Conexiones:** `mysql2/promise`
* **Variables de Entorno:** `dotenv`
* **Control de Cors:** `cors`

## Endpoints RESTful Implementados

| Verbo HTTP | Endpoint | Descripción | Códigos de Estado |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/productos` | Obtiene el listado completo de productos registrados. | `200 OK`, `500 Internal Error` |
| **POST** | `/api/productos` | Registra un nuevo producto en la base de datos. | `201 Created`, `400 Bad Request`, `500 Internal Error` |
| **PUT** | `/api/productos/:id` | Actualiza un producto existente por su identificador. | `200 OK`, `400 Bad Request`, `404 Not Found`, `500 Internal Error` |
| **DELETE** | `/api/productos/:id` | Elimina un producto específico de la base de datos. | `200 OK`, `404 Not Found`, `500 Internal Error` |

## Consideraciones de Seguridad
* Las credenciales de acceso a la base de datos están completamente aisladas mediante variables de entorno (`.env`).
* El archivo `.env` se encuentra excluido del control de versiones mediante `.gitignore`.
