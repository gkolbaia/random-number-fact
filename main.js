let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let numberInput = document.querySelector('#numberInput');
let buttons = document.querySelector('#buttons');
numberInput.disabled = true;
buttons.addEventListener('click',function(e){
    if(e.target.textContent == 'Random Numbers'){ 
        numberInput.disabled = false;
        
        numberInput.value = ''; 
        document.querySelector('.card-title').style.display = 'none';
        document.getElementById('factText').textContent = '';
        document.getElementById('modeId').textContent = 'Random Number Facts';
        numberInput.addEventListener('input', getFactAjaxNumbers);
    }else if(e.target.textContent == 'Random Years'){
        numberInput.disabled = false;
        
        numberInput.value = '';
        document.querySelector('.card-title').style.display = 'none';
        document.getElementById('factText').textContent = '';
        document.getElementById('modeId').textContent = 'Random Year Facts';
        numberInput.addEventListener('input', getFactAjaxYears);
    }else if(e.target.textContent == 'Math'){
        numberInput.disabled = false;
        
        numberInput.value = '';
        document.querySelector('.card-title').style.display = 'none';
        document.getElementById('factText').textContent = '';
        document.getElementById('modeId').textContent = 'Random Number Math Facts';
        numberInput.addEventListener('input', getFactAjaxMath);
    }
})






function getFactAjaxNumbers(){
    let number = numberInput.value;
    if (number){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','http://numbersapi.com/'+number);
    xhr.onload = function(){
    if(this.status == 200){
       
        document.querySelector('.card-title').style.display = 'block';
        document.getElementById('factText').textContent = this.responseText;
        
    }
    }
    xhr.send();

}
    else{
        document.querySelector('.card-title').style.display = 'none';
        document.getElementById('factText').textContent = '';
}
}


function getFactAjaxYears(){
    let number = numberInput.value;
    if(number&&number>0){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','http://numbersapi.com/' + number +'/year' );
    xhr.onload = function(){
    if(this.status == 200){
        
        document.querySelector('h4').style.display = 'block';
        document.getElementById('factText').textContent = this.responseText;
        
    }
    }
    xhr.send();
}else{
    document.querySelector('.card-title').style.display = 'none';
            document.getElementById('factText').textContent = '';
}
}
function getFactAjaxMath(){
    let number = numberInput.value;
    if(number){
    let xhr =new XMLHttpRequest();
    xhr.open('GET', 'http://numbersapi.com/' + number + '/math');
    xhr.onload = function(){
        if(this.status == 200){
            
                document.querySelector('h4').style.display = 'block';
                document.getElementById('factText').textContent = this.responseText;
            
        }
    }
    xhr.send();
}else{
    document.querySelector('.card-title').style.display = 'none';
     document.getElementById('factText').textContent = '';
}

}