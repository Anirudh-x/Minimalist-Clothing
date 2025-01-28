import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="flex flex-col justify-end bg-red-300 text-white shadow-[0px_-1px_20px_10px_rgb(255, 255, 255, 0.25)]">
      <div className="flex justify-center items-center pt-10 gap-3 ">
        <hr className="w-96" />
        <FaXTwitter className="h-7 w-7" />
        <FaFacebookF className="h-7 w-7" />
        <FaInstagram className="h-7 w-7" />
        <FaYoutube className="h-7 w-7" />
        <hr className="w-96" />
      </div>

      <div className="flex flex-col items-center p-5 gap-3">
        <h2><strong>Minimalist Clothing</strong></h2>
        <p>Copyright &#169; Minimalist Clothing</p>
      </div>
    </div>
  )
}

export default Footer