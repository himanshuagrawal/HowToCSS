window.addEventListener('load',()=>{
    document.querySelectorAll('a').forEach((element)=>{
        element.addEventListener('click',(e)=>{
            e.preventDefault();
            document.querySelectorAll('a').forEach((element)=>{
                element.classList.remove('active');
            });
            if(e.target.tagName=='I'){
                e.target.parentElement.classList.add('active');
            }else{
                e.target.classList.add('active');
            }
            
        })
        
    });

})