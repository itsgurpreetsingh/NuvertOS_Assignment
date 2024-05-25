const db=require('../models')
const Compound=db.compounds

const addCompound=async(req,res)=>{
    console.log(req.body)
    let info = {
        id:req.body.id,
        CompoundName:req.body.CompoundName,
        CompoundDescription:req.body.CompoundDescription,
        strImageSource:req.body.strImageSource,
        strImageAttribution:req.body.strImageAttribution,
        dateModified:req.body.dateModified,
    }
    try{
    const comp=await Compound.create(info)
    res.status(200).send(comp)
    // console.log(compound)
    }
    catch(err){
        console.error("Error adding compound:", error);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

const getCompounds=async(req,res)=>{
    try{
    let comp=await Compound.findAll({})
    res.status(200).send(comp)
    }
    catch(err){
        console.error("Error fetching compound:", error);
        res.status(500).json({ error: "Internal Server Error" })
    }
}
const getoneCompound=async(req,res)=>{
    try{
    let id=req.query.id
    console.log(id)
    const comp=await Compound.findOne({where: {id:id}})
    res.status(200).send(comp)
    }
    catch(err){
        console.error("Error fetching single compound:", error);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

const updateCompound=async(req,res)=>{
    try{
    let id=req.query.id
    const comp=await Compound.update(req.body,{where: {id:id}})
    res.status(200).send(comp)
    }
    catch(err){
        console.error("Error fetching single compound:", error);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

const deleteCompound = async (req, res) => {
    try {
        const id = parseInt(req.query.id);
        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({ error: "Invalid ID parameter" });
        }
        const comp = await Compound.destroy({ where: { id: id } });
        if (comp === 0) {
            return res.status(404).json({ error: "Compound not found" });
        }
        // Send success response
        res.status(200).json({ message: "Compound deleted successfully" });
    } catch (error) {
        console.error("Error deleting compound:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports={
    addCompound,
    getCompounds,
    updateCompound,
    deleteCompound,
    getoneCompound,
}