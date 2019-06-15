const express = require("express")

const app=express()

app.set('secret','i2u34y12oi3u4y8')

app.use(require("cors")())
app.use(express.json())

app.use('/uploads', express.static(__dirname + '/uploads'))

require("./routes/admin")(app)
require("./plugins/db")(app)

app.listen(3000,()=>{
  console.log('http://localhost:3000')
})