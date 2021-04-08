import {useState, useEffect} from "react";
import { canvasMinWidth } from "../../Common/CommonVariables";

function getWindowDimension(){


    let {innerWidth:width, innerHeight:height} = window;
    width = (width/100)*35;
    if(width < canvasMinWidth){
        width = canvasMinWidth;
    }
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