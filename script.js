function display(val){
    document.getElementById("screen").value+=val
}
function result(){
    let x=document.getElementById("screen").value
    let y=eval(x)
    document.getElementById("screen").value=y
}
function clr(){

    document.getElementById("screen").value= ""
}