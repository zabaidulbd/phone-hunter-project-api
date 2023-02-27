const loadPhones = async (innerText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${innerText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);

    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
}

const displayPhones = (phones, dataLimit) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerText = '';
    const showAll = document.getElementById('show-all');
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none');
    }

    const searchPhoneId = document.getElementById('search-phone');
    if (phones.length === 0) {
        searchPhoneId.classList.remove('d-none')
    }
    else {
        searchPhoneId.classList.add('d-none')
    }

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
                    <button onclick = "showPhoneDetails('${phone.slug}')" class ="btn btn-primary">Details</button>
                </div>
            </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    });
    // stop toggle
    loadToggle(false);
}

const processSearch = (dataLimit) => {
    loadToggle(true);
    const inputField = document.getElementById('phone-input');
    const inputFieldValue = inputField.value;
    loadPhones(inputFieldValue, dataLimit);
}

document.getElementById('phone-button').addEventListener('click', function () {
    // star toggle
    processSearch(10);
})

const loadToggle = isLoading => {
    const loadSpinner = document.getElementById('spinner');
    if (isLoading) {
        loadSpinner.classList.remove('d-none');
    }
    else {
        loadSpinner.classList.add('d-none');
    }
}

document.getElementById('btn-showAll').addEventListener('click', function () {
    processSearch();
})

// const showPhoneDetails = async (id) => {
//     const url = `https://openapi.programming-hero.com/api/phone/${id}`
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data.data);
// }
// loadPhones();