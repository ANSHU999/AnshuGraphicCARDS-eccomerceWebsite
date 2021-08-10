import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useDispatch , useSelector } from 'react-redux';
import { addTocart } from '../actions/cartActions';
import graphics from '../graphicData';
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Graphics({ graphic }) {

    AOS.init({
        
    }
    )

    const [quantity, setquantity] = useState(1)
    const [varient, setvarient] = useState("two_gb_ram")

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  function addtoCart()
  {
    dispatch(addTocart( graphic  ,quantity , varient))  
  }

    return (
        
        <div data-aos='fade-up zoom-in' style={{ margin: '50px' }} className="shadow p-3 mb-5 bg-white rounded">
               
              

            
            
            <div onClick={handleShow}>

            <h1>{graphic.name}</h1>
            <img src={graphic.image} className="img-fluid" style={{ height: '200px', width: '400px' }} />

            </div>

            <div className="flex-container" >

                <div className="w-100 m-1">
                 
                    <p>Varients</p>
                    <select className='form-control' value={varient} onChange={(e) => { setvarient(e.target.value) }}>

                        {graphic.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}

                    </select>
                </div>

                <div className="w-100 m-1">

                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {


                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>

                </div>

            </div>

            <div className="flex-container">
                <div className='m-1 w-100' >
                    <h1 className='mt-1'>Price : {graphic.prices[0][varient] * quantity} Rs/-</h1>

                </div>
                <div className='m-1 w-100'>
                    <button className="btn" onClick = {addtoCart}>ADD TO CART</button>
                </div>

            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{graphic.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <img src={graphic.image} className="img-fluid" style={{height:'400px'}}/>
                <p>{graphic.description}</p>
                </Modal.Body>

                <Modal.Footer>
                   <button className="btn" onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}
