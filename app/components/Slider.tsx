import { Carousel } from "antd"
import Image from "next/image";

import live1 from "../../public/images/live1.jpg"
import live2 from "../../public/images/live2.jpg"
import live3 from "../../public/images/live3.jpg"
import live4 from "../../public/images/live4.jpg"
import live5 from "../../public/images/live5.jpg"

export default function Slider() {
    return (
        <>
            <section className="bg-slate-100">
                <div>
                    <h1>Live events</h1>
                </div>
                <Carousel autoplay className="w-[100%] h-[600px] duration-300 relative">
                    <div className="h-[600px] relative">
                        <Image src={live1} 
                        alt="Live performance of a band"
                        className="object-cover"/>
                        <div>
                            <h2>Buckshot Live in Bloemfontein</h2>
                            <p>Lighting up the Free State with the warm sounds of Buckshot</p>
                        </div>
                    </div>
                    <div className="h-[600px] relative">
                        <Image src={live2} 
                        alt="Live performance of a band"
                        className="object-cover"/>
                        <div>
                            <h2>Square Hide live in Cape Town</h2>
                            <p>A night full of excitement and loud music</p>
                        </div>
                    </div>
                    <div className="h-[600px] relative">
                        <Image src={live3} 
                        alt="Live performance of a band"
                        className="object-cover"/>
                        <div>
                            <h2>El Idolo tel Mastre Rocking Centre Stage</h2>
                            <p>Live from the Guitar Centre in Ballito</p>
                        </div>
                    </div>
                    <div className="h-[600px] relative">
                        <Image src={live4} 
                        alt="Live performance of a band"
                        className="object-cover"/>
                        <div>
                            <h2>Proxy Generation live in Johannesburg</h2>
                            <p>The fussion of pop and punk</p>
                        </div>
                    </div>
                    <div className="h-[600px] relative">
                        <Image src={live5} 
                        alt="Live performance of a band"
                        className="object-cover"/>
                        <div>
                            <h2>Breaker Bout live in Pretoria</h2>
                            <p>Rocking the capital even during the winter</p>
                        </div>
                    </div>
                </Carousel>
            </section>
        </>
    )
}