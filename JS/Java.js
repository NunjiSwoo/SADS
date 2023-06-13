let count = 1;
let countn = 4;
document.getElementById('radio2').checked = true;

setInterval(function(){
    nextImage();
}, 3000)

function nextImage(){
    if(count<4){
        count++
        document.getElementById('radio'+count).checked = true;
    }else if(countn>1){
        countn--
        document.getElementById('radio'+countn).checked = true;
    }else{
        count = 2;
        countn = 4;
        document.getElementById('radio'+count).checked = true;
    }

}

