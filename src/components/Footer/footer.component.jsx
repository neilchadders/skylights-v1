import axios from "axios";
import React from "react";
import { useState } from "react";

import './footer.styles.css'

const Footer = () => {

    const [email, setEmail] = useState({
        email: "",

    });
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        setEmail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/signedUp", email);

        } catch (err) {
            console.log(err);
            setError(true)
        }
    };
    return (
        <div className='footer'>
            <h4 className='input-title'>Sign up to the Mailing List</h4>
            <input className="input" type="email" placeholder='Enter email.' name="email"
                onChange={handleChange}></input>
            <button onClick={handleClick}>Submit</button>
        </div>

    )
}

export default Footer