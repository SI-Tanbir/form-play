

const StatefulForm = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('it working')
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

export default StatefulForm