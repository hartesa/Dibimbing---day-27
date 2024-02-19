import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';


function App() {
  const [user, setUser] = useState([]);
  const [menu, setMenu] = useState([]);

  const  getUserData = () => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      setUser(response.data)})
    .catch((error) => {
      console.log(error)
    }); 
  }
  const  getMenu = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((response) => {
        setMenu(response.data.data.Data);
      })
      .catch((error) => {
        console.log(error);
      }); 
  }

  useEffect(() => {
    getUserData();
    getMenu();
  }, []);  

  console.log("data", user);
  console.log("menu", menu);

  return (
    <>
      {/* <h1>Hello World</h1>

     {user.map((item) => (
      <div key = {item.id}>
        <h1>{item.name}</h1>
        <h1>{item.phone}</h1>
      </div>
     ))} */}

      {menu
      .filter((item, index) => index < 3)
      .map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <img src={item.imageUrl} alt={item.name} style={{width: "200px"}} />
        </div>
      ))}

    </>
  );
}

export default App
