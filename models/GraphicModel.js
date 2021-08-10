const mongoose = require("mongoose");

const  graphicSchema = mongoose.Schema({

  name : {type : String , require},
  varients : [],
  prices : [],
  model : {type :String , require},
  image : {type: String , require},
  description : {type :String , require}
} , {

    timestamps : true ,
})

const GraphicModel = mongoose.model('graphics' , graphicSchema)

module.exports = GraphicModel