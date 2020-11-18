function getMatrix (n) {
    let resArr= [];
    let container = document.getElementById("container");
    container.innerHTML = "";
    for (let i = 2; i < (n+1); i++) {
        resArr.push(i)
        let elem = document.createElement("div");
        elem.classList.add('number');
        elem.innerHTML = i;
        container.appendChild(elem);  
    }
}
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let solBtn = document.getElementById("solBtn");
btn.addEventListener("click",()=>{
    getMatrix(+inp.value);
})

solBtn.addEventListener("click",()=>{
    const numbList = document.querySelectorAll('.number');
    numbList.forEach( (item, index) => {
        setTimeout(() => {
            isSimple(+item.innerHTML,item);
        },index*200)
    })

    

})

function isSimple(n, elem){
    if (n === 2) {
        elem.classList.add('simple');
        return
      }
    
      let i = 2;
      const limit = Math.sqrt(n);
      while (i <= limit) {
        if (n % i === 0) {
            elem.classList.add('active');
            return
        }
        i +=1;
      }
      elem.classList.add('simple');
      return true;
}