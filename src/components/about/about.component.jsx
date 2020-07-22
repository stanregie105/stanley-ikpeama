import React from 'react';

const About =()=>(
    <React.Fragment>
     <div className="row about">
         <div className='col-sm-2 '>
         </div>
        <div className="col-sm-8 my-auto">
          <p>I am a team player with a user-centric approach to problems.I have worked and built 
              projects with in demand technologies spanning from web development to artificial intelligence,from
              which i have garnered a repertoire of knowledge that has shapened me today.
              I am a passionate advocate of open-source and DRY, and believe the secret to successful reuse is in documentation.
              In a nutshell, I love solving problems and building solutions. I love movies, video games and soccer.I also speak sarcasm.  
          </p>
        </div>
    </div>
    <div class="row">
               <div class="col-sm-12 my-auto hit" >
               <a href="/tools"><button type="button" class="btn btn-secondary hit">Explore Skills</button><i class="fa fa-arrow-circle-right"></i></a>

              </div>
         </div>
         </React.Fragment>
);

export default About;