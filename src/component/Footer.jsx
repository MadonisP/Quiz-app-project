import React from 'react'
import './footer.css'
import {LinkedIn,GitHub,YouTube} from '@mui/icons-material';

const Footer = () => {
  return (
    <div className='footer'>
        <a href="https://www.linkedin.com/in/mert-s%C3%BCha-iga%C3%A7-988b3b238/"><LinkedIn/></a>
        <a href="https://github.com/MadonisP"><GitHub/></a>
        <a href="https://www.youtube.com/channel/UCMrlNRGicIRlf-aISM10Ccw"><YouTube/></a>
    </div>
  )
}

export default Footer