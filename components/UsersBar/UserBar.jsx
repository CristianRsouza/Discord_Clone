import { useState } from 'react'
import './UserBar.css'

const UserBar = () => {

const [user, setUser] = useState([{
        id: 1,
        rank: 'adm',
        name: 'Cristian'
    },
    {
        id: 2,
        rank: 'gerente',
        name: 'user2'
    },
    {
        id: 3,
        rank: 'gerente',
        name: 'user3'
    },
    {
        id: 4,
        rank: 'mod',
        name: 'user4'
    },
    {
        id: 5,
        rank: 'user',
        name: 'user5'
    },
    {
        id: 6,
        rank: 'user',
        name: 'user6'
    },
    {
        id: 7,
        rank: 'user',
        name: 'user7'
    },
    {
        id: 8,
        rank: 'user',
        name: 'user8'
    },
    {
        id: 9,
        rank: 'user',
        name: 'user9'
    },
    {
        id: 10,
        rank: 'user',
        name: 'user10'
    },
])

return(
<div className='UserBar'>
    <div className='Users'>
        <div className='Adm'>
            <h2>👑 Adm </h2>
            {user.filter(user => user.rank === 'adm').map(userAdm => <li>{userAdm.name}</li>) }
        </div>
        <div className='Gerente'>
            <h2>🥈 Gerente </h2>
            {user.filter(user => user.rank === 'gerente').map(userGerente => <li>{userGerente.name}</li>) }
        </div>
        <div className='mod'>
            <h2>🥉 Mod </h2>
            {user.filter(user => user.rank === 'mod').map(userMod => <li>{userMod.name}</li>) }
        </div>
        <div className='user'>
            <h2>🧡 User</h2>
            {user.filter(user => user.rank === 'user').map(user => <li>{user.name}</li>) }
        </div>
    </div>
</div>
)
}

export default UserBar