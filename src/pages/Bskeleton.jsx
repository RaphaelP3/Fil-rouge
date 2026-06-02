import { Link } from "react-router-dom";
import squeletteDos from "../assets/corps-squelette-dos.png";

export const Bskeleton = () => {

    const backSquelettePoints = [
        {nom: "Cervicales", top: "12%", left: "49%"},
        {nom: "Thoraciques", top: "18%", right: "46%"},
        {nom: "Lombaires", top: "35%", left: "49%"},
        {nom: "Sacrum", top: "42%", right: "45%"},
        {nom: "Coccys", top: "46%", left: "49%"},
        {nom: "Calcanéum", bottom: "6%", right: "35%"}
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
                <h3>Squelette postérieur</h3>
        
            </div>

            {/* Bloc anatomie */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-5 bg-white rounded-2xl">
                {/* Eléments à gauche */}
                <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-40 text-lg md:text-xl lg:text-2xl">
                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Vertèbres cervicales
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Vertèbres lombaires
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Coccyx
                    </h3>
                </div>

                {/* Image */}
                <div className="relative">
                <img className="w-full max-w-55 md:max-w-70 lg:max-w-[320px] h-auto rounded-xl"
                    src={squeletteDos}
                    alt="Vue postérieur du squelette humain"
                />
                {backSquelettePoints.map((point) => (
                    <button
                        key={point.nom}
                        style={{
                            top: point.top,
                            left: point.left,
                            bottom: point.bottom,
                            right: point.right
                        }}
                        className="lg:hidden absolute w-3 h-3 bg-green-500 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"/>
  ))}
                </div>

                {/* Eléments à droite */}
                <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-28 text-lg md:text-xl lg:text-2xl">
                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Vertèbres thoraciques
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Sacrum
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Calcanéum
                    </h3>
                </div>

            </div>
            <div className="flex flex-col md:flex-row w-full justify-center items-center gap-12 md:gap-24">
                <Link to="/skeleton"><button className="w-52 p-2 h-auto border-none rounded-[50px] bg-text-footer-second_button text-2xl text-white shadow-form transition hover:bg-gray-400 hover:scale-110 cursor-pointer">Vue de dos</button></Link>
                <button className="w-52 p-2 h-auto border-none rounded-[50px] bg-button text-2xl text-white shadow-form transition hover:bg-hover hover:scale-110 cursor-pointer">Voir le quizz</button>
            </div>
        </div>
    );
};