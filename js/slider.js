let couner = 1;
setInterval(function(){
    document.getElementById('radio' + couner).checked = true;
    couner++;
    if(couner > 4){
        couner = 1;
    }
}, 5000);