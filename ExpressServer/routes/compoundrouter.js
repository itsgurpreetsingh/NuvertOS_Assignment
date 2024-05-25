const compoundcontroller=require('../controller/compoundController.js')
const router=require('express').Router()
router.post('/addCompound',compoundcontroller.addCompound)
router.get('/getCompound',compoundcontroller.getCompounds)
router.put('/updateCompound',compoundcontroller.updateCompound)
router.delete('/deleteCompound',compoundcontroller.deleteCompound)
router.get('/getoneCompound',compoundcontroller.getoneCompound)
module.exports=router