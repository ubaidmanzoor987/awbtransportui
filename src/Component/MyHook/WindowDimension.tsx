import {useState, useEffect} from "react";

function getWindowDimension(){
    const {innerWidth:width, innerHeight:height} = window;
    return ({width, height});
}


export default function useWindowDimensionHook(callbackWhenResize:any)
{
    const [windowDimension,setWindowDimension] = useState(getWindowDimension());

    useEffect(()=>{
        function handleResize(){
          //console.log("getWindowDimension()");
          //console.log(getWindowDimension());
            setWindowDimension(getWindowDimension());
            
        }
        window.addEventListener("resize",handleResize);
        return()=>window.removeEventListener("resize",handleResize);
    },[]);

    useEffect(callbackWhenResize,[windowDimension]);

    return windowDimension
}