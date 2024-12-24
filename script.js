function rollDice(){
    const amountOfDice = document.getElementById("amountOfDice").value;
    const button = document.getElementById("button");
    const result = document.getElementById("result");
    const resultImages = document.getElementById("resultImages");
    const total = document.getElementById("total");

    if (Number(amountOfDice)>10 || Number(amountOfDice)<1){
        result.textContent = `Error!\nEnter from 1-10`;
        resultImages.textContent = "";
        total.textContent = "";
        return;
    }

    const values = [];
    const images = [];
    let temp = 0;

    for (let i = 0; i<amountOfDice; i++){
        const value = Math.floor(Math.random()* 6 ) +1;
        values.push(value);
        images.push(`<img src="images/${value}.png">`);
        temp += value;
    }
    result.textContent = `Rolled: ${values.join(`, `)}`;
    resultImages.innerHTML = images.join(` `);
    total.textContent = `Total: ${temp}`;
}