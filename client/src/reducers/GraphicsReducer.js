export const getAllGraphicsReducer=(state={graphics :[]} , action)=>{

    switch(action.type)
    {
        case 'GET_GRAPHICS_REQUEST' : return {
            loading : true,
            ...state
        }

        case 'GET_GRAPHICS_SUCCESS' : return {
            loading:false,
            graphics : action.payload 
        }

        case 'GET_GRAPHICS_FAILED' : return {
            error : action.payload,
            loading : false
        }
        default : return state 
    }

}

export const addGraphicReducer=(state={ } , action)=>{

    switch(action.type)
    {
        case 'ADD_GRAPHICS_REQUEST' : return {
            loading : true,
            ...state
        }

        case 'ADD_GRAPHICS_SUCCESS' : return {
            loading:false,
            success : true,
        }

        case 'ADD_GRAPHICS_FAILED' : return {
            error : action.payload,
            loading : false
        }
        default : return state 
    }

}



export const editGraphicReducer=(state={ } , action)=>{

    switch(action.type)
    {
        case 'EDIT_GRAPHICS_REQUEST' : return {
            editloading : true,
            ...state
        }

        case 'EDIT_GRAPHICS_SUCCESS' : return {
            editloading:false,
            editsuccess : true,
        }

        case 'EDIT_GRAPHICS_FAILED' : return {
            editerror : action.payload,
            editloading : false
        }
        default : return state 
    }

}

export const getGraphicsByIdReducer=(state={ } , action)=>{

    switch(action.type)
    {
        case 'GET_GRAPHICSBYID_REQUEST' : return {
            loading : true,
            ...state
        }

        case 'GET_GRAPHICSBYID_SUCCESS' : return {
            loading:false,
            graphic : action.payload 
        }

        case 'GET_GRAPHICSBYID_FAILED' : return {
            error : action.payload,
            loading : false
        }
        default : return state 
    }

}