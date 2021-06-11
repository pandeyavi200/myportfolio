import React from 'react'
import PText from '../components/PText'
import Button from '../components/Button'
import AboutInfoItem from '../components/AboutInfoItem'
 function About() {
    return (
        <div>
           <div className="container" style={{color:"white",padding:"10rem 0 10rem 0"}}>
               <div className="top-section">
                   <div className="left_about">
                       <p className="about_subheading">
                           Hi,I am <span>Avinash Pandey</span>
                       </p>
                       <h2 className="about_heading">
                           A Full Stack Developer
                       </h2>
                       <div className="about_info">
                       <PText>
                           I have been developing and designing websites from last 10 months. I have developed more than 10 websites and have also worked 1-2 big projects.
                           I have good hands on react development and learning MERN technologies. 
                           <br />
                           <br />
                          I have also done internship of 8 months in Across The Globe (startup). There I was working as a Front-end Developer. I have developed 4 web pages of the company and have also worked on outside projects.
                           <br />
                           <br />
                           I have a good understanding of data Structure and algorithm and problem solving. I can solve the problems in least time and using less memory.
                       </PText>
                       </div>
                       <Button btnText="Download CV" btnLink="https://drive.google.com/file/d/198n_qxz8_1cn30vZPIwU8Rgj_UNg-Tax/view?usp=drivesdk"/>
                   </div>
               </div>
            <div className="about_info_items">
                <div className="about_info_item">
                    <h1 className="about_info_heading">Education</h1>
                    <AboutInfoItem items={["Raj Kumar goel Institute Of Technology,Ghaziabad"]}
                      title="Collage"
                    />
                    <AboutInfoItem items={["S K D Academy"]}
                      title="12th"
                    />
                    <AboutInfoItem items={["S K D Academy"]}
                      title="10th"
                    />
                </div>
                <div className="about_info_item">
                    <h1 className="about_info_heading">My Skills</h1>
                    <AboutInfoItem items={["HTML","CSS","Javascript"]}
                      title="FrontEnd"
                    />
                    <AboutInfoItem items={["jQuery"]}
                      title=""
                    />
                    <AboutInfoItem items={["Node","PHP"]}
                      title="BackEnd"
                    />
                    <AboutInfoItem items={["React","Bootstrap"]}
                      title="Frame/Lib"
                    />
                </div>
                <div className="about_info_item">
                    <h1 className="about_info_heading">Experiences</h1>
                    <AboutInfoItem items={["Across The Globe","Ideadunes"]}
                      title="Internships"
                    />
                    <AboutInfoItem items={["Express js","Mongo db"]}
                      title="Learning"
                    />
                    <AboutInfoItem items={["Data structure","Algorithm"]}
                      title="Other"
                    />
                     <AboutInfoItem items={["Competitive programming","git"]}
                      title=""
                    />
                </div>
            </div>   
           </div>
        </div>
    )
}
export default About;
