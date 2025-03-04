const buttons = document.querySelectorAll('.btn-completed');
for(let button of buttons){
    button.addEventListener('click',function(event){

        alert('Board updated successfully');
        event.target.disabled = true;

        const taskBox = document.getElementById('tasks-box');
        
        for( let i = 5; i >= 0; i--){
            console.log(i,taskBox);
        }
    })
}