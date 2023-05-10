
import React, { useState } from 'react'
import {Add} from '../../details'
import {AiFillDelete, AiFillEdit, AiOutlineUser} from 'react-icons/ai'

type Props = {
    add:Add;
    adds: Add[];
    setAdds: React.Dispatch<React.SetStateAction<Add[]>>; 
};



const SingleAdd = ({add, adds, setAdds}:Props) => {


    const [edit, setEdit] = useState<boolean>(false);
    const [editAdd, setEditAdd] = useState<string>(add.add)

    const handleDone = (id:Number) =>{
        setAdds(adds.map((add) => add.id === id ?{...add, isDone:!add.isDone}:add));
    };

    const handleDelete = (id : number) =>{
        setAdds(adds.filter((add)=> add.id !== id));
   };

   const handleEdit = (e:React.FormEvent, id:Number) =>{
    e.preventDefault();

    setAdds(adds.map((add)=>(
        add.id ===id?{...add,add:editAdd}:add
    )));
    setEdit(false);

   };

  return (
    <form className='adds_single' onSubmit={(e)=>handleEdit(e,add.id)}>


        {
            edit ? (
                <input value={editAdd} onChange={(e) => setEditAdd(e.target.value)}/>
            ):
                add.isDone ? (
                    <s className='adds_single_text'>
                {add.add}
            </s>
                ):(
                    <span className='adds_single_text'>
                {add.add}
            </span>)
                
            
        }

        {/* {
            add.isDone ? (
                <s className='adds_single_text'>
            {add.add}
        </s>
            ):(
                <span className='adds_single_text'>
            {add.add}
        </span>
            )
        } */}
        
        <div>
            <span className='icon' onClick={()=>{
                if(!edit && !add.isDone){
                    setEdit(!edit);
                }
            }}>
                <AiFillEdit/>
            </span>
            <span className='icon' onClick={()=> handleDelete(add.id)}>
                <AiFillDelete />
            </span>
            <span className='icon' onClick={()=> handleDelete(add.id)}>
                <AiOutlineUser/>
            </span>
        </div>
    </form>
  )
}

export default SingleAdd