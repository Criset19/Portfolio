import React from 'react'
import './Contact.css'
import gitLogo from '../../assets/icons/GitLogo.svg'
import linkedInLogo from '../../assets/icons/InLogo.png'
import { useState } from 'react'

const Contact = () => {
    const [message, setMessage] = useState<string>('');
    const [email, setEmail] = useState<string>('');    
    const [name, setName] = useState<string>('');    
    const [toast, setToast] = useState<boolean>(false);
    const [submit, setSubmit] = useState<string>('Submit');

    const onSubmit = async (event:any) => {
        setToast(true)
        setSubmit('Sending...')
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "3ffd8ce0-3534-49d5-985c-f32bb3fda4ba");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setName('')
            setEmail('')
            setMessage('')
            setSubmit('Message Sent!')
            setTimeout(()=> {
                setToast(false)
                setSubmit('Submit')
            }, 3000)
            
        }
    };
    
    return (
        <div className='contact_body'>  
            <div className='find_me'>
                <h3>Where you can find me or my work at: </h3>
                
                <div className='find_me_links'>
                    <div className='find_me_link'>
                        <img src={linkedInLogo} alt="" />
                        <a href='https://www.linkedin.com/in/criset/'>linkedin.com/in/criset/</a>
                    </div>

                    <div className='find_me_link'>
                        <img src={gitLogo} alt="" />        
                        <a href='https://github.com/Criset19'>github.com/Criset19</a>
                    </div>
                </div>
            </div>

            <div className='reach_out'>
                <h3>Have any questions or comments? Reach out to me!!!</h3>
                
                <form onSubmit={onSubmit} className="contact_form">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name'
                        value={name}
                        onChange={(a)=> setName(a.target.value)}/>
                    
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email'
                        value={email}
                        onChange={(a)=> setEmail(a.target.value)}/>
                    
                    <label htmlFor="">Your Message</label>
                    <textarea name="message" placeholder='Enter your message' rows={4}
                        value={message}
                        onChange={(a)=> setMessage(a.target.value)}>    
                    </textarea>
                    
                    <button type="submit" disabled={toast}>{submit}</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;