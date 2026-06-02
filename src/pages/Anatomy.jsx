import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
import corpsOeilNu from "../assets/corps-peau.png"
import muscles from "../assets/corps-muscles.png"
import os from "../assets/corps-squelette.png"
import organes from "../assets/corps-organes.png"


export const Anatomy = () => {

    const navigate = useNavigate()

    return (
        <div className="flex flex-col w-full max-w-7xl mx-auto gap-12">
            {/*Fil d'Arianne */}
            <div className="flex gap-2 text-[18px]">
                <Link className="border-b duration-300 hover:scale-110 hover:text-hover" to="/">
                    Accueil
                </Link>

                <span>{">"}</span>

                <h3>Corps</h3>
            </div>
            {/*Titre explicatif */}
            <div className="flex text-2xl">
                <p>
                    Voici plusieurs représentations du corps humain montrant son anatomie sous différents plans :
                </p>
            </div>
            {/*Bloc Structure */}
            <div className="flex justify-center">

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">

                    <div onClick={()=> navigate("/body")} className="flex flex-col w-72 items-center bg-white p-2 rounded-2xl cursor-pointer">
                        <img
                            className="w-72 h-auto rounded-xl"
                            src={corpsOeilNu}
                            alt=""
                        />

                        <h3 className="text-[20px]">
                            Anatomie visible à l’oeil nu
                        </h3>
                    </div>

                    <div onClick={()=> navigate("/muscles")} className="flex flex-col w-72 items-center bg-white p-2 rounded-2xl cursor-pointer">
                        <img
                            className="w-72 h-auto rounded-xl"
                            src={muscles}
                            alt=""
                        />

                        <h3 className="text-[20px]">
                            Anatomie des muscles
                        </h3>
                    </div>

                    <div onClick={()=> navigate("/skeleton")} className="flex flex-col w-72 items-center bg-white p-2 rounded-2xl cursor-pointer">
                        <img
                            className="w-72 h-auto rounded-xl"
                            src={os}
                            alt=""
                        />

                        <h3 className="text-[20px]">
                            Anatomie du squelette
                        </h3>
                    </div>

                    <div onClick={()=> navigate("/organs")} className="flex flex-col w-72 items-center bg-white p-2 rounded-2xl cursor-pointer">
                        <img
                            className="w-72 h-auto rounded-xl"
                            src={organes}
                            alt=""
                        />

                        <h3 className="text-[20px]">
                            Anatomie des organes
                        </h3>
                    </div>

                </div>

            </div>

        </div>
    )
}