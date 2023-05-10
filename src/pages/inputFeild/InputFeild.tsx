import './InputFeild.css';

import React, {useRef} from 'react'

interface Props{
  add: string;
  setAdd: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e: React.FormEvent) => void;
}

const InputFeild:React.FC<Props> = ({add, setAdd, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className='input' onSubmit={(e)=>{handleAdd(e);inputRef.current?.blur()}}>
        <input ref={inputRef} type='input' value={add} onChange={(e)=>setAdd(e.target.value)} placeholder='Enter your First Name' className='input_box'/>
        
        <button className='input_submit' type='submit'>svae</button>
    </form>
  )
}

export default InputFeild