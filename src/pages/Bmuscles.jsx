import { Link } from "react-router-dom";
import musclesDos from "../assets/corps-muscles-dos.png";

export const Bmuscles = () => {

    const backMusclesPoints = [
        {nom: "Sterno", top: "12%", left: "49%"},
        {nom: "Trapèze", top: "20%", right: "40%"},
        {nom: "TricepsB", top: "27%", left: "24%"},
        {nom: "Dorsal", top: "30%", right: "36%"},
        {nom: "Fessier", top: "45%", left: "40%"},
        {nom: "Crural", bottom: "40%", right: "33%"},
        {nom: "Tendineux", bottom: "37%", left: "40%"},
        {nom: "TricepsS", bottom: "23%", left: "35%"},
        {nom: "Tendon", bottom: "15%", right: "34%"},
    ]

    return (
        <div className="flex flex-col w-full max-w-7xl mx-auto gap-12">

            {/* Fil d'Ariane */}
            <div className="flex flex-wrap gap-2 text-sm md:text-base">
                <Link
                    className="border-b transition duration-300 hover:scale-110 hover:text-hover"
                    to="/"
                >
                    Accueil
                </Link>

                <span>{">"}</span>

                <Link
                    className="border-b transition duration-300 hover:scale-110 hover:text-hover"
                    to="/anatomy"
                >
                    Corps
                </Link>

                <span>{">"}</span>
                <h3>Muscles antérieure</h3>
        
            </div>

            {/* Bloc anatomie */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-5 bg-white rounded-2xl">
                {/* Eléments à gauche */}
                <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-14 text-lg md:text-xl lg:text-2xl">
                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Sterno-cléido-mastoïdien
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Triceps brachial
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Grand fessier
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Demi-tendineux
                    </h3>
                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Jumeaux du triceps sural
                    </h3>
                </div>

                {/* Image */}
                <div className="relative">
                <img className="w-full max-w-55 md:max-w-70 lg:max-w-[320px] h-auto rounded-xl"
                    src={musclesDos}
                    alt="Vue antérieure des muscles humain"
                />
                {backMusclesPoints.map((point) => (
                    <button
                        key={point.nom}
                        style={{
                            top: point.top,
                            left: point.left,
                            bottom: point.bottom,
                            right: point.right
                        }}
                        className="lg:hidden absolute w-3 h-3 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"/>
  ))}
                </div>

                {/* Eléments à droite */}
                <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-14 text-lg md:text-xl lg:text-2xl">
                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Trapèze
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Grand dorsal
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Biceps crural
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Tendon d'Achille
                    </h3>
                </div>

            </div>
            <div className="flex flex-col md:flex-row w-full justify-center items-center gap-12 md:gap-24">
                <Link to="/muscles"><button className="w-52 p-2 h-auto border-none rounded-[50px] bg-text-footer-second_button text-2xl text-white shadow-form transition hover:bg-gray-400 hover:scale-110 cursor-pointer">Vue de dos</button></Link>
                <button className="w-52 p-2 h-auto border-none rounded-[50px] bg-button text-2xl text-white shadow-form transition hover:bg-hover hover:scale-110 cursor-pointer">Voir le quizz</button>
            </div>
        </div>
    );
};