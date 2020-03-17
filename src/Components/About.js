import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var bio2 = this.props.data.bio2;
      var bio3 = this.props.data.bio3;
      var bio4 = this.props.data.bio4;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;

      var linkedin = this.props.data.linkedin
      var github = this.props.data.github

    }

    return (
      <section id="about">
      <div className="row">
         <div className="three pic-cont">
            <div className="pic-border">
               <img className="profile-pic"  src={profilepic} alt="Julio Renteria Profile Pic" />
            </div>
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <p>{bio2}</p>
            <p>{bio3}</p>
            <p>{bio4}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Talk To Me!</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{city},
						         {state}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span><br />
                     <span>{linkedin}</span><br />
                     <span>{github}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} target="_blank" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
