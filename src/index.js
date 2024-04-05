const usersInformation = new UsersInformation();

async function App() {
  const users = await usersInformation.getAllUsers();
 }
 
App();
