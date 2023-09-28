const url = 'https://reqres.in/api/users?page=2';

// Send request: fetch(url)
// Access data: response.json()

fetch(url).then((response) => {
    response.json().then((data) => {
        console.log(data.data[0]);
    })
});
