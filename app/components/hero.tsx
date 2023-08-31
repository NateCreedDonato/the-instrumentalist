import Image from "next/image"
import pick2 from "../../public/images/pick2.jpg"

export default function Hero() {
    return(
        <>
            <section>
                <div>
                    <Image src={pick2}
                    alt="This is just a stand in"
                    width="100%"/>
                </div>
                <div>
                    <h1>Trending</h1>
                </div>
                <div>
                    <h1>This is the Hero slider</h1>
                    <h2>A slider with the best topics are gonna be put here.</h2>
                </div>

            </section>
        </>
    )
}