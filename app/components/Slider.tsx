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
                            <h2>Buckshot Live in Bloemfontein</h2>
                            <p>Lighting up the Free State with the warm sounds of Buckshot</p>
                        </div>
                    </div>
                    <div className="h-[600px] relative">
                        <Image src={live3} 
                        alt="Live performance of a band"
                        className="object-cover"/>
                        <div>
                            <h2>Buckshot Live in Bloemfontein</h2>
                            <p>Lighting up the Free State with the warm sounds of Buckshot</p>
                        </div>
                    </div>
                    <div className="h-[600px] relative">
                        <Image src={live4} 
                        alt="Live performance of a band"
                        className="object-cover"/>
                        <div>
                            <h2>Buckshot Live in Bloemfontein</h2>
                            <p>Lighting up the Free State with the warm sounds of Buckshot</p>
                        </div>
                    </div>
                    <div className="h-[600px] relative">
                        <Image src={live5} 
                        alt="Live performance of a band"
                        className="object-cover"/>
                        <div>
                            <h2>Buckshot Live in Bloemfontein</h2>
                            <p>Lighting up the Free State with the warm sounds of Buckshot</p>
                        </div>
                    </div>
                </Carousel>
            </section>
        </>
    )
}