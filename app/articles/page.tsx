import Link from "next/link"
import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"
import pop7 from "../../public/images/pop7.jpg"

export default function Articles () {
    return(
        <>
            <Header />
            <div className="h-[600px] relative">
                <Image src={pop7}
                alt="This is just a stand in" fill
                className="object-cover"/>
                <div className="text-white absolute text-left top-[232px] ml-[80px] z-40">
                    <h2 className="text-[46px] font-bold">Your Rig Matters</h2>
                    <p className="text-[26px] font-semibold">What combo Rig should you go for?</p>
                    <p>This crazy side of the music industry</p>
                </div>
            </div>
            <Footer />
        </>
        
    )
}