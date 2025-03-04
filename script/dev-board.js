const buttons = document.querySelectorAll('.btn-completed');
for(let button of buttons){
    button.addEventListener('click',function(event){

        alert('Board updated successfully');
        event.target.disabled = true;

        let taskNumber = document.getElementById('task-number');
        let currentNumber = parseInt(taskNumber.innerText);
        
        
           
                if(currentNumber > 0){
                    taskNumber.innerText = currentNumber - 1;

                }

                let headerNumber = document.getElementById('header-number');
                let number = parseInt(headerNumber.innerText);

                // console.log(typeof number);
                 if(number > 0){
                    headerNumber.innerText = number + 1;
                 }

                


        
                
            
       
    })
}