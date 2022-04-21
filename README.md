# Calculadora de Pernoctas. Aeropuerto Internacional Arturo Michelena, Edo. Carabobo, Valencia. Venezuela

> Actualmente me encuentro laborando en el estacionamiento del aeropuerto de mi ciudad. Aqui ofrecemos el servicio de cuidar tu auto en el estacionamiento los dias que vayas de viaje.

> Las tarifas para este servicio son, 2$ el horario diurno (6AM, 6PM) y 3$ el horario nocturno (6PM, 6AM).

> Mi trabajo es realizar una calculadora para usar en el telefono que permita calcular cuanto debe pagar un usuario que pernocto. 

> Para realizar este calculo debe tomarse en cuenta: 

1. Fecha y hora de llegada del vehiculo.

2. Fecha y hora de salida del vehiculo.

3. Tarifas diurnas y nocturnas (2$, 3$).

4. Tasa cambiaria entre el dolar americano y el bolivar.

# Pasos para realizar la calculadora.

1. Obtener valores de fecha y hora de llegada y salida atraves de un input tipo "datetime-local".

2. Convertir estos valores a variables utilizables.

3. Calcular la diferencia entre la fecha de llegada y la fecha de salida (fechaSalida - fechaLlegada.)

### Esto nos va a regresar un numero en milisegundos. Debemos transformarlo a horas.

4. Lo transformamos a horas aplicando la siguiente formula: 

> (fechaLlegada - fecha salida) / 1000 / 60 / 60;

## Al dividir nuestro resultado en 1000, obtenemos la conversion en segundos. Al dividir nuevamente entre 60, obtenemos el resultado en minutos. Al dividir nuevamente a 60, obtenemos el resultado en horas. 

