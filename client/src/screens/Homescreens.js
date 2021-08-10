import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Graphic from '../components/Graphics'
import { getAllGraphics } from './../actions/GraphicsActions';
import Filter from './../components/Filter';
import { getAllGraphicsReducer } from './../reducers/GraphicsReducer';
import Animate from '../components/Animate'


export default function Homescreens() {

    const dispatch = useDispatch()

    const graphicsstate = useSelector(state => state.getAllGraphicsReducer)
    const { graphics, error, loading } = graphicsstate
    useEffect(() => {
        dispatch(getAllGraphics())
    }, [])
    return (

        <div>
            <Animate/>
            <Filter />

            <div className="row justify-content-center">

                {loading ? (<h1>Loading</h1>) : error ? (<h1>something went wrong </h1>) :
                    (
                        
                            graphics.map((graphic) => {


                                return (<div className="col-md-4 m-3" key={graphic._id}>
                                    <div>
                                        <Graphic graphic={graphic} />
                                    </div>

                                </div>
                                );






                            })
                        

                    )}

            </div>
        </div>
    )
}
