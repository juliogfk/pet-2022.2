const express = require("express");
const app = express()
const mongoose = require("mongoose")

const DB_CONNECT = require("./db/configDb");
const userRoutes = require("./routes/userRoutes");

const User = require("./model/User")

//função de meio, antes da rota chegar a parte final.
app.use(express.json())//Permite que a resposta e o envio seja em json.
app.use(express.urlencoded({ extended: true }))//permite que o express entenda os objetos que têm dentro um do outro.
app.use(userRoutes)

mongoose.connect(DB_CONNECT)
.then(() => {
    app.listen(3000, () => {
        console.log("Conectado com o mongodb...")
    })    
})
.catch((err) => {
    console.log(err)
})

//juliogfk1
//0MAbx5pwLwvKUpDA
//mongodb+srv://juliogfk1:0MAbx5pwLwvKUpDA@clusteraulapet.a4waitc.mongodb.net/?retryWrites=true&w=majority
