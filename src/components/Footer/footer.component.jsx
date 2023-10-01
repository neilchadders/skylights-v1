import './footer.styles.css'

const Footer = () => {
    return (
        <div className='footer'>
            <h4 className='input-title'>Sign up to the Mailing List</h4>
            <input className="input" type="email" placeholder='Enter email.'></input>
            <button>Submit</button>
        </div>

    )
}

export default Footer