


const loadTable = async (t) => {
    const users = await getUsers();

    t.querySelector('tbody').innerHTML = ''

    users.forEach(user => {
        const tr = document.createElement('tr');
        const tdID = document.createElement('td');
        const tdName = document.createElement('td');
        const tdEmail = document.createElement('td');
        const tdPass = document.createElement('td');
        const tdActions = document.createElement('td')

        tr.appendChild(tdID)
        tr.appendChild(tdName)
        tr.appendChild(tdEmail)
        tr.appendChild(tdPass)
        tr.appendChild(tdActions)

        const textID = document.createTextNode(user.id)
        tdID.appendChild(textID)
        const textName = document.createTextNode(user.name)
        tdName.appendChild(textName)
        const textEmail = document.createTextNode(user.email)
        tdEmail.appendChild(textEmail)
        const textPass = document.createTextNode(user.password)
        tdPass.appendChild(textPass)

        const editBtn = document.createElement('a')
        editBtn.setAttribute('href', `edit-user.html?id=${user.id}`)
        const textEditBtn = document.createTextNode('Editar');
        editBtn.appendChild(textEditBtn)

        const deleteBtn = document.createElement('button')
        const textDeleteBtn = document.createTextNode('Eliminar');
        deleteBtn.appendChild(textDeleteBtn)

        deleteBtn.addEventListener('click', async () => {
            await deleteUser(user.id)
            loadTable(t)
        })


        tdActions.appendChild(editBtn)
        tdActions.appendChild(deleteBtn)


        
        t?.querySelector('tbody')?.appendChild(tr);
    })

}

const table = document.getElementById('table-users');
loadTable(table);

