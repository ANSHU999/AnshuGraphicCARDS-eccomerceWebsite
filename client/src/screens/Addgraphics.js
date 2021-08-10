import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addGraphic } from './../actions/GraphicsActions';
import Error from '../components/Error'
import Loading from './../components/Loading';
import Success from './../components/Success';
import { addGraphicReducer } from '../reducers/GraphicsReducer';

export default function Addgraphics() {
    const [name, setname] = useState('')
    const [twogbramprice, settwogbramprice] = useState()
    const [fourgbramprice, setfourgbramprice] = useState()
    const [eightgbramprice, seteightgbramprice] = useState()
    const [image, setimage] = useState('')
    const [model, setmodel] = useState('')
    const [description, setdescription] = useState('')
    const dispatch = useDispatch()


    const addgraphicstate = useSelector(state=>state.addGraphicReducer)
    const { success, error, loading } = addgraphicstate
    function formHandler(e) {
        e.preventDefault();
        const graphic = {
            name,
            image,
            description,
            model,
            prices: {
                two_gb_ram  : twogbramprice,
                four_gb_ram : fourgbramprice,
                eight_gb_ram: eightgbramprice,
            }
        }
        console.log(graphic)
        dispatch(addGraphic(graphic))
    }

    return (
        <div>
            <div className='text-left shadow-lg p-3 mb-5 bg-white rounded'>
                <h1>Add list </h1>
                {loading && (<Loading />)}
                {error && (<Error error='something went wrong' />)}
                {success && (<Success success='new card successfully' />)}
                <form onSubmit={formHandler}>
                    <input className='form-control' type="text" placeholder="name" value={name} onChange={(e) => { setname(e.target.value) }}></input>
                    <input className='form-control' type="text" placeholder="2 Gb RAM price" value={twogbramprice} onChange={(e) => { settwogbramprice(e.target.value) }}></input>
                    <input className='form-control' type="text" placeholder="4 Gb RAM price" value={fourgbramprice} onChange={(e) => { setfourgbramprice(e.target.value) }}></input>
                    <input className='form-control' type="text" placeholder="8 Gb RAM price" value={eightgbramprice} onChange={(e) => { seteightgbramprice(e.target.value) }}></input>
                    <input className='form-control' type="text" placeholder="Model" value={model} onChange={(e) => { setmodel(e.target.value) }}></input>
                    <input className='form-control' type="text" placeholder="description" value={description} onChange={(e) => { setdescription(e.target.value) }}></input>
                    <input className='form-control' type="text" placeholder="Image" value={image} onChange={(e) => { setimage(e.target.value) }}></input>
                    <button className='btn mt-3' type='submit' >Add Graphic card </button>
                </form>
            </div>
        </div>
    )
}
