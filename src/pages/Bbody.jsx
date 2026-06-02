import { Link } from "react-router-dom";
import corpsOeilNuDos from "../assets/corps-peau-dos.png";

export const Bbody = () => {

    const backBodyPoints = [
        {nom: "Nuque", top: "8%", left: "54%"},
        {nom: "Dos", top: "30%", left: "54%"},
        {nom: "Hanche", top: "38%", right: "27%"},
        {nom: "Fesse", top: "44%", left: "45%"},
        {nom: "Mollet", bottom: "25%", right: "28%"},
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
                <h3>Vue postérieur</h3>
            </div>

            {/* Bloc anatomie */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-5 bg-white rounded-2xl">
                {/* Eléments à gauche */}
                <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-14 text-lg md:text-xl lg:text-2xl">
                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Nuque
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Dos
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Mollet
                    </h3>
                </div>

                {/* Image */}
                <div className="relative">
                <img className="w-full max-w-55 md:max-w-70 lg:max-w-[320px] h-auto rounded-xl"
                    src={corpsOeilNuDos}
                    alt="Vue postérieur du corps humain"
                />
                {backBodyPoints.map((point) => (
                    <button
                        key={point.nom}
                        style={{
                            top: point.top,
                            left: point.left,
                            bottom: point.bottom,
                            right: point.right
                        }}
                        className="lg:hidden absolute w-3 h-3 bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"/>
  ))}
                </div>

                {/* Eléments à droite */}
                <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-14 text-lg md:text-xl lg:text-2xl">
                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Hanches
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Fesses
                    </h3>
                </div>

            </div>
            <div className="flex flex-col md:flex-row w-full justify-center items-center gap-12 md:gap-24">
                <Link to="/body"><button className="w-52 p-2 h-auto border-none rounded-[50px] bg-text-footer-second_button text-2xl text-white shadow-form transition hover:bg-gray-400 hover:scale-110 cursor-pointer">Vue de face</button></Link>
                <button className="w-52 p-2 h-auto border-none rounded-[50px] bg-button text-2xl text-white shadow-form transition hover:bg-hover hover:scale-110 cursor-pointer">Voir le quizz</button>
            </div>
        </div>
    );
};