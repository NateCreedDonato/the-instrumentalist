import Image from "next/image"
import pop1 from "../../public/images/pop1.jpg"
import pop2 from "../../public/images/pop2.jpg"
import pop3 from "../../public/images/pop3.jpg"
import pop4 from "../../public/images/pop4.jpg"
import pop5 from "../../public/images/pop5.jpg"
import pop6 from "../../public/images/pop6.jpg"
import pop7 from "../../public/images/pop7.jpg"
import pop8 from "../../public/images/pop8.jpg"

export default function Popular() {
    return(
        <>
            <section className="bg-slate-100 m-[40px]">
                <div className="m-[30px]">
                    <h1 className="text-[26px] font-bold">Popular Topics</h1>
                </div>
                <div className="flex flex-wrap justify-between relative p-[30px]">
                    <div className="w-[310px] mb-[30px] bg-white rounded-md">
                        <Image src={pop1} 
                        alt="Nathaniel Donato on Guitar"
                        className="w-[310px] h-[280px] object-cover rounded-md]" />
                        <div className="mt-[30px] ml-[20px] w-[85%]">
                            <h1 className="text-[18px] font-bold mb-[30px]">Nathaniel Donato on Guitar playing Techniques and Skills</h1>
                            <p className="text-third-grey text-[12px]">A bit of a random topic but something that people tend to have differing opinions on, let’s dive deep and find out both sides.</p>
                            <h2 className="mt-[30px] mb-[30px] text-[12px] font-bold">By Nathaniel Donato</h2>
                        </div>
                    </div>
                    <div className="w-[310px] mb-[30px] bg-white rounded-md">
                        <Image src={pop2} 
                        alt="Fender Telecaster"
                        className="w-[310px] h-[280px] object-cover rounded-md" />
                        <div>
                            <h1>Does the Tele need a bridge Whammy</h1>
                            <h2>By Nathaniel Donato</h2>
                        </div>
                    </div>
                    <div className="w-[310px]mb-[30px] bg-white rounded-md">
                        <Image src={pop3} 
                        alt="Drummer on Drums"
                        className="w-[310px] h-[280px] object-cover rounded-md" />
                        <div>
                            <h1>Drum Masters, can you really master the Drums</h1>
                            <h2>By Nathaniel Donato</h2>
                        </div>
                    </div>
                    <div className="w-[310px] mb-[30px] bg-white rounded-md">
                        <Image src={pop4} 
                        alt="Nord Keyboard"
                        className="w-[310px] h-[280px] object-cover rounded-md" />
                        <div>
                            <h1>Best Keyboards for live performances</h1>
                            <h2>By Nathaniel Donato</h2>
                        </div>
                    </div>
                    <div className="w-[310px] mb-[30px] bg-white rounded-md">
                        <Image src={pop5} 
                        alt="Band performing live"
                        className="w-[310px] h-[280px] object-cover rounded-md" />
                        <div>
                            <h1>Live performance Review of NATECREED live in Durban </h1>
                            <h2>By Nathaniel Donato</h2>
                        </div>
                    </div>
                    <div className="w-[310px] mb-[30px] bg-white rounded-md">
                        <Image src={pop6} 
                        alt="Empty Drum kit"
                        className="w-[310px] h-[280px] object-cover rounded-md" />
                        <div>
                            <h1>Best Drum Kits for beginners</h1>
                            <h2>By Nathaniel Donato</h2>
                        </div>
                    </div>
                    <div className="w-[310px] mb-[30px] bg-white rounded-md">
                        <Image src={pop7} 
                        alt="Fender Stratocaster on an Amp"
                        className="w-[310px] h-[280px] object-cover rounded-md" />
                        <div>
                            <h1>The ressurgence of guitars in modern Music</h1>
                            <h2>By Nathaniel Donato</h2>
                        </div>               
                    </div>
                    <div className="w-[310px] mb-[30px] bg-white rounded-md">
                        <Image src={pop8} 
                        alt="Empty Keyboard"
                        className="w-[310px] h-[280px] object-cover rounded-md" />
                        <div>
                            <h1>Marstering the Piano in 10 steps or less</h1>
                            <h2>By Nathaniel Donato</h2>
                        </div>                
                    </div>
                </div>
            </section>
        </>
    )
}