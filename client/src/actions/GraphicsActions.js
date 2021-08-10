 import axios from 'axios'
export const getAllGraphics=()=>async dispatch=>{
  

    dispatch({type : 'GET_GRAPHICS_REQUEST'})
     
    try {
        const response = await axios.get('/api/graphics/getallgraphics')
        console.log(response);
        dispatch({type : 'GET_GRAPHICS_SUCCESS' , payload : response.data})

    }catch(error)
    {
        dispatch({type:'GET_GRAPHICS_FAILED' ,  payload : error})
    }


 }

 export const filterGraphics=(searchkey , varient)=>async dispatch=>{

    var filteredGraphics ;  
 
    dispatch({type : 'GET_GRAPHICS_REQUEST'})
    try {
        const response = await axios.get('/api/graphics/getallgraphics')
        filteredGraphics = response.data.filter(graphic=>graphic.name.toLowerCase().includes(searchkey))

        if(varient!='all')
        {
            filteredGraphics = response.data.filter(graphic=>graphic.varient.toLowerCase()==(varient))

        }
        dispatch({type : 'GET_GRAPHICS_SUCCESS' , payload : filteredGraphics})

    }
    catch(error)
    {
        dispatch({type : 'GET_GRAPHICS_FAILED' , payload : error})
    }
 }

 export const addGraphic=(graphic)=>async dispatch=>{
     dispatch({type : 'ADD_GRAPHICS_REQUEST'})
     try{
         const response = await axios.post('/api/graphics/addgraphic' , {graphic})
         console.log(response)
         dispatch({type : 'ADD_GRAPHICS_SUCCESS'})

     }catch(error){
         dispatch({type : 'ADD_GRAPHICS_FAILED' , payload :error})

     }
 }  

 export const editGraphic=(editedgraphic)=>async dispatch=>{
    dispatch({type : 'EDIT_GRAPHICS_REQUEST'})
    try{
        const response = await axios.post('/api/graphics/editgraphic' , {editedgraphic})
        console.log(response)
        dispatch({type : 'EDIT_GRAPHICS_SUCCESS'})
        window.location.href='/admin/graphicslist'


    }catch(error){
        dispatch({type : 'EDIT_GRAPHICS_FAILED' , payload :error})

    }
}  



 export const getGraphicsById=(graphicid)=>async dispatch=>{
  

    dispatch({type : 'GET_GRAPHICSBYID_REQUEST'})
     
    try {
        const response = await axios.post('/api/graphics/getgraphicbyid' , {graphicid})
        console.log(response);
        dispatch({type : 'GET_GRAPHICSBYID_SUCCESS' , payload : response.data})

    }catch(error)
    {
        dispatch({type:'GET_GRAPHICSBYID_FAILED' ,  payload : error})
    }


 }



 export const deleteGraphic=(graphicid)=>async dispatch=>{
 
    try {
    const response =     await axios.post('/api/graphics/deletegraphic' , {graphicid})
        alert('Graphic card deleted successfully')
        console.log(response);
        window.location.reload();

    } catch (error) {
        alert('something went wrong ')
        console.log(error);

    }
 }


 
