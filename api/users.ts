const addUser = async (user) => {

    const options = {
        method: 'POST',
        body: JSON.stringify(user),
        Headers: {
            contentType: 'application/json'
        }
    }

    const response = await fetch('https://todoapp-c3a11-default-rtdb.firebaseio.com/users.json', options)
    const data = await response.json()

    return mapToArray(data);

}

const getUsers = async () => {

    const response = await fetch('https://todoapp-c3a11-default-rtdb.firebaseio.com/users.json')
    const data = await response.json()

    return mapToArray(data);

}

const getUser = async (id) => {

    const response = await fetch(`https://todoapp-c3a11-default-rtdb.firebaseio.com/users/${id}.json`)
    const data = await response.json()

    return data;

}

const editUser = async (user) => {

    const options = {
        method: 'PATCH',
        body: JSON.stringify(user),
        Headers: {
            contentType: 'application/json'
        }
    }

    const response = await fetch(`https://todoapp-c3a11-default-rtdb.firebaseio.com/users/${user.id}.json`, options)
    const data = await response.json()

    return mapToArray(data);

}

const deleteUser = async (id) => {

    const options = {
        method: 'DELETE',
    }

    const response = await fetch(`https://todoapp-c3a11-default-rtdb.firebaseio.com/users/${id}.json`, options)
    const data = await response.json()

    return data;

}