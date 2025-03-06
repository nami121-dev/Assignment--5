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

         // History section

        //  const titles = document.querySelectorAll('.title');
        
        // let index = 0;
        // let heading = [];

        // if(index < titles.length){
        //   heading.push(titles[index].innerText) ;
        //   index++;
        // }
       
           

      
         
        
         



         let history = document.getElementById('history-section');
         let currentTime = new Date().toLocaleTimeString();
         let newHistory = document.createElement('p');
         newHistory.innerHTML = `You have completed the task Add Dark Mode  at ${currentTime}`
         history.appendChild(newHistory)



    })




}


document.getElementById('6th-btn').addEventListener('click', function () {
    // event.preventDefault()
    alert('congrats!You have completed all the current task')
})







const today = document.getElementById('today');
let currentDate = new Date().toDateString();

const newDate = document.createElement('div');
newDate.innerHTML = `<p> ${currentDate} </p>`
today.appendChild(newDate)

// console.log(todayDate);


// random background color
document.getElementById('btn-theme').addEventListener('click',function(){
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode = "#" + randomNumber.toString(16);

    document.body.style.backgroundColor = randomCode;
})


// go to another window
document.getElementById('box-2').addEventListener('click',function(){
    window.location.href = "./discover.html"
})

// clear history
 document.getElementById('clear-btn').addEventListener('click',function(){
    document.querySelector('#history-section').innerText = ''

})




