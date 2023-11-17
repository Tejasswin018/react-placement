import React,{useState} from 'react';

const DynamicRendering = () => {

    const [btnTxt,setBtnTxt]=useState('Show Component');
    const [showData,setShowData]=useState(false);

    const handleEvent = () => {
        if(btnTxt==='Show Component'){
            setBtnTxt('Hide Component');
            setShowData(true);
        }
        else{
            setBtnTxt('Show Component');
            setShowData(false);
        }
    }
    return (
    <>
        { showData ? <p>Hi! How are You!!!</p> : <p></p>}
        <button onClick={handleEvent}>{btnTxt}</button>
    </>
  )
}
export default DynamicRendering;