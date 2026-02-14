import  {useState} from 'react'
import './Projects.css'
import my_projects from '../../assets/projects'
import type { project_type} from '../../assets/projects'
import back from '../../assets/icons/Close.svg'



const Projects = () => {
    const [showProject, setShowProject] = useState<project_type| null>(null);
    const [slideIn, setSlideIn] = useState(false)
    const [hoveredItem, setHoveredItem] = useState<project_type | null>(null);
    // const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    const closePopup = () => {
            setSlideIn(false)
            setTimeout(() => {
                setShowProject(null);
                // document.body.style.overflow = ''; 
                // document.body.style.paddingRight = '' 
            }, 650); //ends 100 milliseconds earlier to prevent accidentally popping up again at end
    }
    
    return(
        <div >
            {/* Container for displaying projects */}
            <div className='project_container'>
                <ul className='project_list'>
                    {my_projects.map(p =>(
                        <li>
                            <img src={p.image} className="project_img" 
                            onClick={() => {
                                        setSlideIn(true)
                                        setShowProject(p)
                                        // document.body.style.overflow = 'hidden'
                                        // document.body.style.paddingRight = `${scrollBarWidth}px`
                            }}
                            onMouseEnter={() => {setHoveredItem(p)}}
                            onMouseLeave={() => {setHoveredItem(null)}}
                            />
                        </li>
                    ))} 
                </ul>
            </div>
                
            <p className='projects_subheader'>
                {hoveredItem? hoveredItem.title : "Click on any of the projects above to get more info about them!!! More coming soon..." }
            </p>
            
            {/* Popup that shows when clicking on any given project.*/}
            {showProject && (
                <div className={`overlay ${slideIn ? 'fade_in': 'fade_out'}`}>
                    <div className={`popup_body ${slideIn ? 'slide_in' : 'slide_out'}`}>
                        <img src={back} className='close_btn' onClick={closePopup}></img>
                        <h1 className='popup_title'>{showProject.title}</h1>
                        <img className="popup_img" src={showProject.image} />
                        <div className='popup_info'>
                            <div>
                                <p className='popup_section'>Description:</p> 
                                {showProject.description}
                            </div>
                            <div>
                                <p className='popup_section'>Link:</p> 
                                {showProject.links? 
                                <a href={showProject.links} target='blank'> Check It Out!! </a> 
                                :<p>Coming Soon!!</p>}  
                            </div>
                            <div>
                                <p className='popup_section'>Tech-Stack Used:</p>
                                {showProject.tech_stack.map((tech) => (
                                    <p>{tech}</p>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>

            )}

        </div>
    )
}

export default Projects;