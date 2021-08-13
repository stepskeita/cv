document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const name = document.querySelector('#name');
    const email = document.querySelector('#email')
    ;
    const message = document.querySelector('#message')

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = {
            name: name.value,
            email: email.value,
            message: message.value,
        }

        console.log(JSON.stringify(data))
        
        const url = "https://alieu-cv-backend.herokuapp.com/";

        const res = await fetch(url,  {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data),
        });

        const json = await res.json();
        console.log(json);
    })
})