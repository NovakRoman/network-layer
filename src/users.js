function UsersInformation() {
}

UsersInformation.prototype.getAllUsers = async function () {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (response.ok) {
    const users = await response.json();
    console.log(users);
    users.forEach(item => { console.log('id', item.id); })
    users.forEach(item => { console.log('name', item.name); })
    users.forEach(item => { console.log('email', item.email); })
    users.forEach(item => { console.log('city', item.address.city); })
    
    return users;
  } else {
  alert("Ошибка HTTP: " + response.status);
}
};
