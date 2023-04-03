import { useState } from 'react'
import './ServerBar.css'

const ServerBar = () => {
    
    const [server, setServer] = useState([
        {
            id:1,
            hasNotification: true
        },
        {
            id:2,
            hasNotification: true
        },
        {
            id:3,
            hasNotification: false
        },
        {
            id:4,
            hasNotification: true
        },
    ])
    
    return(
        <div className='ServerBar'>
            <div className='ServerBar_Container'>
                <div className='ServerBar_Logo'></div>
                <hr />
                <div className='ServerBar_ServerContainer'>
                    {server.map(server =>
                    <li id={server.id} className={server.hasNotification ? 'hasNotification' : '' }>

                    </li>)

                    }
                </div>
            </div>
        </div>
    )
}

export default ServerBar