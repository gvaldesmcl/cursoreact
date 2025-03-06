import { useEffect,useState } from "react";

export const useFetch = (endPoint) =>{

 const [data,setData] = useState([]);

    useEffect(()=>{

        const getData = fetch(endPoint);

        getData
        .then((res)=> res.json())
        .then((res)=> setData(res))

    },[]);


    return {data: data,status:200,msg:'OK'};

}