import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Error from '../components/Error'
import Filter from '../components/Filter'
import Loading from './../components/Loading';
import { getAllGraphicsReducer } from './../reducers/GraphicsReducer';
import { deleteGraphic, getAllGraphics } from './../actions/GraphicsActions';
import { Link } from 'react-router-dom';



export default function Graphicslist() {

    const dispatch = useDispatch()
    const graphicsstate = useSelector((state) => state.getAllGraphicsReducer)
    const { graphics, error, loading } = graphicsstate;
    useEffect(() => {
        dispatch(getAllGraphics())
    }, [])
    return (
        <div>
            <h2>Graphics card list </h2>
            {loading && (<Loading />)}
            {error && (<Error error='something went wrong ' />)}
            <table className='table table-bordered table-responsive-sm'>

                <thead className = 'thead thead-dark '>
                    <tr>
                        <th> Graphic Cards </th>
                        <th>Prices</th>
                        <th> varient</th>
                        <th>Actions</th>


                    </tr>
                </thead>
                {graphics && graphics.map(graphic => {
                    return <tr>
                        <td>{graphic.name}</td>
                        <td>
                           
                           2 Gb RAM   : Rs./-  {graphic.prices[0]['two_gb_ram']} <br/>
                           4 Gb RAM   : Rs./-  {graphic.prices[0]["four_gb_ram"]} <br/>
                           8 Gb RAM   : Rs./-  {graphic.prices[0]["eight_gb_ram"]}
                            
                        
                        </td>
                        <td>{graphic.model}</td>
                        
                        <td>
                            <i className='fa fa-trash m-1' onClick={(e)=>{dispatch(deleteGraphic(graphic._id))}}></i>
                            <Link to ={`/admin/editgraphics/${graphic._id}`}><i className='fa fa-edit m-1'></i></Link>
                        </td>

                    </tr>
                })}


            </table>
        </div>
    )
}