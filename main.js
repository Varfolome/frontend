function FirstJs(){
    let texts = document.getElementById("text");
    if (texts.classList.contains("animate")){
        texts.classList.remove("animate");
        console.log("class was removed");
    }
    
    texts.classList.add("animate");
    console.log("class was added");
}