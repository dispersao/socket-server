import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import OSC from 'osc-js'

function App() {
  const [isConnected, setIsConnected] = useState(false)
  const [osc, setOsc] = useState()
  const [receivedMessages, setReceivedMessages] = useState([])

  useEffect(()=>{
    const osc = new OSC()
    setOsc(osc)
    osc.open({ port: 9912 })

    console.log(osc)

    osc.on('open', () => {
      const message = new OSC.Message('/test', 12.221, 'hello')
      osc.send(message)
      setIsConnected(true)
    })

    osc.on('/response', message => {
      console.log(message.args)
      setReceivedMessages((updatedMessages)=>{
        return [...updatedMessages, message.args[0]]
      })
    })
  }, [])
  return (
    <div>
      <div>{isConnected.toString()}</div>
      <div>{receivedMessages.join('<br />')}</div>
    </div>
  );
}

export default App;
