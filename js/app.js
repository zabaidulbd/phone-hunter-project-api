const loadPhones = async (innerText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${innerText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);

    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
}

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerText = '';
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    });
}

document.getElementById('phone-button').addEventListener('click', function () {
    const inputField = document.getElementById('phone-input');
    const inputFieldValue = inputField.value;
    loadPhones(inputFieldValue)
})

loadPhones();