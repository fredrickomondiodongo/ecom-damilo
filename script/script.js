const openbtn = document.getElementById("openbtn")
const side = document.getElementById("side")
const openbutton = document.getElementById("openbutton")

side.style.right= "-250px";

openbtn.onclick =function() {
    if( side.style.right == "-250px"){
        side.style.right = "0"
        openbutton.src="images/open-button.png"   
    }
    else{
        side.style.right="-250px"
        openbutton.src="images/open-button.png"
        openbutton.style.top="5px"
    }
}

function open(){
    
}
