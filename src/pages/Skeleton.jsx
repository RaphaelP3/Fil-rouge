import { Link } from "react-router-dom";
import squelette from "../assets/corps-squelette.png";

export const Skeleton = () => {

    const squelettePoints = [
        {nom: "Crâne", top: "4%", left: "50%"},
        {nom: "Mandibule", top: "12%", left: "50%"},
        {nom: "Clavicule", top: "17%", right: "27%"},
        {nom: "Manubrium", top: "19%", left: "50%"},
        {nom: "Sternum", top: "25%", left: "50%"},
        {nom: "Côtes", top: "28%", left: "35%"},
        {nom: "Humérus", top: "28%", right: "20%"},
        {nom: "Radius", top: "40%", left: "20%"},
        {nom: "Cubitus", top: "40%", right: "17%"},
        {nom: "Os-illiaque", top: "40%", left: "40%"},
        {nom: "Os-main", top: "50%", left: "17%"},
        {nom: "Fémur", bottom: "40%", left: "38%"},
        {nom: "Rotule", bottom: "30%", right: "34%"},
        {nom: "Péroné", bottom: "25%", left: "36%"},
        {nom: "Tibia", bottom: "18%", right: "34%"},
        {nom: "Os-pied", bottom: "8%", left: "38%"},
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
                <h3>Squelette antérieure</h3>
        
            </div>

            {/* Bloc anatomie */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-5 bg-white rounded-2xl">
                {/* Eléments à gauche */}
                <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-10 text-lg md:text-xl lg:text-2xl">
                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Crâne
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Manubrium
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Côtes
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Radius
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Os illiaque
                    </h3>
                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Os de la main
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Fémur
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Péroné
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Os du pied
                    </h3>
                </div>

                {/* Image */}
                <div className="relative">
                <img className="w-full max-w-55 md:max-w-70 lg:max-w-[320px] h-auto rounded-xl"
                    src={squelette}
                    alt="Vue antérieure des muscles humain"
                />
                {squelettePoints.map((point) => (
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
                <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-8 text-lg md:text-xl lg:text-2xl">
                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Mandibule
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Clavicule
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Sternum
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Humérus
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Cubitus
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Rotule
                    </h3>

                    <h3 className="hidden lg:inline-block cursor-pointer transition-all duration-300 hover:scale-110 hover:text-hover">
                        Tibia
                    </h3>
                </div>

            </div>
            <div className="flex flex-col md:flex-row w-full justify-center items-center gap-12 md:gap-24">
                <Link to="/bskeleton"><button className="w-52 p-2 h-auto border-none rounded-[50px] bg-text-footer-second_button text-2xl text-white shadow-form transition hover:bg-gray-400 hover:scale-110 cursor-pointer">Vue de dos</button></Link>
                <button className="w-52 p-2 h-auto border-none rounded-[50px] bg-button text-2xl text-white shadow-form transition hover:bg-hover hover:scale-110 cursor-pointer">Voir le quizz</button>
            </div>
        </div>
    );
};