const buttons = document.querySelectorAll('.btn-completed');
for (let button of buttons) {
    button.addEventListener('click', function (event) {

        alert('Board updated successfully');
        event.target.disabled = true;

        let taskNumber = document.getElementById('task-number');
        let currentNumber = parseInt(taskNumber.innerText);



        if (currentNumber > 0) {
            taskNumber.innerText = currentNumber - 1;

        }

        let headerNumber = document.getElementById('header-number');
        let number = parseInt(headerNumber.innerText);

        // console.log(typeof number);
        if (number > 0) {
            headerNumber.innerText = number + 1;
        }




        //  const historyContainer = document.getElementById('history-container');
        //  const history = document.getElementById('history');
        //  history.innerHTML = `
        //  <p>You have completed the task Add dark mode at date() PM </p>`
        //  historyContainer.appendChild(history);



        
        // let cards = document.querySelectorAll('.cards');
        // for(let i = 0; i < cards.length ; i++){
        //     let card = cards[i];
        //     let currentElement = event.target;
        //     while(currentElement){
        //         if(currentElement === card){
        //             let title = card.querySelector.innerText;
                    
        //         }
        //         currentElement = currentElement.parentElement;
        //     }
        // }

        let historyContainer = document.getElementById('history-container');
        // const history = document.getElementById('history');
        
        let currentTime = new Date().toLocaleTimeString();
        historyContainer.innerHTML = `You have completed the task "${title}" at ${currentTime}`









    })
}