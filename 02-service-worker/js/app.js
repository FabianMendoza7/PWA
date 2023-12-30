
// Confirmar si podemos usar el service Worker.
// if('serviceWorker' in navigator){
//     console.log('Podemos usarlo!');
// }

//console.log("navigator.serviceWorker:",navigator.serviceWorker);

if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js');
}