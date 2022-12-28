const beginDate = document.getElementById('beginDate');

const endDate = document.getElementById('endDate');

const btn = document.getElementById('btn');
btn.addEventListener('click', calcOvernight);

function calcOvernight()
{
    const finalBeginDate = new Date(beginDate.value + "T06:00:00");
    const finalEndDate = new Date(endDate.value)

    const diffHours = (finalEndDate - finalBeginDate) / 1000 / 60 / 60;

    const paymentHours = Math.floor(diffHours / 12);
    const rawPaymentHours = diffHours / 12;
  
    for(let i = 0; i < paymentHours; i++)
    {
        const dayTime = 2;
        const nightTime = 3;
        let initialPayment = 2;
        let finalPayment;
        let tempSum = 2;
        if(Number.isInteger(i / 2))
        {
            tempSum += nightTime
            console.log(tempSum);
            
        }
        else
        {
            tempSum += dayTime
            console.log(tempSum);
            
     }

}
}

