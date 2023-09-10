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
                    <h1 className="text-[20px] font-bold">Live events</h1>
                </div>
                <Carousel autoplay className="w-[100%] h-[600px] duration-300 relative">
                    <div className="h-[600px] relative">
                        <Image src={live1} 
                        alt="Live performance of a band"
                        className="object-cover"/>
                        <div className="text-white absolute text-left top-[232px] ml-[80px] z-40">
                            <h2 className="text-[46px] font-bold">Buckshot Live in Bloemfontein</h2>
                            <p className="text-[26px] font-semibold">Lighting up the Free State with the warm sounds of Buckshot</p>
                        </div>
                    </div>
                    <div className="h-[600px] relative">
                        <Image src={live2} 
                        alt="Live performance of a band"
                        className="object-cover"/>
                        <div className="text-white absolute text-left top-[232px] ml-[80px] z-40">
                            <h2 className="text-[46px] font-bold">Square Hide live in Cape Town</h2>
                            <p className="text-[26px] font-semibold">A night full of excitement and loud music</p>
                        </div>
                    </div>
                    <div className="h-[600px] relative">
                        <Image src={live4} 
                        alt="Live performance of a band"
                        className="object-cover"/>
                        <div className="text-white absolute text-left top-[232px] ml-[80px] z-40">
                            <h2 className="text-[46px] font-bold">Proxy Generation live in Johannesburg</h2>
                            <p className="text-[26px] font-semibold">The fussion of pop and punk</p>
                        </div>
                    </div>
                    <div className="h-[600px] relative">
                        <Image src={live5} 
                        alt="Live performance of a band"
                        className="object-cover"/>
                        <div className="text-white absolute text-left top-[232px] ml-[80px] z-40">
                            <h2 className="text-[46px] font-bold">Breaker Bout live in Pretoria</h2>
                            <p className="text-[26px] font-semibold">Rocking the capital even during the winter</p>
                        </div>
                    </div>
                </Carousel>
            </section>
        </>
    )
}