import express from 'express'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())

app.listen(4000, ()=>console.log("App running"))

app.post('/user_query', async(req,res)=>{
    try {
        const {query} = req.body
        console.log(query)
        // send to RAG
        return res.status(200).json({message:"Query sent successfully"})
    } catch (error) {
        console.log(error)
        return res.status(404).json({message:"Error. Please contact administrator"})
    }
})





