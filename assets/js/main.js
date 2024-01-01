const weightInput = document.getElementById('weight-input');
const heightInput = document.getElementById('height-input');
const btn = document.getElementById('btn');
const resultDiv = document.getElementById('result-div');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const res = weightInput.value / (heightInput.value ** 2);

    if (res < 18.5) {
        resultDiv.innerHTML = `
        <div class="d-flex justify-content-center align-items-center flex-column">
            <img src="./assets/img/less18.5.png" alt="underweight">
            <span class="text-uppercase">underweight</span>
        </div>
        `
    } 
    else if (18.5 <= res <= 24.9) {
        resultDiv.innerHTML = `
        <div class="d-flex justify-content-center align-items-center flex-column">
            <img src="./assets/img/betw18.5-24.9.png" alt="underweight">
            <span class="text-uppercase">normal</span>
        </div>
        `
    } 
    else if (25 <= res <= 29.9) {
        resultDiv.innerHTML = `
        <div class="d-flex justify-content-center align-items-center flex-column">
            <img src="./assets/img/betw25.0-29.9.png" alt="underweight">
            <span class="text-uppercase">overweight</span>
        </div>
        `
    } 
    else if (30 <= res <= 34.9) {
        resultDiv.innerHTML = `
        <div class="d-flex justify-content-center align-items-center flex-column">
            <img src="./assets/img/betw30.0-34.9.png" alt="underweight">
            <span class="text-uppercase">obese</span>
        </div>
        `
    }
})

