import { Link } from 'react-router-dom'

export default function Header() {
    
    return (
        <header className="bg-white top-0 left-0 fixed inset-x-0 border-b px-6 py-4"> 
            <nav className="flex justify-between items-center">
                <h1 className='text-4xl'>Anatomis</h1>
                <ul className="flex gap-8 text-2xl">
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/anatomy">Anatomie</Link>
                    </li>
                    <li>
                        <Link to="/diseases">Pathologies</Link>
                    </li>
                    <li>
                        <Link to="/quizz">Quizz</Link>
                    </li>
                </ul>
            </nav>
        </header>  
    )
}