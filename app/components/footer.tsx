import Image from "next/image"
import fb from "../../public/icons/facebook.png"
import insta from "../../public/icons/instagram.png"
import pin from "../../public/icons/pinterest.png"
import x from "../../public/icons/twitter.png"

export default function Footer() {
    return(
        <>
            <section className="bg-primary-grey text-white text-[16px] pt-[50px]">
                <div className="flex justify-between p-[30px] pb-[70px] w-[85%]">
                    <div className="ml-[40px]">
                        <h2 className="text-[18px] font-bold pb-[20px] leading-3">Contact Us</h2>
                        <ul>
                            <li>nathaniel@rndsquared.co.za</li>
                            <li>+27 67 114 4899</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[18px] font-bold pb-[20px] leading-3">Explore</h2>
                        <ul>
                            <li>About</li>
                            <li>Partners</li>
                            <li>Job Opportunities</li>
                            <li>Membership</li>
                            <li>Advertise</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[18px] font-bold pb-[20px] leading-3">Headquarters</h2>
                        <ul>
                            <li>16 Beachway, Durban North,</li>
                            <li>Kwa-Zulu Natal,</li>
                            <li>South Africa,</li>
                            <li>4051</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[18px] font-bold pb-[20px] leading-3">Connections</h2>
                        <div className="flex justify-between">
                            <a href="https://web.facebook.com/rndsquared?_rdc=1&_rdr" className="mr-[20px]" target="_blank"><Image 
                                src={fb}
                                alt="Facebook Logo"
                                width={20}
                                height={20}/></a>
                            <a href="https://web.facebook.com/rndsquared?_rdc=1&_rdr" className="mr-[20px]" target="_blank"><Image 
                                src={insta}
                                alt="Facebook Logo"
                                width={20}
                                height={20}/></a>
                            <a href="https://web.facebook.com/rndsquared?_rdc=1&_rdr" className="mr-[20px]" target="_blank"><Image 
                                src={x}
                                alt="Facebook Logo"
                                width={20}
                                height={20}/></a>
                            <a href="https://web.facebook.com/rndsquared?_rdc=1&_rdr" className="mr-[20px]" target="_blank"><Image 
                                src={pin}
                                alt="Facebook Logo"
                                width={20}
                                height={20}/></a>
                        </div>
                    </div>
                </div>
                <div className="bg-secondary-grey flex justify-between p-[30px]">
                    <div>
                        <h1 className="text-[20px] text-white">The Instrumentalist | 2023</h1>
                    </div>
                    <div className="">
                        <h1 className="text-white ">Website by: Nathaniel Donato</h1>
                    </div>
                </div>
                
            </section>
        </>
    )
}