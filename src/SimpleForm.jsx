import React from 'react'

function SimpleForm() {

    const handleSubmit=(e)=>{
    
        // e.preventDefault();// prevent the page to reload
        console.log(e.target.name.value)
        console.log('form submitted')

    }
  return (
    <div>

        <form onSubmit={handleSubmit}>

            <input className='border border-red-600 rounded-md' type="text" name="name" />
            <br />
            <input className='border p-1 bg-slate-400  rounded-md' type="submit" value="submit" />
        </form>

    </div>
  )
}

export default SimpleForm