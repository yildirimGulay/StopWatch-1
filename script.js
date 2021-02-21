let salise=document.querySelector('#salise');
let saniye=document.querySelector('#saniye');
let dakika=document.querySelector('#dakika');
let baslat=document.querySelector('.start');
let write=document.querySelector('.write');
//console.log(salise, saniye, dakika, baslat, write);
let st=0;
let sls=0;
let sns=0;

let set;

let newsls;
let newsns;
let newst;
let news;
let item;

function sifir(sure,say){
    sure.innerHTML=
    say<10 ? "0"+say : say;

    }


function salisesay(){
    if(sls<101){
      salise.innerHTML=sls;
      sls++;
      sifir(salise,sls);
      
    }
    if( sls===100){
       
        sns++;
        sls=0;
        saniye.innerHTML=sns;
        sifir(saniye,sns);
    }
    if( sns===60){
       
        st++;
        sns=0;
        dakika.innerHTML=st;
        sifir(dakika,st);
    }
    
    
    };
    
   
 function start(){
    set=  setInterval(salisesay, 10);
    };

function stop(){
    clearInterval(set);
    };


function reset(){
    st=0;
    sls=0;
    sns=0;

    salise.innerHTML=sls;
    saniye.innerHTML=sns;
    dakika.innerHTML=st;
    stop();
    sifir(salise,sls);
    sifir(saniye,sns);
    sifir(dakika,st);
    //write.style.visibility="hidden"; // gecici bi cozum, sifirlayamadim.
    //dele();

} 
/* function dele () {
    for(let i of write){
        write.removeChild(write.childNodes[i]);
    }
}
 */

function save(){
    newsls= salise.innerHTML;
    newsns= saniye.innerHTML;
    newst= dakika.innerHTML;
        
    write.style.visibility="visible";
    item=document.createElement('span');
    item.classList="item";
    item.textContent=`${newst} : ${newsns} : ${newsls}`;
    write.appendChild(item);
       
     }


 

//let int=

//baslat.document.addEventListener("click",setInterval(salisesay, 10) ) 

