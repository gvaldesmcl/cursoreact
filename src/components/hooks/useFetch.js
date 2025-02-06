import { useEffect,useState } from "react";

export const useFetch = (endPoint) =>{

 const [data,setData] = useState([]);

    useEffect(()=>{

        const getData = fetch(endPoint);

        console.log(endPoint);

        getData
        .then((res)=> res.json())
        .then((res)=> setData(res))
        .catch((err) => console.log(err));



    },[]);


    return {data: data,status:200,msg:'OK'};

}