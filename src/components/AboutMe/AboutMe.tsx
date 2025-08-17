import './aboutMe.css'
import qualc from '../../assets/icons/pic2.jpg'
import linked from '../../assets/icons/pic3.jpg'
import grad from '../../assets/icons/pic5.png'

const AboutMe = () => {
    return(
        <div className='about_body'>

            <div className='images'>
                <img className='pic pic1' src={linked} />
                <img className='pic pic2' src={grad} />
                <img className='pic pic3' src={qualc} />
            </div>

            
            <div className='about_info'>            
                <p>Hello there!!! My name is Cristian Enriquez and I'm a recent computer science graduate who is eager to apply the skills I've learned to solve real-world challenges and create meaningful solutions. <br /><br /></p>
                <p>I’ve developed a few full-stack web and android applications using technologies such as JavaScript, React, Spring Boot, Node.js, Kotlin, and MySQL. Alongside that, I’m exploring the world of machine learning through projects involving Python, TensorFlow, and scikit-learn. <br /><br /></p>
                <p>As such, I'm currently seeking opportunities to get involved in web or mobile development, as well as in ML/DL environments where I can grow, contribute, and keep learning. <br /><br /></p>
                <p>If you share similar interests or are working on exciting projects, let’s connect!</p>
            </div>

        </div>

    )
}

export default AboutMe;