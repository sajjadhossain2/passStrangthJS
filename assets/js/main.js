let input = document.querySelector('#password');
let showBtn = document.querySelector('#showBtn');
let inticator = document.querySelector('.inticator');
let weak = document.querySelector('.weak');
let medium = document.querySelector('.medium');
let strong = document.querySelector('.strong');
let text = document.querySelector('.text');
let regExpWeak = /[a-z]/; 
let regExpMedium = /\d+/; 
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/; 

input.addEventListener('keyup', triger);


function triger(e){
    if(input.value != ""){
        inticator.style.display = 'block';
        showBtn.style.display = 'block';
        inticator.style.display = 'flex';
        if(input.value.length >= 3 && (input.value.match(regExpWeak)) || (input.value.match(regExpMedium)) || (input.value.match(regExpStrong))){
            no = 1;
        }
        if(input.value.length >= 6 && ((input.value.match(regExpWeak)) && (input.value.match(regExpMedium))) || ((input.value.match(regExpWeak)) && (input.value.match(regExpStrong))) || ((input.value.match(regExpMedium)) && (input.value.match(regExpStrong)))){
            no = 2;
        }
        if(input.value.length >= 6 && (input.value.match(regExpWeak)) && (input.value.match(regExpMedium)) && (input.value.match(regExpStrong))){
            no = 3;
        }
        if(no == 1){
            weak.classList.add('active');
        }
        else{
            weak.classList.remove('active')
        }
        if(no == 2){
            weak.classList.add('active');
            medium.classList.add('active');
        }
        else{
            medium.classList.remove('active')
        }
        if(no == 3){
            weak.classList.add('active');
            medium.classList.add('active');
            strong.classList.add('active');

        }
        else{
            strong.classList.remove('active')
        }
        showBtn.onclick = function(){
            if(input.type == 'password'){
                input.type = 'text';
                showBtn.textContent = 'HIDE';
                showBtn.style.color = '#ff0000';
            }
            else{
                input.type = 'password';
                showBtn.textContent = 'SHOW';
                showBtn.style.color = '#00ff00';
            }
        }
    }
    else{
        inticator.style.display = 'none';
        showBtn.style.display = 'none';
    }
}