import { Link } from "react-router-dom";
import organes from "../assets/corps-organes.png";

export const Organs = () => {

    const organesPoints = [
        {nom: "Tête", top: "4%", left: "49%"},
        {nom: "Poumon", top: "20%", left: "43%"},
        {nom: "Coeur", top: "27%", left: "50%"},
        {nom: "Foie", top: "31%", left: "40%"},
        {nom: "Estomac", top: "34%", right: "40%"},
        {nom: "Rein", top: "35%", left: "35%"},
        {nom: "PancréasRate", top: "35%", right: "33%"},
        {nom: "VésiculeB", top: "35%", left: "44%"},
        {nom: "IntestinG", top: "42%", left: "50%"},
        {nom: "GIntestin", top: "45%", right: "35%"},
        {nom: "Vessie", bottom: "49%", left: "50%"}
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
                <h3>Organes</h3>
        
            </div>

            {/* Bloc anatomie */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-5 bg-white rounded-2xl">
                {/* Eléments à gauche */}
                <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-16 text-lg md:text-xl lg:text-2xl">
                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Poumon
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Foie
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Reins
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Intestin grêle
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Vessie
                    </h3>
                </div>

                {/* Image */}
                <div className="relative">
                <img className="w-full max-w-55 md:max-w-70 lg:max-w-[320px] h-auto rounded-xl"
                    src={organes}
                    alt="Vue postérieur du squelette humain"
                />
                {organesPoints.map((point) => (
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
                <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-14 text-lg md:text-xl lg:text-2xl">
                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Organes de la tête
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Coeur
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Estomac
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Pancréas
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Rate
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Vésicule biliaire
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Gros intestin
                    </h3>
                </div>

            </div>
            <div className="flex flex-col md:flex-row w-full justify-center items-center gap-12 md:gap-24">
                <button className="w-52 p-2 h-auto border-none rounded-[50px] bg-button text-2xl text-white shadow-form transition hover:bg-hover hover:scale-110 cursor-pointer">Voir le quizz</button>
            </div>
        </div>
    );
};