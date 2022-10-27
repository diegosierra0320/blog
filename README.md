# Blog API

 - Front:
    - Obtener todas las publicaciones
    - Obtener una publicacion en especifico
    - Obtener todas las categorias
    - Obtener todos los posts de una caterogia especifica
    - Obtener tofos los post que he creado
    - Obtener todos los posts de usuario en especifico
    - Podemos paginar los posts 
    - Acciones de CRUD sobre Posts
    - Crear categorias


// json
    {
        "total": 68,
        "prev": "localhost:9000/api/v1/posts?start=51&limit=60",
        "next": "localhost:9000/api/v1/posts?start=61&limit=68",
        "data": [
            {
                "id": "0c4c00df-e60a-4c98-92f7-a5cab86a099b",
                "title": "ejemplo"
                "content": "lorem ipsum"
                "createdBy": {
                    "id": "e2bfdd7c-eec0-4bb4-9ded-7c8d08559b60",
                    "name": "Diego",
                    "email": "diego.sierra0320@gmail.com"
                },
                "category": {
                    "id": 4,
                    "name": "Tecnologia"
                }
            }
        ]
    }