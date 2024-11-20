import { useState } from "react";


const StatefulForm = () => {
    const [email,setEmail]=useState(null);
    const [pass,setPass] =useState(null);
    const [error,setError]=useState('');


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(pass.length <6){
            setError(' Password must longer than 6 ')
            
        }
        else{
            setError('');
            console.log(email,pass)

        }
        

    }

    const emailHandler=(e)=>{

        setEmail(e.target.value);
        // console.log(e.target.value)
        
    }

    const passHandler =(e)=>{

        setPass(e.target.value)
        // console.log(e.target.value)
            
        
    }

  return (
    <div>

<form onSubmit={handleSubmit}>

<input onChange={emailHandler} className='border border-red-600 rounded-md' type="text" name="name" />

<br />
<input onChange={passHandler} className='border border-red-600 rounded-md' type="password" name="password" />
<br />
<input className='border p-1 bg-slate-400  rounded-md' type="submit" value="submit" />
{
    error && <p>{error}</p>
}
</form>

    </div>



  )
}

export default StatefulForm