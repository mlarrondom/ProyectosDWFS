const encuesta = [];
const maxPreguntas = 8;
let pregunta = "";
let alternativas = [];
let nuevaVotacion = 1;


// Ingresar preguntas
for(let i = 0; i < maxPreguntas; i++){
    
    do {
        pregunta = prompt(`Pregunta ${i+1}: Escribe el enunciado`);
        if (!pregunta || pregunta.trim().length === 0){
            alert("La pregunta está vacía, ingrésala otra vez");
        }
    } while (!pregunta || pregunta.trim().length === 0);
    encuesta.push({
        texto: pregunta,
        opciones: [],
        votos: []
    })
}


// Ingresar mínimo dos alternativas por pregunta
for (let i = 0; i < maxPreguntas; i++){
    
    do { 
        alert(`Ahora deberás escribir las alternativas para ${encuesta[i].texto}`);
        alternativas = prompt(`Escribe las alternativas de la pregunta separadas por coma (ej. Santiago, Talca, Temuco)`);


        if (!alternativas || alternativas.trim().length === 0){
        alert("Las alternativas están vacías, ingrésalas otra vez");
        } else if (alternativas.split(",").map(c => c.trim()).length < 2){
        alert("Las alternativas deben ser mínimo 2, ingrésalas otra vez");
        }

    } while (!alternativas || alternativas.trim().length === 0 || alternativas.split(",").map(c => c.trim()).length < 2);
    
    let alternativasLimpias = alternativas.split(",").map(c => c.trim());
    encuesta[i].opciones = alternativasLimpias;
    encuesta[i].votos = new Array(alternativasLimpias.length).fill(0);
}


// Función para mostrar resultados
function mostrarResultados (encuesta) {
    console.log(`Resultados hasta el momento`);

    encuesta.forEach((p, idx) => {
        console.log(`P${idx + 1}: ${p.texto}`);

        const total = p.votos.reduce((a, b) => a + b, 0);

        p.opciones.forEach((op, i) => {
            const votos = p.votos[i];
            console.log(` ${i + 1}. ${op}: ${votos}`);
        })
    })
} 


// Votación
do {
    for (let i = 0; i < encuesta.length; i++){
        
        // Mensaje a mostrar
        let mensaje = 
            "Pregunta: " +
            encuesta[i].texto + "\n" + 
            encuesta[i].opciones.map((op, idx) => `${idx + 1}. ${op}`).join("\n") + 
            "\n\n Escribe el número de tu opción:"; 
    
        let respuesta = prompt(mensaje);
        let respuestaNumero = parseInt(respuesta);
        let indice = respuestaNumero - 1;
        alert(`Elegiste la opción ${encuesta[i].opciones[indice]}`);
        encuesta[i].votos[indice]++;
    }
    
    let mensaje
    
    mostrarResultados(encuesta);

    // Preguntar al usuario si quiere volver a votar
    nuevaVotacion = prompt(`¿Deseas votar nuevamente? \n 1. Sí \n 2. No \n\n Escribe el número de tu opción:`);
    
} while (parseInt(nuevaVotacion) === 1);


