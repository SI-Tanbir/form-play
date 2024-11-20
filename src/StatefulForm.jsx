import { useState } from "react";


const StatefulForm = () => {
    const [email,setEmail]=useState(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email)

    }

    const emailHandler=(e)=>{

        setEmail(e.target.value);
        // console.log(e.target.value)
        

    }

  return (
    <div>

<form onSubmit={handleSubmit}>

<input onChange={emailHandler} className='border border-red-600 rounded-md' type="text" name="name" />
<br />
<input className='border p-1 bg-slate-400  rounded-md' type="submit" value="submit" />
</form>

    </div>



  )
}

export default StatefulForm