const buttons = document.querySelectorAll('.btn-completed');
for (let button of buttons) {
    button.addEventListener('click', function (event) {
        event.preventDefault()

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


        //******************************** */ try again*********************************************

        // let historyContainer = document.getElementById('history-container');
        // // const history = document.getElementById('history');

        // let currentTime = new Date().toLocaleTimeString();
        // historyContainer.innerHTML = `You have completed the task  at ${currentTime}`









    })




}


document.getElementById('6th-btn').addEventListener('click', function (event) {
    event.preventDefault()
    alert('congrats!You have completed all the current task')
})







const today = document.getElementById('today');
let currentDate = new Date().toDateString();

const newDate = document.createElement('div');
newDate.innerHTML = `<p> ${currentDate} </p>`
today.appendChild(newDate)

// console.log(todayDate);



