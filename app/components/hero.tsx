import Image from "next/image";
import pick2 from "../../public/images/pick2.jpg"

export default function Hero() {
    return(
        <>
            <section>
                <div>
                    <h1>Trending</h1>
                </div>
                <div>
                    <Image src={pick2}
                    alt="This is just a stand in"/>
                </div>
                <div>
                    <h2>3MD Live from London</h2>
                    <p>From Durban to Dubai, 3MD Have made the tours Delightful</p>
                </div>
                <div>
                    <h3>By: Jerome Noah</h3>
                </div>

            </section>
        </>
    );
}