const weightInput = document.getElementById('weight-input');
const heightInput = document.getElementById('height-input');
const btn = document.getElementById('btn');
const resultDiv = document.getElementById('result-div');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (weightInput.value === '') {
        weightInput.classList.add('border-2', 'border-danger')
    } else if (weightInput.value !== '') {
        weightInput.classList.remove('border-2', 'border-danger')
    };

    if (heightInput.value === '') {
        heightInput.classList.add('border-2', 'border-danger')
    } else if (heightInput.value !== '') {
        heightInput.classList.remove('border-2', 'border-danger')
    };

    if (heightInput.value !== '' && weightInput.value !== '') {

        const dietDiv = document.getElementById('diet-div');
        const diet = document.getElementById('diet');


        const res = weightInput.value / ((heightInput.value * .01) ** 2);

        if (res < 18.5) {
            resultDiv.innerHTML = `
        <div class="d-flex justify-content-center align-items-center flex-column">
            <img src="./assets/img/less18.5.png" alt="underweight">
            <span class="text-uppercase">underweight</span>
        </div>
        `

            dietDiv.classList.remove('d-none');
            diet.innerHTML = `
            <ul>
                <li>rice</li>
                <li>fish</li>
                <li>egg</li>
                <li>bread</li>
                <li>meat</li>
                <li>Fruit</li>
                <li>milk</li>
            </ul>
            `

            dietDiv.classList.remove('d-none');
            diet.innerHTML = `
                <ul>
                    <li>rice</li>
                    <li>fish</li>
                    <li>egg</li>
                    <li>bread</li>
                    <li>meat</li>
                    <li>Fruit</li>
                    <li>milk</li>
                </ul>
                `
        }
        if (18.5 <= res && res <= 24.9) {
            resultDiv.innerHTML = `
        <div class="d-flex justify-content-center align-items-center flex-column">
            <img src="./assets/img/betw18.5-24.9.png" alt="underweight">
            <span class="text-uppercase">normal</span>
        </div>
        `

            dietDiv.classList.add('d-none');
        }
        if (25 <= res && res <= 29.9) {
            resultDiv.innerHTML = `
        <div class="d-flex justify-content-center align-items-center flex-column">
            <img src="./assets/img/betw25.0-29.9.png" alt="underweight">
            <span class="text-uppercase">overweight</span>
        </div>
        `

            dietDiv.classList.remove('d-none');
            diet.innerHTML = `
        <ul>
            <li>chicken breast</li>
            <li>Lean beef</li>
            <li>Greek yogurt</li>
            <li>Green Peas</li>
            <li>egg</li>
            <li>lentils</li>
            <li>Cauliflower</li>
        </ul>
        `
        }
        if (30 <= res) {
            resultDiv.innerHTML = `
        <div class="d-flex justify-content-center align-items-center flex-column">
            <img src="./assets/img/betw30.0-34.9.png" alt="underweight">
            <span class="text-uppercase">obese</span>
        </div>
        `

            dietDiv.classList.remove('d-none');
            diet.innerHTML = `
        <ul>
            <li>Beans</li>
            <li>lentils</li>
            <li>Pea</li>
            <li>almonds</li>
            <li>Sunflower seeds</li>
            <li>Hazelnut</li>
            <li>exercise!!!!</li>
        </ul>
    `
        }

    };
});

