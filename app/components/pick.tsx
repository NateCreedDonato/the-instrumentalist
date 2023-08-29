import Image from "next/image"
import pick1 from "../../public/images/pick1.jpg"
import pick2 from "../../public/images/pick2.jpg"
import pick3 from "../../public/images/pick3.jpg"

export default function Pick() {
    return(
        <>
            <section>
                <div>
                    <h1>Editors Pick</h1>
                </div>
                <div>
                    <div>
                        <Image src={pick1} 
                        alt="Luke St Quentin on Guitar"
                        width={383}
                        height={503} />
                        <h1>Luke St Quentin Live from Cape Town</h1>
                        <h2>The ups and downs of the High Roller</h2>
                    </div>
                    <div>
                        <Image src={pick3} 
                        alt="Nathaniel Donato on Guitar"
                        width={383}
                        height={503} />
                        <h1>Nathaniel Donato Live from Ballito</h1>
                        <h2>When we say... Juicebox, live from centre Stage</h2>
                    </div>
                </div>
            </section>
        </>
    )
}