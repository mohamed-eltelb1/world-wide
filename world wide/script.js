let x = document.getElementById('d-flex');
let icon1 = document.getElementById('icon');

function icon(){
    // اخفاء السيرش 
    document.getElementById('me-2').style.display="block";

//    امسك ايقونه السيرش و الاكس اخفي واحده و اظهر الثانيه 
    let serchElement = document.getElementById('serch');
    let circleXmark = document.getElementById('circle-xmark');
    serchElement.style.display="none";
    circleXmark.style.display="block";


    // اعمل ايكونه سيرش و حطها جنب السيرش الجديد 
    let i = document.createElement('i');
    i.className="fa-solid fa-magnifying-glass";
    x.appendChild(i);

    // اعمل ايقونه اكس و حطها مكان السيرش فوق 
    let y = document.createElement('i');
    y.className = "fa-solid fa-circle-xmark";
    icon1.appendChild(y);

    circleXmark.addEventListener('click' , function(){
        document.getElementById('me-2').style.display="none";
        i.style.display="none";
        circleXmark.style.display="none";
        serchElement.style.display="block";
    })
};

let faUser = document.getElementById('faUser');
let layOut = document.getElementsByClassName('layout')[0];
let cancle = document.getElementById('cancle');
faUser.addEventListener('click' , function(){
    layOut.style.display="block";

});
cancle.addEventListener('click' , function(){
    layOut.style.display="none";
});

let car = document.getElementById('car');

window.addEventListener('scroll', function(){
    if(scrollY >= 900){
        car.style.display="block";
    }else{
        car.style.display="none";
    }
});

car.addEventListener('click' , function(){
    scroll (0 , 0);
});    




