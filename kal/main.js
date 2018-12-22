window.onload=function(){
        var S=new Date();
tim(S.getHours(),S.getMinutes(),S.getSeconds());
}


function tim(h,m,s){
        d=document.getElementById("inp");
        s=Number(s);  
        s++;
            if(Number(h)>=24){h=0;}
            if(Number(m)>=60){h++;m=0;}
            if(Number(s)>=60){m++;s=0;}
    
        d.value=h+":"+m+":"+s;
        setTimeout(tim(h,m,s),1000);

}

