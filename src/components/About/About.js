import React from 'react';
import { AboutContent } from './About.style';
import scott from './scott.jpg';
import { ScottPhoto } from './About.style';

function About() {
  return (
    <div>
      <ScottPhoto src={scott} alt='scott-lingner-photo' />

      <AboutContent>Through my eight years experience working in the photography and advertising industry as a 
      photographer and prop stylist, I have a solid comprehension of how to create customer-focused and modern 
      digital products. Through the collaboration and communication
      of every team member in the photography studio, we were able to create strong 
      imagery with a beautiful design aesthetic. 
      </AboutContent>
      <br />
      <AboutContent>
        My passion for technology and creativity brought me to my career in web development, where I look
        forward to continuing work within a team that creates meaningful and insightful products.
        I strive to bring balance, functionality, and flow in my development.
        My mission as a developer is to create beautiful, efficient, and impactful online applications. 
      </AboutContent>
      </div>
  );
}

export default About;