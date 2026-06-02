import heroFil from "../assets/hero-fil.png";

export const Home = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 max-w-6xl mx-auto bg-card p-10 rounded-xl">
                <div className="bg-white w-full text-[18px] p-10 rounded-lg">
                    <p>
                        Bienvenue sur Anatomis, ici vous pourrez découvrir et apprendre de façon ludique et plus simplifiée le fonctionnement du corps humain.
                        <br />
                        <br />
                        Sur ce site, non seulement vous vous épanouirez culturellement mais vous allez aussi percevoir votre corps sous un autre angle, et comprendre pourquoi on dit souvent que le corps dans son entièreté est lié autant à notre environnement physique qu’à notre état mental.
                        <br />
                        <br />
                        Lorsque vous aurez vu les différentes parties de ce site, ou même avant, vous aurez la possibilité de répondre à des quizz portés sur le contenu que vous aurez consulté.
                        <br />
                        <br />
                        Je vous souhaite une bonne lecture et bonne chance à ceux qui tenteront les quizz !
                    </p>
                </div>
                <img
                    className=" w-full h-auto rounded-xl"
                    src={heroFil}
                    alt="Illustration anatomique"
                />
            </div>
        </>
    )
}