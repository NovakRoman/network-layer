function UsersInformation() {
}

UsersInformation.prototype.getAllUsers = async function () {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (response.ok) {
    const users = await response.json();
    console.log(users);
    users.forEach(item => { console.log(`id (${item.id}), name (${item.name}), email (${item.email}), phone (${item.phone}), company name(${item.company.name})`); })
    
    const groupedByCity = users.reduce((total, user) => {
    return {
    ...total,
    [user.address.city]: [...(total[user.address.city] || []), user]
    };
    }, {} );
    console.log(groupedByCity);

    users.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    console.log(users);

    const updateddUsers = [...users, ]
    console.log(updateddUsers);


    const newUsers = [];
    function restUsers({username, email, address, website, company, ...rest}) {
      return {...rest}
    }

    users.forEach(item => {
      newUsers.push(
        restUsers(item)
      )
    })
    console.log(newUsers);


    return users;
  } else {
  alert("Ошибка HTTP: " + response.status);
}
};
