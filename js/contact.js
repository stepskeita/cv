document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const name = document.querySelector('#name');
    const email = document.querySelector('#email')
    ;
    const message = document.querySelector('#message');
    const section = document.querySelector('section')
    const alert = document.querySelector('.alert')
    const spinner =  `<div class="lds-facebook"><div></div><div></div><div></div></div>`


    form.addEventListener('submit', sendData);

    async function sendData (e){

        section.innerHTML = spinner;

        e.preventDefault();

        const data = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        
        const url = "https://alieu-cv-backend.herokuapp.com";
    
        const res = await fetch(url,  {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data),
        });

        const status = await res.status;
        section.innerHTML = ``
        section.appendChild(form)
        if(status !== 200) {
            alert.innerHTML = `Server error send me a message on alieukeita201@gmail.com`
            alert.classList.add('error')
        }
        else {
            alert.innerHTML = `Message sent`
            alert.classList.add('success')
        }
        
       setTimeout(() => {
        if(alert.classList.contains('error')) {
            alert.classList.remove('error')
        }
        else if (alert.classList.contains('success')) {
            alert.classList.remove('success')

        }
       }, 10000)

        
        
    }
})

