function getMatrix (n) {
    let resArr= [];
    let container = document.getElementById("container");
    container.innerHTML = "";
    for (let i = 0; i < (n+1); i++) {
        resArr.push(i)
        let elem = document.createElement("div");
        elem.classList.add("div");
        elem.innerHTML = i;
        container.appendChild(elem);
        
    }
}
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    getMatrix(Number(inp.value))
})