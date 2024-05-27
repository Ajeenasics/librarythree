import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Button from 'react-bootstrap/Button';

function Staffooter() {
  return (
    <div>
          <footer class="bg-dark text-center text-white fixed-bottom " style={{ height: "60px" }}>
        <div class="container p-3 pb-0">
            <Button id='socialft' variant='secondary'><FaFacebook /></Button>
            <Button id='socialft' variant='secondary'><FaInstagramSquare /></Button>
            <Button id='socialft' variant='secondary'><FaTwitter /></Button>
            <Button id='socialft' variant='secondary'><IoLogoWhatsapp /></Button>

        </div>
    </footer>
    </div>
  )
}

export default Staffooter




