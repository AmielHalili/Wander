import React, {useRef} from 'react'
import '../shared/search-bar.css'
import {Col, Form, FormGroup} from 'reactstrap'

import {BASE_URL} from '../utils/config'
import {useNavigate} from 'react-router-dom'


const SearchBar = () => {

    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)

    const navigate = useNavigate()


    const searchHandler = async () => {

        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if(location=== '' || distance === '' || maxGroupSize === ''){
            return alert('Please fill all fields')
            
        }

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)
        if(!res.ok) alert('Something went wrong');

        const result = await res.json();

        navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, {state: result.data})
            
        
    }

  return (
    <Col lh='12'>
        <div className="search-bar">
            <Form className="d-flex align-items-center gap-4">
                <FormGroup className="d-flex gap-3 form-group form-group-fast"> 
                    <span><i class="ri-map-pin-line"></i></span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder="Where are you going?" ref={locationRef}/>
                    </div>
                </FormGroup>
            
            
                <FormGroup className="d-flex gap-3 form-group form-group-fast"> 
                    <span><i class="ri-map-pin-time-line"></i></span>
                    <div>
                        <h6>Distance    (mi)</h6>
                        <input type="number" placeholder="Distance  (mi)" ref={distanceRef}/>
                    </div>
                </FormGroup>
            
                <FormGroup className="d-flex gap-3 form-group form-group-last"> 
                    <span><i class="ri-group-line"></i></span>
                    <div>
                        <h6>Friends</h6>
                        <input type="number" placeholder="0" ref={maxGroupSizeRef}/>
                    </div>
                </FormGroup>

                <span className="search-icon" type='subimt' onClick={searchHandler}><i class="ri-search-line"></i></span>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar