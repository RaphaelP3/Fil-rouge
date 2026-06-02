import { Link } from "react-router-dom";

export const Diseases = () => {

    return(

        <div className="flex flex-col items-center w-full max-w-7xl mx-auto gap-12">
            <p className="text-3xl">Ceci est une liste des pathologies que l’on retrouve le plus dans le monde, elle n’est pas classée en terme d’importance / de gravité :</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
                <div className="flex flex-col w-3xs p-2 gap-2 rounded-[10px] bg-white ">
                    <h2 className="text-2xl">Maladies cardiovasculaires</h2>
                    <ul>
                        <li className="underline cursor-pointer">Hypertension artérielle</li>
                        <li className="underline cursor-pointer">Infarctus du myocarde</li>
                        <li className="underline cursor-pointer">AVC</li>
                        <li className="underline cursor-pointer">Insuffisance cardiaque</li>
                        <li className="underline cursor-pointer">Athérosclérose</li>
                    </ul>
                </div>

                <div className="flex flex-col w-3xs p-2 gap-2 rounded-[10px] bg-white ">
                    <h2 className="text-2xl">Cancers</h2>
                    <ul>
                        <li className="underline cursor-pointer">Seins</li>
                        <li className="underline cursor-pointer">Poumons</li>
                        <li className="underline cursor-pointer">Colorectal</li>
                        <li className="underline cursor-pointer">Leucémie</li>
                        <li className="underline cursor-pointer">Prostate</li>
                    </ul>
                </div>

                <div className="flex flex-col w-3xs p-2 gap-2 rounded-[10px] bg-white ">
                    <h2 className="text-2xl">Maladies infectieuses</h2>
                    <ul>
                        <li className="underline cursor-pointer">Grippe</li>
                        <li className="underline cursor-pointer">Covid 19</li>
                        <li className="underline cursor-pointer">VIH</li>
                        <li className="underline cursor-pointer">Tuberculose</li>
                        <li className="underline cursor-pointer">Paludisme</li>
                        <li className="underline cursor-pointer">Hépatite B</li>
                    </ul>
                </div>

                <div className="flex flex-col w-3xs p-2 gap-2 rounded-[10px] bg-white ">
                    <h2 className="text-2xl">Maladies neurologiques</h2>
                    <ul>
                        <li className="underline cursor-pointer">Alzheimer</li>
                        <li className="underline cursor-pointer">Parkinson</li>
                        <li className="underline cursor-pointer">Sclérose en plaques</li>
                        <li className="underline cursor-pointer">Epilepsie</li>
                    </ul>
                </div>

                <div className="flex flex-col w-3xs p-2 gap-2 rounded-[10px] bg-white ">
                    <h2 className="text-2xl">Maladies métaboliques et endocriniennes</h2>
                    <ul>
                        <li className="underline cursor-pointer">Diabète de type 2</li>
                        <li className="underline cursor-pointer">Obésité</li>
                        <li className="underline cursor-pointer">Hyperthyroïdie</li>
                    </ul>
                </div>

                <div className="flex flex-col w-3xs p-2 gap-2 rounded-[10px] bg-white ">
                    <h2 className="text-2xl">Maladies respiratoires</h2>
                    <ul>
                        <li className="underline cursor-pointer">Asthme</li>
                        <li className="underline cursor-pointer">Pneumonie</li>
                        <li className="underline cursor-pointer">AVC</li>
                        <li className="underline cursor-pointer">Bronchopneumonie chronique obstructive</li>
                    </ul>
                </div>

                <div className="flex flex-col w-3xs p-2 gap-2 rounded-[10px] bg-white ">
                    <h2 className="text-2xl">Troubles psychiques</h2>
                    <ul>
                        <li className="underline cursor-pointer">Dépression</li>
                        <li className="underline cursor-pointer">Troubles anxieux généralisés</li>
                        <li className="underline cursor-pointer">Trouble bipolaire</li>
                        <li className="underline cursor-pointer">Schizophrénie</li>
                    </ul>
                </div>

                <div className="flex flex-col w-3xs p-2 gap-2 rounded-[10px] bg-white ">
                    <h2 className="text-2xl">Maladies auto-immunes</h2>
                    <ul>
                        <li className="underline cursor-pointer">Polyarthrite rhumanoïde</li>
                        <li className="underline cursor-pointer">Lupus</li>
                        <li className="underline cursor-pointer">Maladie coeliaque</li>
                    </ul>
                </div>

                <div className="flex flex-col w-3xs p-2 gap-2 rounded-[10px] bg-white ">
                    <h2 className="text-2xl">Pathologies du système digestif</h2>
                    <ul>
                        <li className="underline cursor-pointer">Ulcère gastrique</li>
                        <li className="underline cursor-pointer">Maladie de Crohn</li>
                        <li className="underline cursor-pointer">Reflux gastro-oesophagien</li>
                    </ul>
                </div>

            </div>


        </div>
    )
}