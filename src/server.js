const OSC = require('osc-js')

const plugin = new OSC.WebsocketServerPlugin({ port: 9912 })
const osc = new OSC({ plugin: plugin })

// listen for invoing messages

osc.on('/script', message => {
  console.log(message.args)
})

// sent messages frequently when socket is ready

osc.on('open', () => {
  setInterval(() => {
     osc.send(new OSC.Message('/response', Math.random()))
  }, 1000)
})

osc.open() // start server
