import { useState } from 'react'
import './main.css'

const Main = () => {
   
   const [mensage, setMensage] = useState([
    {
        id: 1,
        name: 'Cristian',
        content: 'Hello World'
    },
    {
        id: 2,
        name: 'user1',
        content: 'hello bro'
    },
    {
        id: 3,
        name: 'user4',
        content: 'yo'
    },
    {
        id: 4,
        name: 'user10',
        content: 'hi'
    },
    {
        id: 5,
        name: 'user3',
        content: 'Hello'
    },
    {
        id: 6,
        name: 'user5',
        content: 'Hello'
    },
    {
        id: 7,
        name: 'user8',
        content: 'yo yo yo'
    },
   ])
   
    return(
        <div className='Main'>
            <div className='Main_Header'>
                <h1># Chat1</h1>
            </div>
            <div className='Main_Container'>
                <div className='Main_Mensages'>
                    <div className='Main_Mensage'>
                        {mensage.map(mensage =>
                        <li key={mensage.id}>
                            <h1>{mensage.name}</h1>
                            <p>{mensage.content}</p>
                        </li>)}
                    </div>
                </div>
                <div className='Main_Input'>
                    <input type="text" placeholder='Converse em # chat1' />
                </div>
            </div>
        </div>
    )
}

export default Main