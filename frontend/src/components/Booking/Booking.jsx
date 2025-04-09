import React, {useState} from 'react'
import './booking.css'

import {Form, FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap'

import {useNavigate} from 'react-router-dom'

const Booking = ({tour, avgRating}) => {
    
    const navigate = useNavigate()
    const{price, reviews} = tour

    const[credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'example@gmail.com',
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: '',
    })


    const handleChange = (e) => {
        setCredentials(prev=>({...prev, [e.target.id]: e.target.value}))
    }

    //data => server
    const handleClick = (e) => {
        e.preventDefault()

        navigate("/thank-you")
    }

    const serviceFee = 10
    const totalAmount = Number(price) *Number(credentials.guestSize) + Number(serviceFee)


  return (
    <div className="booking">
        <div className="booking-top d-flex align-items-center justify-content-between">
            <h3>${price}<span>/per person</span></h3>
            <span className="tour-rating d-flex align-items-center">
                    <i class="ri-star-fill" ></i>
                    {avgRating === 0? null: avgRating} ({reviews?.length})
                    

                </span>
            </div>

            {/* ======= booking form start ======= */}

            <div className="booking-form">
                <h5>Information</h5>   
                <Form className='booking-info-form' onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder='Full Name' id="fullName" required onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <input type="number" placeholder='Phone' id="phone" required onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type="date" placeholder='' id="bookAt" required onChange={handleChange}/>
                        <input type="number" placeholder='Guest' id="guestSize" required onChange={handleChange}/>
                    </FormGroup>
                </Form>
            </div>

            {/* ======= booking form end ======= */}

            {/* ======= booking bottom start ======= */}
            <div className="booking-bottom">
                <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        <h5 className="d-flex align-items-center gap-1">${price} <i class="ri-close-line"></i>/1 person</h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                        <h5>Service charge</h5>
                        <span>${serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className="total border-0 px-0">
                        <h5>Total</h5>
                        <span>${totalAmount}</span>
                    </ListGroupItem>
                    
                </ListGroup>
                <Button className='btn primary__btn w-100 mt-4 ' onClick={handleClick}>Place a booking</Button>
            </div>



            {/* ======= booking bottom end ======= */}
    </div>
  )
}

export default Booking