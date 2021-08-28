const getApi = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
getApi();
const displayUsers = (data) => {
    const users = data.results;
    const userElem = document.querySelector('#users');
    for(const user of users){
        console.log(user);
        const {title, first, last} = user.name;
        const {city, state, country} = user.location;
        const singleUser = document.createElement('div');
        const userImg = user.picture.large;
        singleUser.innerHTML = `<img src="${userImg}"><h4>Name: ${title} ${first} ${last}</h4> <p>Email: ${user.email}</p><p>Address: ${city}, ${state}, ${country}</p> <p>Phone: ${user.phone}</p>`;

        userElem.appendChild(singleUser);
        
    }
    // console.log(users);
    
}