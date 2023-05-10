import React from 'react'
import {Add} from "../../details"
import SingleAdd from '../inputFeild/SingleAdd';

interface Props{
    adds: Add[];
    setAdds: React.Dispatch<React.SetStateAction<Add[]>>;
}

const List: React.FC<Props>= ({adds, setAdds}:Props) => {
  return (
    <div className='list'>
        {adds.map((add) =>(
            
            <SingleAdd add={add} key={add.id} adds={adds} setAdds={setAdds}/>
        ))
             
        }
    </div>
  )
}

export default List