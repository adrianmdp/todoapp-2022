const form = document.getElementById('form-add-user');

form?.addEventListener('submit', async (event) => {

    // Hasta acá recibí un evento de donde puedo sacar textos de sus controles
    event.preventDefault()

    // Esos datos son de tipo string. No queremos enviarlos así a la siguiente capa
    // Los convertimos en un objeto
    
    const u = {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.pass.value
    }

    const data = await addUser(u)

    window.location.href = 'users.html'
});