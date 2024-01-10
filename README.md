
# Gestion de inventarios RIWI

La aplicacion funciona corectamente hace uso de typeOrm conectando a mysql debe tener la base de datos inventory creada y habilitada para persistir la data de la aplicación propuesta

la configuración de la conexión se hace en el archivo

src\app.module.ts

se requiere tener instalado node luego desde consola dar el siguiente comando desde la carpeta reiz del proyecto

npm i

luego levantar la alicación con el comando
npm run start:dev

para interactuar, poblar, crear o borrar los datos de prueba de la aplicación se puede hacer uso del archivo de 
[documentación ](https://drive.google.com/file/d/1c-qE59XwDsXviS6NodWtff_yWHO67p_O/view?usp=sharing)

una breve descripcion de la documentación

Documentación app de gestión de inventarios RIWI

Funcionalidades adicionales realizadas: 

-> un usuario responsable se puede asignar a una bodega
desde la creación de la bodega pero sin ser obligatorio enviando el id_responsable que es el mismo id del usuario que va a ser el responsable de dicha bodega

-> los datos de prueba se pueden poblar por ruta POST http://localhost:3000/warehouses/seeders
indicando los números que se desean crear de cada uno
{
    "usuarios": 3,    
    "bodegas":2,
    "productos": 2,
    "inventarios": 10   
}
el número escogido de bodegas y productos, dan un máximo de combinaciones posibles, la cantidad de inventarios puede variar(con lo que se desea) al ser creados


URL de la API documentada mediante postman
 https://documenter.getpostman.com/view/12905489/2s9Y5SWm3v#fe7508d8-bc9d-45f1-bb95-4ed0a8b21808


descripción endpoints de la API

generar nueva bodega
POST http://localhost:3000/warehouses
{
    "ubication": "Bogotá OCCIDENTE",
    "description": "5500m2",
    "id_responsable": 1
}

Consultar todas las bodegas
GET http://localhost:3000/warehouses
resultado de ejemplo (user es el encargado responsable de la bodega")

[
    {
        "id": 1,
        "ubication": "Bogotá n",
        "description": "5500m2",
        "created_by": 0,
        "updated_by": "2023-08-19T18:27:39.680Z",
        "created_at": "2023-08-19T00:01:19.000Z",
        "updated_at": null,
        "deleted_at": null,
        "user": {
            "estado": false,
            "id": 1,
            "nombre": "dfgd",
            "foto": "gdfgd",
            "created_by": 0,
            "updated_by": 0,
            "created_at": "2023-08-19T04:40:19.000Z",
            "updated_at": "2023-08-19T04:40:19.000Z",
            "deleted_at": "2023-08-19T04:40:19.000Z"
        }
    },
    {
        "id": 2,
        "ubication": "Bogotá OCCIDENTE",
        "description": "5500m2",
        "created_by": 0,
        "updated_by": "2023-08-19T18:27:39.680Z",
        "created_at": "2023-08-19T02:48:42.000Z",
        "updated_at": null,
        "deleted_at": null,
        "user": {
            "estado": false,
            "id": 1,
            "nombre": "dfgd",
            "foto": "gdfgd",
            "created_by": 0,
            "updated_by": 0,
            "created_at": "2023-08-19T04:40:19.000Z",
            "updated_at": "2023-08-19T04:40:19.000Z",
            "deleted_at": "2023-08-19T04:40:19.000Z"
        }
    },
    {
        "id": 3,
        "ubication": "barranquilla hermosa",
        "description": "mar cumbio folklore",
        "created_by": 0,
        "updated_by": null,
        "created_at": "2023-08-20T02:48:26.000Z",
        "updated_at": "2023-08-20T02:48:26.000Z",
        "deleted_at": "2023-08-20T02:48:26.000Z",
        "user": null
    }
]

actualizar una bodega
PUT http://localhost:3000/warehouses/2
{    
    "description": "nortttt"
}

borrar una bodega
DELETE http://localhost:3000/warehouses/2

obtener una bodega por id
GET http://localhost:3000/warehouses/2


crear producto y asignarlo con cantidad a una bodega
POST http://localhost:3000/warehouses/products
{
    "nombre": "Cocacola",
    "descripcion": "2500 cm3",
    "id_warehouse": 2,
    "cantidad": 30
}

consultar todos los productos con la cantidad Total de cada uno
GET http://localhost:3000/warehouses/products


reubicar un producto
PUT http://localhost:3000/warehouses/relocate/product
{
    "cantidad": 100,
    "id_producto":1,
    "id_bodega_envia": 1,
    "id_bodega_recibe": 3    
}

poblar las tablas
POST http://localhost:3000/warehouses/seeders
para esa ruta es posible especificar
cuantos usuarios quieren ser creados
así como bodegas y registros de inventarios
{
    "usuarios": 3,    
    "bodegas":2,
    "productos": 2,
    "inventarios": 10    
}


borrar los datos de prueba
DELETE http://localhost:3000/warehouses/seeders


archivos relevantes de la aplicación

src\warehouses\service\warehouses\warehouses.service.ts
src\warehouses\controllers\warehouses\warehouses.controller.ts

