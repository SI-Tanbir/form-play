



import React from 'react'
import useInputState from './useInputState';

const HookForm = () => {
    const [name,setHandle] = useInputState('shafik')

    const handleSubmit =(e)=>{
        console.log('form data',name)
        e.preventDefault();


    }

    return (
        <div>




            <form onSubmit={handleSubmit}>

                <input  value={name} onChange={setHandle} className='border border-red-600 rounded-md' type="text" name="name" />

                <br />
                <input  className='border border-red-600 rounded-md' type="password" name="password" />
                <br />
                <input className='border p-1 bg-slate-400  rounded-md' type="submit" value="submit" />


            </form>




        </div>
    )
}

export default HookForm;