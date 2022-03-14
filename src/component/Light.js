import React, {useEffect} from "react";

const Light = ({ color, lights, setLights, click, setClick }) => {
    const n = 10/*введите на каком переходе светофора хотите его "выключить"*/
    useEffect(() => {/**/
        document.title = `Вы зажгли светофор ${click} раз`;
        if (click>n){
            setClick(0)
            setLights("grey")
        }
    }, [click]);
    return(
        <div>
            <div className="light"
                 style={{backgroundColor: (color === lights? color:'grey')}}
                 onClick={()=> {
                     setLights(color)
                     setClick(click+1)
                 }}>
            </div>
        </div>
    );
};
export default Light;