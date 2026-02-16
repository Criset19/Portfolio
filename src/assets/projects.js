import img1 from '../assets/icons/CookLitLogo.svg'
import img3 from '../assets/icons/sfoxlogo.png'
import img4 from '../assets/icons/GliomaML.jpg'
import img2 from '../assets/icons/Remy2.png' 
import temp from '../assets/icons/react.svg'

const my_projects = [
    {
        id: 1,
        title: 'CookLit',
        description: 'A fun Android app that uses Image Classification to detect ingredients from pictures taken to generate personalized recipes.',
        image: img1,
        links: 'https://youtu.be/nPziYOeFNSU?si=W-Z2PveGhacbmKZk',
        tech_stack: ['Kotlin', 'Meta-LLama 3.2','Hugging Face API', 'Spoonacular', 'OpenAI Clip', 'Firebase']
    },
    {
        id: 4,
        title: 'Glioma Detection Model',
        description: 'A machine learning pipeline to classify Glioma tumor grade levels through radimic features extracted from MRI scans.',
        image: img4,
        links: 'https://github.com/AimanMadan/CS471_FinalProject',
        tech_stack: ['Python', 'Jupyter Notebook', 'Tensorflow', 'Scikit-learn']
    },

    {
        id: 3,
        title: 'Starfox Wiki',
        description: 'An esports website that fetches and displays live data from the PandaScore API. Stores data based on user preferences within local database',
        image: img3,
        links: 'https://github.com/Starfox-inc/Starfox-Wiki',
        tech_stack: ['MySql', 'HTML', 'CSS', 'Java', 'SpringBoot', 'Gradle', 'Thymeleaf', 'PandaScore API']
    },
    // {
    //     id: 2,
    //     title: 'Ratatouille AI',
    //     description: 'An android app that leverages the Gemini API to integrate a chatbot acting act as Remy\'s character from the movie Ratatouille via prompt engineering. Users can also create recipes through Gemini\'s LLM as well as discover some famous recipes from the movie',
    //     image: img2,
    //     links: null,
    //     tech_stack: ['React-Native', 'Gemini API']
    // },
    {
        id: 5,
        title: 'Portfolio Website',
        description: 'The website you are currently visiting!!',
        image: temp,
        links: 'https://Criset19.github.io/Portfolio',
        tech_stack: ['React', 'CSS', 'TypeScript', 'JavaScript']
    }
]

export default my_projects;