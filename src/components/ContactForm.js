import React,{useState} from 'react'
export default function ContactForm() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()
    console.log(name+email+message);
    function refreshPage(){ 
        window.location.reload(); 
    }
    
    return (
        <div>
            <form className="contact_form" >
              <div className="form-group">
                  <label htmlFor="name">
                      Your Name
                      <input type="text"
                      id="name"
                      name="name"
                      onChange={(e)=> setName(e.target.value)} />
                  </label>
              </div>  
              <div className="form-group">
                  <label htmlFor="email">
                      Your Email
                      <input type="text"
                      id="email"
                      name="email"
                      onChange={(e)=> setEmail(e.target.value)} />
                  </label>
              </div>  
              <div className="form-group">
                  <label htmlFor="message">
                      Message
                      <textarea type="textarea"
                      id="message"
                      name="message"
                      onChange={(e)=> setMessage(e.target.value)} />
                  </label>
              </div>  
              <button type="submit" onClick={ refreshPage } >Send</button>
            </form>
        </div>
    )
}
