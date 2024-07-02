document.addEventListener('DOMContentLoaded', function() {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const diasPorMes = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let fecha;
    let ano;
    let mes;
    let diaCalendario;
    let diaNumero;
    let hora;
    let minutos;
    let segundos;

    // esta función permitirá asignarle 'valores' a cada variable cuando se llame.
    function actualizarVariables() {
        fecha = new Date();
        ano = fecha.getFullYear();
        mes = fecha.getMonth() + 1;
        diaCalendario = fecha.getDate();
        diaNumero = fecha.getDay();
        hora = fecha.getHours();
        minutos = fecha.getMinutes();
        segundos = fecha.getSeconds();
    }

    // si el i es igual a 0, no cae dentro del for y se va al siguiente bloque, sumando 0 + los días transcurridos.
    function calcularDiasTranscurridos() {
        let diasTranscurridos = 0;
        for (let i = 0; i < mes - 1; i++) {
            diasTranscurridos += diasPorMes[i];
        }
        diasTranscurridos += diaCalendario;
        return diasTranscurridos;
    }

    // para no hacer calculo matemático, se definieron 3 escenarios.
    function horaNegativa(hora, horaFin) {
        let horaRegresivo;
        if (hora === 22) {
            horaRegresivo = 23 - horaFin;
        } else if (hora > horaFin) {
            horaRegresivo = 0;
        } else {
            horaRegresivo = horaFin - hora;
        }
        return horaRegresivo;
    }

    function actualizarMensaje() {
        actualizarVariables();

        let nombreDia = diasSemana[diaNumero];

        const mesFin = 12;
        const horaFin = 22;
        const minFin = 59;
        const segFin = 59;

        const mesRegresivo = mesFin - mes;
        const horaRegresivo = horaNegativa(hora, horaFin);
        const minRegresivo = minFin - minutos;
        const segRegresivo = segFin - segundos;

        const diasTranscurridos = calcularDiasTranscurridos();

        const diasTotales = 366;
        const diasRestantes = diasTotales - diasTranscurridos;

        const mensajeRegresivo = 'Quedan ' + mesRegresivo + ' meses, ' + diasRestantes + ' días, ' + horaRegresivo + ' horas, ' + minRegresivo + ' minutos y ' + segRegresivo + ' segundos para que termine el año.';
        
        // actualizo el parrafo con id mensaje tarea con la var mensajeregresivo.
        const mensajeElemento = document.getElementById('mensajeTarea');
        mensajeElemento.innerText = mensajeRegresivo;
    }

    // Acá se llama con los valores de la función en si, actualizado al momento de correr el codigo.

    actualizarVariables();
    const nombreDiaInicial = diasSemana[diaNumero];

    const mensajeAlertaInicial = 'Hoy es ' + nombreDiaInicial + ' ' + diaCalendario + ' de ' + mes + ' de ' + ano + ', y son las ' + hora + ' horas, ' + minutos + ' minutos, ' + segundos + ' segundos.';
    alert(mensajeAlertaInicial);

    // estoy actualizando la funcion actualizar mensaje cada 1000 milisegundos (var, tiempo)
    setInterval(actualizarMensaje, 1000);
});
