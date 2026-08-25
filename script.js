const display=document.querySelector("main input");
const buts=document.querySelectorAll("button");

for(let but of buts){
    but.addEventListener("click",(e)=>{
        let text=e.target.innerText;
        if(text==='C' || display.value === 'Error!'){
            display.value="";
        }
        else if(text==='⌫'){
            display.value = display.value.slice(0, -1);
        }
        else if(text==='x'){
            display.value+="*";
        }
        else if(text==='^'){
            display.value+="**";
        }
        else if(text==='='){
            try{
                display.value=eval(display.value);
            }
            catch(error){
                display.value='Error!';
            }
        }
        else{
            display.value+=text;
        }
    })
}
