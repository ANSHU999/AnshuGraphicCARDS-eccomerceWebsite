import React,{useState} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {filterGraphics} from '../actions/GraphicsActions'


export default function Filter() {
    const dispatch = useDispatch();
    const [searchkey , setsearchkey]=useState('')
    const [varient , setvarient]=useState('all')
    return (
        <div className="container">
            <div className = "row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
                <div className="col-md-3 w-100">
                 <input  value = {searchkey} type="text" className= "form-control w-100" placeholder="search cards"
                  onChange={(e)=>{setsearchkey(e.target.value)}} />
                </div>

                <div className="col-md-3 w-100 mt-2">
                 <select className="form-control w-100" value={varient}
                  onChange={(e)=>setvarient(e.target.value)}>
                     <option value="all">All</option>
                     <option value=" two_gb_ram "> two_gb_ram</option>
                     <option value="four_gb_ram">four_gb_ram</option>
                     <option  value="eight_gb_ram ">eight_gb_ram</option>
                     

                 </select>
                </div>

                <div className="col-md-3 w-100">

                    <button className='btn w-100 mt-2'
                     onClick={()=>{dispatch(filterGraphics(searchkey , varient))}}>Filter</button>

                </div>

            </div>
        </div>
    )
}
