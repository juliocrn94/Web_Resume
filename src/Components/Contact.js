import React, { Component } from 'react';


class Contact extends Component {  mit
   constructor(props) {
      super(props);
      this.state = { name2: "", email2: "", message2: "", url: ""};
   
    }

      handleSubmit = e => {

         // let url = "https://api.whatsapp.com/send?phone=+525544644944&text=*_Nombre: _*" + this.state.name2 + "%0A*Mail: *%0A" + this.state.email2 + "%0A*Message: *%0A" + this.mail.message2;
         window.open(this.state.url);
      };

      handleChange = e => this.setState({ [e.target.name]: e.target.value , url: "https://api.whatsapp.com/send?phone=+525544644944&text=*Nombre:* " + this.state.name2 + "%0A*Mail:*%0A " + this.state.email2 + "%0A*Message:*%0A " + this.state.message2});
  
   render() {
   
      if(this.props.data){
         var name = this.props.data.name;
         var linkedin = this.props.data.linkedin;
         var github = this.props.data.github;
         var phone= this.props.data.phone;
         var email = this.props.data.email;
         var message = this.props.data.contactmessage;
       }
      
      return (
         <section id="contact">
            
            <div className="row section-head">

               <div className="two columns header-col">
                  <h1><span>Get In Touch.</span></h1>

               </div>

               <div className="ten columns">

                     <p className="lead">{message}</p>

               </div>

            </div>

            <div className="row">
               <div className="eight columns">

                  <form name="contact" id="contactForm" >
                  <fieldset>

                     <div>
                        <label >Name <span className="required">*</span></label>
                        <input type="text" value={this.state.name2} size="35" id="contactName" name="name2" onChange={this.handleChange}/>
                     </div>

                     <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input type="email" value={this.state.email2} size="35" id="contactEmail" name="email2" onChange={this.handleChange}/>
                     </div>

                     <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="contactMessage" name="message2" value={this.state.message2} onChange={this.handleChange}></textarea>
                     </div>

                     <div>
                        <button className="submit" onClick={this.handleSubmit}>Send WhatsApp</button>

                     </div>
                  </fieldset>
                  </form>

               <div id="message-warning"> Error boy</div>
               </div>


               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Other Contact Info:</h4>
                     <p className="address">
                        {name}<br />
                        <a href="http://bit.ly/33eNmmX" target="_blank" rel="noopener noreferrer"><span>{phone}</span><br /></a>
                        <a href="#contact" target="_blank" rel="noopener noreferrer"><span>{email}</span><br /></a>
                        <a href="http://bit.ly/2Q8bceW" target="_blank" rel="noopener noreferrer"><span>{linkedin}</span><br /></a>
                        <a href="http://bit.ly/38IBjj9" target="_blank" rel="noopener noreferrer"><span>{github}</span></a>
                     </p>
                  </div>

               </aside>
         </div>
      </section>
      );
   }
   }

export default Contact;
