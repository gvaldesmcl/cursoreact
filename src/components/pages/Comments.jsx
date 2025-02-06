import {useFetch} from "../hooks/useFetch";


function Comments() {

    const respuesta = useFetch('https://jsonplaceholder.org/comments');

    console.log(respuesta);

  return (
    <div>Comments</div>
  ) 

}

export default Comments