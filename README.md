# Acortador de URLs (_URL shortener_)

Esta herramienta tiene el proposito de generar una url mas corta a partir de un otra url dada. Adicionalmente, almacena los datos de cada url recortada para usos posteriores y para contar la cantidad de visitas a esa url.

_This tool has the purpose of generating a shorter url from another given url. Additionally, it stores the data of each url for later use and to count the number of visits to that url_

## Prerequisitos (_Requirements_)

Antes de utilizar esta herramienta, asegurese de cumplir con los siguientes requerimientos:

* Contar con una instalación de [Docker](https://docs.docker.com/engine/install/).
* Contar con una herramienta para pruebas de API, como [Postman](https://www.postman.com/).
* Acceso a una terminal de línea de comandos.

_Before using this tool, be sure to meet the following requirements:_

* _Have installed_ [Docker](https://docs.docker.com/engine/install/).
* _Have installed a testing API tool, like_ [Postman](https://www.postman.com/).
* _Access to a command line terminal_.

## Instalación (_Getting started_)

* Clone el repositorio del proyecto:
* _Clone this repository_

```
git clone https://github.com/jabriceno/url-shortener.git
```

* Ingrese a la carpeta del proyecto:
* _Move to the project folder_

```
cd url-shortener
```

* Construya el contenedor docker:
* _Build the container_

```
docker-compose build
```

* Inicie el contenedor:
* _Start the container_

```
docker-compose up -d
```

## Uso (_Usage_)

* Cree una llamada al servicio acortador de URL en su contendor local:
* _Create a call to the URL shortener service on your local container_

```
http://localhost:4000/api/short
```

* En el cuerpo de la llamada incluya el siguiente parametro:
* _In the body of the call include the following parameter:_

```
{
    "origUrl": "https://es.zenit.org"
}
```

* Si desea, puede importar el siguiente ejemplo de llamada:
* _You can import the following call example_

```
curl --location --request POST 'http://localhost:4000/api/short' \
--header 'Content-Type: application/json' \
--data-raw '{
    "origUrl": "https://github.com/"
}'
```

* Al ejecutar la llamada obtendra una respuesta como esta:
* _Executing the call you will get a response like this:_

```
{
    "clicks": 0,
    "_id": "6127dcb47949b6001a551daf",
    "origUrl": "https://github.com/",
    "shortUrl": "http://localhost:4000/k46wxRKB1",
    "urlId": "k46wxRKB1",
    "date": "Thu Aug 26 2021 18:25:56 GMT+0000 (Coordinated Universal Time)"
}
```

* Introduzca el valor corrspondiente a _"shortUrl"_ en su navegador para acceder a la web original.
* _Enter the value corresponding to _ "shortUrl" _ in your browser to access the original web._