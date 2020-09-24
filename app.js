const keys = document.querySelectorAll('.key'); //llama todos los elementos que tienen la clase key

function playSound(e) {
    /** 
     * la funcion play sound se encarga de ejecutar el sonido 
     * e.keyCode recibe el key code de la tecla, revisar tabla ascii
     * audio[data-key="${e.keyCode}" esto lo que hace es buscar el tag de audio cuyo data-key sea igual al keyCode que esta recibiendo
     */
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    /**
     * Si el sonido no es encontrado no no se reproduce, esto puede suceder si presiona cualquier tecla que no representa a los elementos de la bateria
     * en tal casi de que el sonido exista, se reporducira desde el inicio el sonido
     */
    if (!sound) return
        // inicia el sonido desde 0
    sound.currentTime = 0;
    // reproduce el sonido determinado por el keyCode
    sound.play();

}

/**
 * la funcion clickSound es la que se encarga de detectar el click en los elementos de la bateria
 * si un elemento de la beteria es clickeado se reproducira el sonido
 */
function clickSound(e) {
    /**
     * el e.target.dataset.key; contiene el valor del data-key con este valor se puede determinar el sonido que se necesita
     * dataset contiene todos los data-[llave de indentificacion de atributo]
     * ejemplo si tenemos un data-key en el elemento
     * el dataset tendra la key del data
     * tenemos data-key="1"
     * el dataset contendra = { key:"1" }
     * lo que viene despues del guion en el data es la llave que se agrega en el dataset
     */
    const audioClick = e.target.dataset.key;
    // aqui se busca el sonido a partir del data-key que se recibe
    const audio = document.querySelector(`audio[data-key="${audioClick}"]`);

    // si el audio no existe no se reproduce nada, el operado ! es un operador de negacion
    // el return evita que se continue la siguentes lineas de codigo, tambien se puede usar para retornar los valores donde las funciones son llamadas
    if (!audio) return
        // si el sonido existe se inicializa su tiempo de reproduccion en 0
    audio.currentTime = 0;
    // se inicia el sonido
    audio.play();
}

window.addEventListener('keydown', playSound);
/*
	window.addEventListener('keydown', playSound);
	Agrega un solo escuchador de eventos al la venta, la funcion a ejecutar es el sonido que representa esa tecla
*/

keys.forEach(key => key.addEventListener('click', clickSound));
/*
	keys.forEach(key => key.addEventListener('click', clickSound));
	Agregar un esuchardo de eventos para cada elemento que se tiene en la lista/array
	el evento a escuchar es la tecla que presiona, para asi determinar que elemento de la bateria es y reproducir su sonido.
*/