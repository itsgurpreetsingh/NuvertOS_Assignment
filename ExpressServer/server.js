const express= require('express')
const app=express()
const cors=require('cors')
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true })); 

const router=require('./routes/compoundrouter.js')
app.use('/api/compounds',router)

app.get('/',(req,res)=>{
    res.json({message:'hello from server'})
})
const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server listening at port ${PORT}`)
})