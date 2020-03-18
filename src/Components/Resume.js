import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p className="work-descr">{work.description}</p>
            <p className="work-descr">{work.description2}</p>
            <p className="work-descr">{work.description3}</p>
            <p className="work-descr">{work.description4}</p>
            <p className="work-descr">{work.description5}</p>
            <p >{work.description6}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })

      var hardskills = this.props.data.skills2.hardskills.map(function(hardskills){
        var className = "skill-el";
        return <p className={className}><span>{hardskills.name}</span></p>
      })
      var softskills = this.props.data.skills2.softskills.map(function(softskills){
        var className = "skill-el";
        return <p className={className}><span>{softskills.name}</span></p>
      })
      var languages = this.props.data.skills2.languages.map(function(languages){
        var className = "skill-el";
        return <p className={className}><span>{languages.name}</span>{' - '+languages.level}</p>
      })

    }

    return (
      <section id="resume">
      <div className="row work">

      {/* Work Section */}
         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
      </div>

      {/* Education Section */}
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

      {/* Skills Section */}
      
      {/* Skill Bars
      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">
              {skills}
            </ul>
          </div>
        </div>
      </div>
         */}
        
      <div className="row skills">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>

        <div className="skills-table">

          <div className="h-sk-t">
            Professional
          </div>
          <div className="h-sk skill-line">
            {hardskills}
          </div>
          

          <div className="s-sk-t">
            Personal
          </div>
          <div className="s-sk skill-line">
            {softskills}
          </div>

          
          <div className="lang-t">
            Languages
          </div>
          <div className="lang">
            {languages}
          </div>
         
        </div>
      </div>


   </section>
    );
  }
}

export default Resume;
