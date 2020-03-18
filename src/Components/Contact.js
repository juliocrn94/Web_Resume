import React, { Component } from 'react';

class Contact extends Component {
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

               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
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
