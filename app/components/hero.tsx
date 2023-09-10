import Image from "next/image";
import pick2 from "../../public/images/pick2.jpg"
import pop7 from "../../public/images/pop7.jpg"
import pop3 from "../../public/images/pop3.jpg"
import pop4 from "../../public/images/pop4.jpg"
import live2 from "../../public/images/live2.jpg"
import live4 from "../../public/images/live4.jpg"

import { Carousel } from "antd";

export default function Hero() {
    return(
        <>
            <section>
                <Carousel autoplay className="w-[100%] h-[600px] duration-300 relative">
                    <div className="h-[600px] relative">
                        <Image src={pick2}
                        alt="This is just a stand in" fill
                        className="object-cover"/>
                         <div className="text-white absolute text-left top-[232px] ml-[80px] z-40">
                            <h2 className="text-[46px] font-bold">3MD Live from London</h2>
                            <p className="text-[26px] font-semibold">From Durban to Dubai, 3MD Have made the tours Delightful</p>
                        </div>
                    </div>
                    <div className="h-[600px] relative">
                        <Image src={pop7}
                        alt="This is just a stand in" fill
                        className="object-cover"/>
                         <div className="text-white absolute text-left top-[232px] ml-[80px] z-40">
                            <h2 className="text-[46px] font-bold">Your Rig Matters</h2>
                            <p className="text-[26px] font-semibold">What combo Rig should you go for?</p>
                        </div>
                    </div>
                    <div className="h-[600px] relative">
                        <Image src={pop3}
                        alt="This is just a stand in" fill
                        className="object-cover"/>
                         <div className="text-white absolute text-left top-[232px] ml-[80px] z-40">
                            <h2 className="text-[46px] font-bold">Drummers Paradise</h2>
                            <p className="text-[26px] font-semibold">Is it more than just hitting drums?</p>
                        </div>
                    </div>
                    <div className="h-[600px] relative">
                        <Image src={pop4}
                        alt="This is just a stand in" fill
                        className="object-cover"/>
                         <div className="text-white absolute text-left top-[232px] ml-[80px] z-40">
                            <h2 className="text-[46px] font-bold">Keys to sound great</h2>
                            <p className="text-[26px] font-semibold">Discovering the Updated Nord Keyboard lineup</p>
                        </div>
                    </div>
                    <div className="h-[600px] relative">
                        <Image src={live2}
                        alt="This is just a stand in" fill
                        className="object-cover "/>
                         <div className="text-white absolute text-left top-[232px] ml-[80px] z-40">
                            <h2 className="text-[46px] font-bold">Square Hide live in Cape Town</h2>
                            <p className="text-[26px] font-semibold">A night full of excitement and loud music</p>
                        </div>
                    </div>
                    <div className="h-[600px] relative">
                        <Image src={live4}
                        alt="This is just a stand in" fill
                        className="object-cover "/>
                         <div className="text-white absolute text-left top-[232px] ml-[80px] z-40">
                            <h2 className="text-[46px] font-bold">Proxy Generation live in Johannesburg</h2>
                            <p className="text-[26px] font-semibold">The fussion of pop and punk</p>
                        </div>
                    </div>
                </Carousel>

            </section>
        </>
    );
}
