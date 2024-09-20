let cantidad = document.getElementById('cantidad');
let buton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    console.log(numeroDigitado);


    if( numeroDigitado < 8){
        alert("la cantidad de caracteres tiene que ser mayor de 8");
        }

        let password = '';

        for(let i=0; i < numeroDigitado; i++){

            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            console.log(caracterAleatorio);

            password+=caracterAleatorio;}

    (contrasena.value = password);

}








