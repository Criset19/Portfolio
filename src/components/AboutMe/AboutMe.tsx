import {useState} from 'react'
import './aboutMe.css'
import qualc from '../../assets/icons/pic2.jpg'
import linked from '../../assets/icons/pic3.jpg'
import grad from '../../assets/icons/pic5.png'
import beach from '../../assets/icons/pic6.jpg'
import drawing from '../../assets/icons/drawing.jpg'
const AboutMe = () => {

    
    const [images] = useState<string[][]>([
        [linked,"My LinkedIn pfp"], 
        [grad, "Graduated at CSUSM where I obtained my Bachelors degree in Computer Science"],
        [qualc, "A picture taken of me during a visit at Qualcomm for my Capstone class"],
        // [rat, "My guy Remy"],
        [drawing, "Fun Fact: One of my hobbies includes drawing and I like Dragon Ball"],
        [beach, "At a foggy beach"]
    ])
    
    //offset to rotate images rather then rotating array itself and avoid akward transitions
    const [offset, setOffset] = useState(0);

    const nextPhoto = () => {
        setOffset(prev => (prev + 1) % images.length);
    };
    const prevPhoto = () => {
        setOffset(prev => (prev - 1 + images.length) % images.length);
    };

    return(
        <div className='about_body'>
            
            <div className='about_info'>            
                <p>Hello there!!! My name is Cristian Enriquez and I'm a recent computer science graduate who is eager to apply the skills I've learned to solve real-world challenges and create meaningful solutions. <br /><br /></p>
                <p>I’ve developed a few full-stack web and android applications using technologies such as JavaScript, React, Spring Boot, Node.js, Kotlin, and MySQL. Alongside that, I’m exploring the world of machine learning through projects involving Python, TensorFlow, and scikit-learn. <br /><br /></p>
                <p>As such, I'm currently seeking opportunities to get involved in web or mobile development, as well as in ML/DL environments where I can grow, contribute, and keep learning. <br /><br /></p>
                <p>If you share similar interests or are working on exciting projects, let’s connect!</p>
            </div>

            <div className='image_body'  >
                <div className='images' >                
                    {images.map(([src], index) => {
                        //% images.length allows indexes to stay within range of amount of lenght of images
                        //index - offset -> allows for image at second index to becomes the first one
                        //+ images.length -> prevents that subtraction gives a negative index and everything stays within 0 to 3 range
                    const positionIndex = (index - offset + images.length) % images.length;
                    
                    return ( 
                            <img key={src} src={src} className={`pic pic${
                                (positionIndex >1 && positionIndex < images.length - 1) //second and last element -> left and right, so any in between will be hidden
                                ?2
                                :(positionIndex == images.length-1) //If we have > 4 images, last image will not be index 3, so we have to make sure it gets pic3 class from css
                                ?3
                                :positionIndex}`}/>
                    );
                    })}   
                </div>

                <div className='image_info'>
                    <button className='prev_button'onClick={prevPhoto}/>
                    <p className='image_desc'>{images[offset][1]}</p>
                    <button className='next_button' onClick={nextPhoto}/>    
                </div>
                
            </div>
            
            

        </div>

    )
}

export default AboutMe;