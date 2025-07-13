import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsStopwatchFill } from "react-icons/bs";

function ContactCard() {
  return (
    <div className="space-y-8 mt-10">
                <div className="flex items-start">
                    <IoHome className="text-white text-2xl mr-4 "/>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Our Location</h3>
                    <p className="text-blue-100">
                      Godawari Municipality-5, Lalitpur, Nepal<br />
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                    <FaPhoneVolume className="text-white text-2xl mr-4 "/>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Phone Number</h3>
                    <p className="text-blue-100">
                      +977-9808083620
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                    <MdEmail className="text-white text-2xl mr-4 "/>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email Address</h3>
                    <p className="text-blue-100">
                     dprabin23@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                    <BsStopwatchFill className="text-white text-2xl mr-4 "/>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Working Hours</h3>
                    <p className="text-blue-100">
                      Monday - Friday: 9am - 6pm<br />
                      Saturday: 10am - 4pm
                    </p>
                  </div>
                </div>
              </div>
  )
}

export default ContactCard;
