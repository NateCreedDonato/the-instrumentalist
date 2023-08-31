import Image from "next/image"
import pick2 from "../../public/images/pick2.jpg"

export default function Hero() {
    return(
        <>
            <section>
                <div>Trending</div>
                <div>
                    <Image src={pick2}
                    alt="This is just a stand in"/>
                </div>

            </section>
        </>
    )
}