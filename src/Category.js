import React,{useState} from 'react'

export default function Category() {
    const [category,setCategory]=useState('');


    function Click(e) {

        
            console.log(e)

    
        console.log(e);
        function handleClick(e) {
            e.preventDefault();
           
        }
    }
    return (
        <div>
            <input 

            onChange={e=>Click(e.target.value)}
            type="text" 
            placeholder="Category"></input>
            <br></br>
            <buton onClick={Click}>KATEGORİ EKLE</buton>

        </div>
    )
}


