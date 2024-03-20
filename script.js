var menu = document.getElementById('menu');


  document.getElementById('toggleOff').addEventListener('click', function(){
    if(menu.classList.contains('on')){
    menu.classList.toggle('unactive');
    menu.classList.toggle('active');
    menu.classList.toggle('on');
    menu.classList.toggle('off');
  }
  }); 


  document.getElementById('toggleButton').addEventListener('click', function() {
    let first = 0;
    
    menu.classList.toggle('on');
    menu.classList.toggle('off');
    menu.classList.toggle('active');
    menu.classList.toggle('unactive');
    if(first == 0){
      first+=1;
      menu.classList.remove('first');
    }  
      
  });
  
  