# Nodepop API

**Práctica KeepCoding Web development Bootcamp**

Backend para dar soporte a una aplicación de venta y busqueda de artículos.

### Instalación

	$ git clone https://github.com/Burricornio/KC-Backend1.git
	$ cd nodepop
	$ npm install
      
### Arrancar servidor
	$ npm start o $nodemon
      
### Arrancar la base de datos
	$ npm run install_db
	
### Comentarios

    Podemos filtrar los articulos por nombre, tipo (se vendo o se busca), precio y tags haciendo peticiones del tipo:

    - Filtrar por nombre: /apiv1/spots?name=batamanta

    - Filtrar por caracteres del nombre: /apiv1/spots?name=h

    - Filtrar por se busca o se vende: /apiv1/spots/?sell=false

    - Filtrar por rango de precio: /apiv1/spots?price=50

    - Filtrar por rango de precio: /apiv1/spots?price=50-400

    - Filtrar por tags:/apiv1/spots?tags=mobile

    Podemos paginar mediante las ordenes "skip" y "limit": apiv1/spots?skip=2&limit=2


## Autor

&copy; 2017 Alejandor Cuiñas.