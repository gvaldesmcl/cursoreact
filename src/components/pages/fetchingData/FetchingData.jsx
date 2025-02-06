import { useEffect,useState } from "react";

const FetchingData = () =>{

    const [users,setUsers] = useState([]);

    useEffect(() =>{
    const getProducts = fetch("https://jsonplaceholder.org/users");
    getProducts
    .then((res) => res.json())
    .then((res) => setUsers(res))
    .catch((error) => console.log(error));      
    },[]);

    
    console.log(users.length);

    console.log(users);

    


    return (
    <div>
        {users.map((usuario) => {
            return(
                <div key={usuario.id}>
                    <h2>{usuario.firstname} - {usuario.lastname}</h2>
                </div>
            );
        })}
    </div>
    );

}

export default FetchingData;