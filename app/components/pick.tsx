import Image from "next/image"
import pick1 from "../../public/images/pick1.jpg"
import pick2 from "../../public/images/pick2.jpg"
import pick3 from "../../public/images/pick3.jpg"

export default function Pick() {
    return(
        <>
            <section className="bg-slate-100 m-[40px]">
                <div className="m-[30px]">
                    <h1 className="text-[26px] font-bold">Editors Pick</h1>
                </div>
                <div className="flex justify-between p-[30px] ">
                    <div className="relative w-[49%]">
                        <Image src={pick1} 
                        alt="Luke St Quentin on Guitar"
                        className="w-[655px] h-[320px] object-cover" />
                        <h1 className="text-[16px]">Luke St Quentin Live from Cape Town</h1>
                        <h2 className="text-[12px]">The ups and downs of the High Roller</h2>
                    </div>
                    <div className="reative w-[49%]">
                        <Image src={pick3} 
                        alt="Nathaniel Donato on Guitar"
                        className="w-[655px] h-[320px] object-cover"  />
                        <h1 className="text-[16px]">Nathaniel Donato Live from Ballito</h1>
                        <h2 className="text-[12px]">When we say... Juicebox, live from centre Stage</h2>
                    </div>
                </div>
            </section>
        </>
    )
}