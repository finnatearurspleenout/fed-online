window.onload = function() {
    // 1

    async function member() {
        let response = await fetch('https://jsonplaceholder.typicode.com/users/2');
        let data = await response.json();
        console.log(`Email ${data.email}, name ${data.name}`);
    }

    member();

    // 2

    async function filmInfo() {
        let resp = await fetch('https://swapi.dev/api/films/2/');
        let jsonData = await resp.json();
        console.log(`Title - ${jsonData.title}, date ${jsonData.release_date}`);
    }

    filmInfo();

    // 3

    async function planet() {
        let res = await fetch('https://swapi.dev/api/planets/3/');
        let json = await res.json();
        console.log(`Name planet - ${json.name}, climate ${json.climate}`);
    }

    planet();
}