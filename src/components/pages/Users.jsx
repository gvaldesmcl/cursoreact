import { useEffect,useState } from "react";

const Users = () =>{
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        const getUsers = fetch('https://jsonplaceholder.org/users');
        getUsers
        .then((res) => res.json())
        .then((res) => setUsers(res))
        .catch((err) => console.log(err));

    },[]);

    console.log(users);

  return (
    <div>
        {
            users.map((users) => {

                return <h2 key={users.id}>{users.firstname}</h2>  

            })
        }
    </div>
  )
}

export default Users