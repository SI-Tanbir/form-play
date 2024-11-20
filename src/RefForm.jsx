import { useRef } from "react"



const RefForm = () => {

    const usname =useRef(null);
    const uspass=useRef(null);

    function handleSubmit(e){

        e.preventDefault()
        console.log(usname.current.value)
        console.log(uspass.current.value)
    }
  return (
    <div>

<form onSubmit={handleSubmit}>

<input ref={usname} className='border border-red-600 rounded-md' type="text" name="name" />

<br />
<input ref={uspass} className='border border-red-600 rounded-md' type="password" name="password" />
<br />
<input className='border p-1 bg-slate-400  rounded-md' type="submit" value="submit" />


</form>
    
        </div>
  )
}

export default RefForm