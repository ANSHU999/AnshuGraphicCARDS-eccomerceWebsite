const { response } = require("express");
const express = require("express");
const router = express.Router();
const Graphic = require('../models/GraphicModel')

router.get("/getallgraphics", async (req, res) => {

    try {

        const graphics = await Graphic.find({})
        res.send(graphics)

    } catch (error) {

        return res.status(400).json({ message: error });

    }
   
})

router.post("/addgraphic", async(req, res) => {
    const graphic = req.body.graphic

    try {
        const newgraphics = new Graphic({
            name: graphic.name,
            image: graphic.image,
            varients: ['two_gb_ram' , 'four_gb_ram' , 'eight_gb_ram'],
            desciption: graphic.description,
            model: graphic.model,
            prices: [graphic.prices]
        })
        await newgraphics.save()
        res.send('New CARD add successfully')



    } catch (error) {
        return res.status(400).json({ message, error });
    }
})

router.post("/getgraphicbyid", async (req,res)=>{
const graphicid = req.body.graphicid
try {
    
    const graphic = await Graphic.findOne({_id : graphicid})
    res.send(graphic)
} catch (error) {

    return res.status(300).json({message : error});
    
}
})

router.post("/editgraphic" , async(req , res)=>{
    

        const editedgraphic = req.body.editedgraphic 

        try {

            const graphic = await Graphic.findOne({_id : editedgraphic._id})

            graphic.name =editedgraphic.name , 
            graphic.desciption = editedgraphic.desciption , 
            graphic.model = editedgraphic.model ,
            graphic.image = editedgraphic.image,
            graphic.prices = [editedgraphic.prices]

            await graphic.save()

            res.send('Graphic detailes edited successfully')
        
    } catch (error) {
         
        return res.status(400).json({message : error});
    }

})

router.post("/deletegraphic" , async(req,res)=>{
const graphicid = req.body.graphicid

try {
    await Graphic.findOneAndDelete({_id:graphicid})
    res.send('Graphic card  deleted successfully')
} catch (error) {
    return res.status(400).json({message : error})
}
})



module.exports = router;