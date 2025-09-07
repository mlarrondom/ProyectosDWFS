const maxPreguntas = 8;

// Clase que permita crear preguntas, que incluyan las opciones y se genere un array para votos según la cantidad de opciones
class Pregunta {
    constructor(texto, opciones){
        this.texto = texto;
        this.opciones = opciones;
        this.votos = new Array(opciones.length).fill(0)
    }

    // Método para votar por una pregunta específica
    votarPorPregunta(indiceOpcion) {
        // Validar valor ingresado y luego sumar a la opción seleccionada
        if(indiceOpcion >= 0 && indiceOpcion < this.opciones.length){
            this.votos[indiceOpcion]++;
        }
    }

    // Método de mensaje que se mostrará en el prompt (pregunta + opciones (una por fila con número))
    mensajePrompt() {
        const lista = this.opciones.map((op, idx) => `${idx + 1}. ${op}`).join("\n");
        return `Pregunta: ${this.texto} \n${lista} \n\nEscribe el número de tu opción`;
    }
}


// Clase Encuesta
class Encuesta {
    constructor(maxPreguntas) {
        this.maxPreguntas = maxPreguntas;
        this.preguntas = []; 
    }

    // Método para agregar pregunta
    agregarPregunta(texto, alternativas) {
        const opciones = alternativas
        .split(",")
        .map(c => c.trim());

        // Validar que la pregunta no sea vacía y se entreguen mínimo 2 opciones/alternativas
        if (!texto.trim()) throw new Error(`La pregunta está vacía`);
        if (opciones.length < 2) throw new Error(`Mínimo debes ingresar 2 alternativas`);

        this.preguntas.push(new Pregunta(texto, opciones));
    }


    // Crear la encuesta
    crearEncuesta() {
        for (let i = 0; i < this.maxPreguntas; i++) {
            let texto = "";
            // Sistema solicita pregunta, valida que no sea null ni vacía
            do {
                texto = prompt(`Pregunta ${i + 1}: Escribe el enunciado`);
                if (!texto || !texto.trim()){
                    alert(`La pregunta está vacía, ingrésala otra vez`)
                }
            } while (!texto || !texto.trim())

            let alternativas = "";
            // Sistema solicita alternativas, valida que no sean null y que por lo menos sean dos  
            do {
                alert(`Ahora deberás escribir las alternativas para ${texto}`)
                alternativas = prompt(`Escribe las alternativas separadas por coma (ej. Santiago, Talca, Temuco)`)
                const validarAlternativas = alternativas &&
                                            alternativas.split(",").map(c => c.trim()).length >= 2;
                if (!validarAlternativas){
                    alert(`Debes ingresar como mínimo 2 alternativas`)  
                } 
            } while (!alternativas || alternativas.split(",").map(c => c.trim()).length < 2);

            // Ingresa la pregunta con sus alternativas a la encuesta
            this.agregarPregunta(texto, alternativas);
        }
    }

    // Votar para todas las preguntas que tiene la encuesta
    votar() {
        for (let i = 0; i < this.preguntas.length; i++) {
            const p = this.preguntas[i];
            let indice = -1;
            const respuesta = prompt(p.mensajePrompt());
            const num = parseInt(respuesta);
            indice = num - 1;

            alert(`Elegiste la opción: ${p.opciones[indice]}`)
            // Agregar voto según alternativa/opción seleccionada
            p.votarPorPregunta(indice);
        }
    }

    // Mostrar resultados en la consola
    mostrarResultados() {
        console.log(`Resultados hasta el momento`);
        this.preguntas.forEach((p, idx) => {
            console.log(`P${idx + 1}: ${p.texto}`);
            p.opciones.forEach((op, i) => console.log(` ${i + 1}. ${op}: ${p.votos[i]} votos`));
        });
    }

    // Realizar rondas de votaciones hasta que el usuario quiera parar
    realizarVotaciones() {
        let nuevaVotacion = 1;
        do {
            this.votar();
            this.mostrarResultados();
            const r = prompt(`¿Deseas votar nuevamente?\n 1. Sí \n 2. No \n\n Escribe el número de tu opción:`);
            nuevaVotacion = parseInt(r);
        } while (nuevaVotacion === 1);
    }
}


// ----------- Ejecutar el programa -----------

// Crear la encuesta
const encuesta = new Encuesta(maxPreguntas);
encuesta.crearEncuesta();

// Votar las rondas que el usuario quiera
encuesta.realizarVotaciones();