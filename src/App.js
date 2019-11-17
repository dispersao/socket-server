import React from 'react'
import osc from 'osc/dist/osc-browser'


const App = ()=> {
  const port = new osc.WebSocketPort({
    url: "ws://localhost:8081"
  })
  port.open()

  port.on("ready", ready=> {
    console.log('im readyyyyy')
    port.on("message", function (oscMessage) {
      console.log("message", JSON.stringify(oscMessage, undefined, 2))
    })
  })
  const sendMessage = ()=> {
    console.log(port)
    port.send({
      address: "/hello",
      args: ["world"]
    })
  }

  return (
    <>
      <button onClick={sendMessage}>
        send message
      </button>
      
    </>
  )
}

export default App
