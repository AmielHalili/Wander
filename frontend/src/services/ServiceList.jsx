import React from 'react'
import ServiceCard from "./ServiceCard"
import {Col} from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'


const servicesData =[
  {
    imgUrl: weatherImg,
    title: 'Weather',
    desc: 'Real-time weather updates for every destination. We help you plan your trip with confidence with an accurate forecast.'
  },
  {
    imgUrl: guideImg,
    title: 'Tour Guide',
    desc: 'Experience captivating tours with thoughtfully crafted itineraries that lead you to the most unforgettable destinations.'
  },
  {
    imgUrl: customizationImg,
    title: 'Customization',
    desc: 'Tailor your travel experience to your preferences. We offer itineraries that suit your interests and needs.'
  }
]

const ServiceList = () => {
  return (
    servicesData.map((item, index) => <Col lg='3' key={index}><ServiceCard item={item}/></Col>)
  )
}

export default ServiceList