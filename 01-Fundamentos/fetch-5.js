
// Clonar respuestas.

// fetch('https://reqres.in/api/users/1')
//     .then(resp => resp.json())
//     .then(usuario => {
//         console.log(usuario.data);
//     });

fetch('https://reqres.in/api/users/1')
    .then(resp =>  {

        // Esto no se puede hacer (obtener la misma respuesta, ya que ya se leyó la 1ra vez):
        /*
        resp.json().then(usuario => {
            console.log(usuario.data);
        });

        resp.json().then(usuario => {
            console.log(usuario.data);
        });       
        */ 

        // Esto se resuelve clonando:
        resp.clone().json()
        .then(usuario => {
            console.log(usuario.data);
        });

        resp.json().then(usuario => {
            console.log(usuario.data);
        });           
    });