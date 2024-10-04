document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://vps-4437505-x.dattaweb.com:8080/personas/traer'; // Reemplaza con la URL de tu API

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            const apiDataDiv = document.getElementById('api-data');
            apiDataDiv.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});