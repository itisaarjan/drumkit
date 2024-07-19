let body=document.querySelector('body');

body.addEventListener('keypress',function(event){
    if(event.key==='s'){
        let elem=document.querySelector("#S");
        elem.classList.add('button-pressed');
        let audio=new Audio('audio/hihat.wav');
        audio.play();

        setTimeout(function(){
            elem.classList.remove('button-pressed');
        },100);
    }
    if(event.key==='a'){
        let elem=document.querySelector("#A");
        elem.classList.add('button-pressed');
        let audio=new Audio('audio/clap.wav');
        audio.play();

        setTimeout(function(){
            elem.classList.remove('button-pressed');
        },100);
    }
    if(event.key==='d'){
        let elem=document.querySelector("#D");
        elem.classList.add('button-pressed');
        let audio=new Audio('audio/kick.wav');
        audio.play();

        setTimeout(function(){
            elem.classList.remove('button-pressed');
        },100);
    }
    if(event.key==='f'){
        let elem=document.querySelector("#F");
        elem.classList.add('button-pressed');
        let audio=new Audio('audio/open-hat.wav');
        audio.play();

        setTimeout(function(){
            elem.classList.remove('button-pressed');
        },100);
    }
    if(event.key==='h'){
        let elem=document.querySelector("#H");
        elem.classList.add('button-pressed');
        let audio=new Audio('audio/ride.wav');
        audio.play();

        setTimeout(function(){
            elem.classList.remove('button-pressed');
        },100);
    }
    if(event.key==='j'){
        let elem=document.querySelector("#J");
        elem.classList.add('button-pressed');
        let audio=new Audio('audio/snare.wav');
        audio.play();

        setTimeout(function(){
            elem.classList.remove('button-pressed');
        },100);
    }
    if(event.key==='k'){
        let elem=document.querySelector("#K");
        elem.classList.add('button-pressed');
        let audio=new Audio('audio/tom.wav');
        audio.play();

        setTimeout(function(){
            elem.classList.remove('button-pressed');
        },100);
    }
    if(event.key==='l'){
        let elem=document.querySelector("#L");
        elem.classList.add('button-pressed');
        let audio=new Audio('audio/tink.wav');
        audio.play();

        setTimeout(function(){
            elem.classList.remove('button-pressed');
        },100);
    }
    if(event.key==='g'){
        let elem=document.querySelector("#G");
        elem.classList.add('button-pressed');
        let audio=new Audio('audio/boom.wav');
        audio.play();

        setTimeout(function(){
            elem.classList.remove('button-pressed');
        },100);
    }
    
    

})
let interval={};

body.addEventListener('mouseover',function(event){
    if(event.target===document.querySelector("#S")){
        let elem=document.querySelector("#S");
         let audio=new Audio('audio/hihat.wav');
        interval['S']=setInterval(function(){
             elem.classList.add('button-pressed');
            audio.play();
        },0)
        // audio.play();

        setTimeout(function(){
            elem.classList.remove('button-pressed');
        },100);
    }
    if(event.target===document.querySelector("#A")){
        let elem=document.querySelector("#A");
         let audio=new Audio('audio/clap.wav');
        interval['A']=setInterval(function(){
             elem.classList.add('button-pressed');
            audio.play();
        },0)
        // audio.play();

        setTimeout(function(){
            elem.classList.remove('button-pressed');
        },100)

    }
    if(event.target===document.querySelector("#D")){
        let elem=document.querySelector("#D");
         let audio=new Audio('audio/kick.wav');
        interval['D']=setInterval(function(){
             elem.classList.add('button-pressed');
            audio.play();
        },0)
        // audio.play();

        setTimeout(function(){
            elem.classList.remove('button-pressed');
        },100)

    }
    if(event.target===document.querySelector("#F")){
        let elem=document.querySelector("#F");
         let audio=new Audio('audio/open-hat.wav');
        interval['F']=setInterval(function(){
             elem.classList.add('button-pressed');
            audio.play();
        },0)
        // audio.play();

        setTimeout(function(){
            elem.classList.remove('button-pressed');
        },100)

    }
    if(event.target===document.querySelector("#H")){
        let elem=document.querySelector("#H");
         let audio=new Audio('audio/ride.wav');
        interval['H']=setInterval(function(){
             elem.classList.add('button-pressed');
            audio.play();
        },0)
        // audio.play();

        setTimeout(function(){
            elem.classList.remove('button-pressed');
        },100)

    }
    if(event.target===document.querySelector("#J")){
        let elem=document.querySelector("#J");
         let audio=new Audio('audio/snare.wav');
        interval['J']=setInterval(function(){
             elem.classList.add('button-pressed');
            audio.play();
        },0)
        // audio.play();

        setTimeout(function(){
            elem.classList.remove('button-pressed');
        },100)

    }
    if(event.target===document.querySelector("#K")){
        let elem=document.querySelector("#K");
         let audio=new Audio('audio/tom.wav');
        interval['K']=setInterval(function(){
             elem.classList.add('button-pressed');
            audio.play();
        },0)
        // audio.play();

        setTimeout(function(){
            elem.classList.remove('button-pressed');
        },100)

    }
    if(event.target===document.querySelector("#L")){
        let elem=document.querySelector("#L");
         let audio=new Audio('audio/tink.wav');
        interval['L']=setInterval(function(){
             elem.classList.add('button-pressed');
            audio.play();
        },0)
        // audio.play();

        setTimeout(function(){
            elem.classList.remove('button-pressed');
        },100)

    }
    if(event.target===document.querySelector("#G")){
        let elem=document.querySelector("#G");
         let audio=new Audio('audio/boom.wav');
        interval['G']=setInterval(function(){
             elem.classList.add('button-pressed');
            audio.play();
        },0)
        // audio.play();

        setTimeout(function(){
            elem.classList.remove('button-pressed');
        },100)

    }
});
body.addEventListener('mouseout',function(event){
    if(event.target===document.querySelector("#S")){
        clearInterval(interval['S']);
        let elem=document.querySelector("#S");
        elem.classList.remove('button-pressed');
    }
    if(event.target===document.querySelector("#A")){
        clearInterval(interval['A']);
        let elem=document.querySelector("#A");
        elem.classList.remove('button-pressed');
    }
    if(event.target===document.querySelector("#D")){
        clearInterval(interval['D']);
        let elem=document.querySelector("#D");
        elem.classList.remove('button-pressed');
    }
    if(event.target===document.querySelector("#F")){
        clearInterval(interval['F']);
        let elem=document.querySelector("#F");
        elem.classList.remove('button-pressed');
    }
    if(event.target===document.querySelector("#H")){
        clearInterval(interval['H']);
        let elem=document.querySelector("#H");
        elem.classList.remove('button-pressed');
    }
    if(event.target===document.querySelector("#J")){
        clearInterval(interval['J']);
        let elem=document.querySelector("#J");
        elem.classList.remove('button-pressed');
    }
    if(event.target===document.querySelector("#K")){
        clearInterval(interval['K']);
        let elem=document.querySelector("#K");
        elem.classList.remove('button-pressed');
    }
    if(event.target===document.querySelector("#L")){
        clearInterval(interval['L']);
        let elem=document.querySelector("#L");
        elem.classList.remove('button-pressed');
    }
    if(event.target===document.querySelector("#G")){
        clearInterval(interval['G']);
        let elem=document.querySelector("#G");
        elem.classList.remove('button-pressed');
    }
});