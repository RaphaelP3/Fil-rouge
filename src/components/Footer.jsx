import { Link } from 'react-router-dom'

export default function Footer() {
    
    return (
        <footer className='flex flex-col lg:flex-row gap-6 md:justify-between items-center bg-text-footer-second_button px-6 py-4'>
            <div className='text-white'>
                <p>Anatomis vous permet d’apprendre les bases <br></br> sur le corps humain de manière simple et amusante</p>
                <div>

                </div>
            </div>
            <div className='hidden md:flex flex-col text-white text-2xl'>
                <Link>Accueil</Link>
                <Link>Anatomie</Link>
                <Link>Pathologies</Link>
                <Link>Quizz</Link>
            </div>
            <div className='flex flex-col md:flex-row text-white gap-2 md:gap-6'>
                <Link>Sources</Link>
                <Link>Mentions légales</Link>
                <Link>Contact</Link>
            </div>
        </footer>
    )
}