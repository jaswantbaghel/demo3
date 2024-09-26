import './Form.css';
import { useState } from 'react';
import Test from './TestComponent/Test';

function Form(){
    const [name,setName] = useState();
    const [address,setAddress] = useState();
    const [age,setAge] = useState();
    const [click,setClick] = useState(0);
    
    function HandleSubmit(){
         setClick(1);
    }

    return(<>{(click==0)?<div id='section'>
        <div id='innersection'>
            <form>
                <h2>Registration Form : </h2>
                <label>Name : </label><br/>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} /><br/>
                <label>Address : </label><br/>
                <input type='text' value={address} onChange={e=>setAddress(e.target.value)}/><br/>
                <label>Age : </label><br/>
                <input type='text' value={age} onChange={e=>setAge(e.target.value)}/><br/><br/>
                <button id='btn' type='button' onClick={HandleSubmit}>Submit</button>
            </form>
        </div>
       </div>: <Test name={name} address={address} age={age} />}
       
    </>)
}
export default Form;