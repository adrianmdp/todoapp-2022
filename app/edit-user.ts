const params = new URLSearchParams(window.location.search);

const form = document.getElementById('form-edit-user');


const loadForm = async () => {
    
    const user = await getUser(params.get('id'))

    form?.name.value = user.name;
    form?.email.value = user.email;
    form?.pass.value = user.password;

}

loadForm()


form?.addEventListener('submit', async (event) => {

    // Hasta acá recibí un evento de donde puedo sacar textos de sus controles
    event.preventDefault()

    // Esos datos son de tipo string. No queremos enviarlos así a la siguiente capa
    // Los convertimos en un objeto
    
    const u = {
        id: params.get('id'),
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.pass.value
    }

    const data = await editUser(u)

    console.log(data);
});