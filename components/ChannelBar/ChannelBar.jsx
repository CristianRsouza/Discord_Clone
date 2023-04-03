import { useState } from 'react'
import './ChannelBar.css'

const ChannelBar = () => {
   
    const [channelBar, setChannelBar] = useState([
        {
            id: 1,
            class: 'Chat',
            name: 'chat1'
        },
        {
            id: 2,
            class: 'Chat',
            name: 'chat2'
        },
        {
            id: 3,
            class: 'Call',
            name: 'call3'
        },
        {
            id: 4,
            class: 'Call',
            name: 'call4'
        },
        {
            id: 5,
            class: 'Call',
            name: 'call5'
        },
    ])
   
    return(
        <div className='ChannelBar'>
            <div className="ChannelBar_Container">
                <h1>Server 1</h1>
                <hr />
                <div className='ChannelBar_Channels'>
                    <div className='ChannelBar_Text'>
                    <h1>[Text]</h1>
                        {channelBar.filter(channel =>
                        channel.class === 'Chat').map(filteredChannel =>
                        (
                        <li key={filteredChannel.id}>   
                           # {filteredChannel.name}
                        </li>
                        ))}

                    </div>
                    <div className='ChannelBar_Call'>
                        <h1>[Voice]</h1>
                        {channelBar.filter(channel =>
                        channel.class === 'Call').map(filteredChannel =>
                        (
                        <li key={filteredChannel.id}>   
                           V {filteredChannel.name}
                        </li>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChannelBar