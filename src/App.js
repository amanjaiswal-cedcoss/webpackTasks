function populate(){
    let word="WEBPACK";
    for(let i=0;i<word.length;i++){
        document.getElementById("parent").innerHTML+=`<p>${word.charAt(i)}</p>`
    }
}
populate();