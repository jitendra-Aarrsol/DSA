//!Indirect Recursion
let money = 100;
unitPrice = 10;
let totalApple = 0;
const buyApple = (paisa) => {
    if(paisa > 0){
        console.log(`--mere pass ${paisa} paisa hai -- ${totalApple} kharida hu`);
        buyMore(paisa);
    } else {
        console.warn (`I don't have more mony, Total bought APPLE ${totalApple}`);
    }
}

const buyMore = (paisa) => {
    totalApple++;
    buyApple(paisa - unitPrice)
}

buyApple(money);