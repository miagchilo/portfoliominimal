/* eslint-disable */
import '../CSS/hero.scss'
import ReactTypingEffect from 'react-typing-effect';
import Box from './3dBox';
import {Canvas} from "@react-three/fiber"
export default function Hero(){
    return(
    
        <div class="hero-main" id="hero">
            
           <div className="heading-section">
           <div className="intro">
           <ReactTypingEffect
        text={["Hello.", "I am a creator.","I am a programmer.","I am a developer."]}
        speed={100}
        typingDelay={1000}
        eraseDelay={1000}
        eraseSpeed={100}
        cursorRenderer={cursor => <h1 className="cursor">{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (<p className="name">{text}</p>)}}        
      />
            
           </div>

           <h4 className="about">
               A programmer/Creator/Student/Learner
           </h4> 
           <div className="buttonWrap">
                        <a href="https://github.com/miagchilo">   <button ><i class="fab fa-github">
                    </i>VISIT MY GITHUB</button></a>
                             <a href="https://instagram.com/miagchilo">
                <button>VISIT MY INSTAGRAM</button>
                </a>
            </div>
           </div>
        
           <Canvas className="box-object">
               <Box/>
               
               </Canvas>

        </div>
    )
}