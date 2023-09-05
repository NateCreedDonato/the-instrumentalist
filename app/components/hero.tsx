import Image from "next/image";
import pick2 from "../../public/images/pick2.jpg"
import pop7 from "../../public/images/pop7.jpg"
import pop3 from "../../public/images/pop3.jpg"
import pop4 from "../../public/images/pop4.jpg"

import { Carousel } from "antd";

export default function Hero() {
    return(
        <>
            <section>
                <div>
                    <h1>Trending</h1>
                </div>
                <div>
                    <h3>By: Jerome Noah</h3>
                </div>
                <Carousel autoplay>
                    <div>
                        <Image src={pick2}
                        alt="This is just a stand in"
                        className="max-w-[1400px] max-h-[780px] object-contain text-center duration-500"/>
                         <div>
                            <h2>3MD Live from London</h2>
                            <p>From Durban to Dubai, 3MD Have made the tours Delightful</p>
                        </div>
                    </div>
                    <div>
                        <Image src={pop7}
                        alt="This is just a stand in"
                        className="max-w-[1400px] max-h-[780px] object-contain text-center duration-500"/>
                         <div>
                            <h2>Your Rig Matters</h2>
                            <p>What combo Rig should you go for?</p>
                        </div>
                    </div>
                    <div>
                        <Image src={pop3}
                        alt="This is just a stand in"
                        className="max-w-[1400px] max-h-[780px] object-contain text-center duration-500"/>
                         <div>
                            <h2>Drummers Paradise</h2>
                            <p>Is it more than just hitting drums?</p>
                        </div>
                    </div>
                    <div>
                        <Image src={pop4}
                        alt="This is just a stand in"
                        className="max-w-[1400px] max-h-[780px] object-contain text-center duration-500"/>
                         <div>
                            <h2>Keys to sound great</h2>
                            <p>Discovering the Updated Nord Keyboard lineup</p>
                        </div>
                    </div>
                </Carousel>

            </section>
        </>
    );
}