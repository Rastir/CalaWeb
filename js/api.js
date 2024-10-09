// url frl spi
const apiUrl ="http://vps-4437505-x.dattaweb.com:8080/personas/traer"

fetch(apiUrl)
.then(Response => Response.json())
.then(data => console.log(data))
.catch(error => console.error(error))
