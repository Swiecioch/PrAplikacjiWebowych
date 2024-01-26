import React, {useState} from 'react'

const Contact = () => {
    const [email, setEmail] = useState<string>('')
    const [Agree, setAgree] = useState<boolean>(false)
    const [Message, setMessage] = useState<string>('')
    const [Topic, setTopic] = useState<string>('')
    const [errors, setErrors] = useState<Record<string, string>>({});
    
    
const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgree(e.target.checked);
      };


const handleSubmit = () =>{
    console.log(email, Topic, Agree ,Message)
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const isEmailValid = (email: string): boolean =>{
    return emailRegex.test(email)
}


const errHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErr: Record<string, string> = {}
    if(!email) {
        newErr.email = 'Email is required'
    }
    else if(!isEmailValid(email)){
        newErr.email = 'Invalid email address'
    }
    if(!Message){
        newErr.Message = 'Message is required'
    }
    else if(Message.length <= 20){
        newErr.Message = 'Message must have at least 20 characters'
    }
    if(!Agree) newErr.Agree = 'You have to agree to terms'
    if(!Topic) newErr.Topic = 'You have to choose topic'

    setErrors(newErr)
    
    if(Object.keys(newErr).length === 0){
        handleSubmit();
    }

    
}

    return (
    <form onSubmit= {errHandleSubmit} className='max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md'>
        <label className='block mb-2'>
        <span className='text-gray-700'>Email:</span>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className= 'mt-1 p-2 w-full border rounded-md'/>
        {/* <button onSubmit={handleSubmit}>{email}</button> */}
        {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
        </label>


        <label className='block mb-2'>
            <span className='text-gray-700'>Topic: </span>
        <select name="" id="" className='mt-1 p-2 w-full border rounded-md' value={Topic} onChange={(e)=> setTopic(e.target.value)} >
            <option value="react">React</option>
            <option value="nextjs">NextJS</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
            <option value="java">Java</option>
        </select>
        {errors.Topic && <p className='text-red-500 text-sm'>{errors.Topic}</p>}
        </label>


        <label className='flex items-center mb-2'>
        <input type="checkbox" checked={Agree} onChange={handleCheckboxChange} className='mr-2'/>
            <span className='text-gray-700'>I agree to process my personal data</span>
            {errors.Agree && <p className='text-red-500 text-sm'>{errors.Agree}</p>}
        </label>
        <label className='block mb-2 text-gray-700'>
        Message:
            <textarea className='mt-1 p-2 w-full border rounded-md' value={Message} onChange={(e)=> setMessage(e.target.value)}></textarea>
            {errors.Message && <p className='text-red-500 text-sm'>{errors.Message}</p>}
        </label>
        <button className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700'>
            Submit
        </button>
    </form>
  )
}

export default Contact