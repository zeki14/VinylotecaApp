# VinylotecaApp
Crear una pequeña biblioteca de discos
Crear una aplicación web que contenga el catálogo online de discos de una biblioteca  y en el que los usuarios puedan consultar la disponibilidad de los mismos y gestionar sus cuentas.

Como entorno de trabajo se empleará Node.js y el framework Express para manejar las peticiones HTTP, el enrutado y el sistema de plantillas para generar las páginas HTML de forma dinámica.
Además como motor del sistema de plantillas se empleará Handlebars.hbs.
Los datos se almacenarán en MongoDb y se trabajará con el paquete Mongoose para conectar la base de datos y para generar los modelos.


Para realizarlo seguiré el tutorial  de la website "Developer. Mozilla" https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website 
y el trabajo realizado en clase para el proyecto de La Librería.


1_.

npm init

npm install --save

npm install express --save

npm install express-handlebars --save

npm install --save-dev nodemon
 
con estos pasos queda instalado el package.json con las dependencias necesarias

2_. creación estructura de archivos, parciales y plantillas (Hbs)

conexión con URL “ http://localhost:3000/”

3_. creacción  de parciales: navbar.hbs, disco.hbs, listaDiscos.hbs


Usando Hbs se han integrado las diversas plantillas, de menor a mayor (Disco.hbs > listaDiscos.hbs > catalogoLayout)

Se renderiza catalogoLayout en catalogoTemplates. 

Las peticiones y conexiones definidas en app.js.

Creación de carpeta data y archivo albums.json para poder cargar contenido en el catálogo.

maquetación en Css: navbar
                    footer
                    catalogo: con grid.

4_.Creación y conexión con BBdd: mongoDb y mongoose


