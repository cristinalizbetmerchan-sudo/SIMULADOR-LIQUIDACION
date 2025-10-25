
function calcular() {
    const salario = parseFloat(document.getElementById('salario').value);
    const meses = parseInt(document.getElementById('meses').value);
    const salariosPeriodo = parseFloat(document.getElementById('salarios_periodo').value);
    const region = document.getElementById('region').value;
    const sbu = 450;

    if (isNaN(salario) || isNaN(meses) || isNaN(salariosPeriodo)) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }

    const fondoReserva = (salario * 0.0833) * meses;
    const decimoTercero = (salariosPeriodo / 12) * meses;
    const decimoCuarto = (sbu / 12) * meses;

    const resultados = `
        <h3>Resultados:</h3>
        <p><strong>Fondo de Reserva:</strong> $${fondoReserva.toFixed(2)}</p>
        <p><strong>Décimo Tercero:</strong> $${decimoTercero.toFixed(2)}</p>
        <p><strong>Décimo Cuarto:</strong> $${decimoCuarto.toFixed(2)}</p>
    `;
    document.getElementById('resultados').innerHTML = resultados;

    const historial = document.getElementById('historial');
    const item = document.createElement('li');
    item.textContent = `Salario: $${salario}, Meses: ${meses}, Fondo: $${fondoReserva.toFixed(2)}, 13ro: $${decimoTercero.toFixed(2)}, 14to: $${decimoCuarto.toFixed(2)}`;
    historial.appendChild(item);
}

function reiniciar() {
    document.getElementById('salario').value = '';
    document.getElementById('meses').value = '';
    document.getElementById('salarios_periodo').value = '';
    document.getElementById('resultados').innerHTML = '';
}

function toggleModo() {
    document.body.classList.toggle('dark');
}

function exportarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const resultados = document.getElementById('resultados').innerText;
    doc.text(resultados, 10, 10);
    doc.save("resultados_liquidacion.pdf");
}
