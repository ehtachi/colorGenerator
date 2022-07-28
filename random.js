let rand = "0123456789ABCDEF";
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {

    let col = "#";

    while(col.length != 7){
        col += rand.charAt(Math.floor(Math.random()*rand.length));
        console.log(col);
    };

    if(col === "#000000"){
        document.querySelector('h1').style.color = "#FFFFFF";
    } else {
        document.querySelector('h1').style.color = "#000000";
    }

    document.body.style.backgroundColor = col;
    document.querySelector('h1').textContent = col;
})

