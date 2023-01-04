const beginDate = document.getElementById('beginDate');
const endDate = document.getElementById('endDate');

const dollar = document.getElementById('dollar');

const inputResult = {
    inputDollarResult: document.getElementById(`dollarFinalPayment`),
    inputBolivarResult: document.getElementById(`bolivarFinalPayment`)
}

const btn = document.getElementById('btn');
btn.addEventListener('click', calcOvernight);

function calcOvernight()
{
    const finalBeginDate = new Date(beginDate.value + "T06:00:00"); 
    const finalEndDate = new Date(endDate.value);
    const dollarValue = parseFloat(dollar.value);
    const diffHours = (finalEndDate - finalBeginDate) / 1000 / 60 / 60; // Convertimos la diferencia de tiempo a horas. 
    const paymentHours = Math.floor(diffHours / 12); // Obtenemos las horas que pueden cobrarse, segundo las normas del estacionamiento. 

    const arr = [];

    for(let i = 0; i <= paymentHours; i++)
    { 
              
        const dayTime = 2;
        const nightTime = 3;
        if(Number.isInteger(i / 2))
        {
            
            arr.push(nightTime);
            
        }
        
        else if(!Number.isInteger(i / 2))
        {
            arr.push(dayTime);
                
        }
        if(i == paymentHours)
        {
           const finalPayment = arr.reduce((acc, cur) => acc + cur, 0).toFixed(2);
           const bolivarFinalPayment = (finalPayment * dollarValue).toFixed(2);

           inputResult.inputDollarResult.innerText = finalPayment;
           inputResult.inputBolivarResult.innerText = bolivarFinalPayment;

        }
    }
}

