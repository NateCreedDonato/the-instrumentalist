import Image from "next/image"
import fb from "../../public/icons/facebook.png"
import insta from "../../public/icons/instagram.png"
import pin from "../../public/icons/pinterest.png"
import x from "../../public/icons/twitter.png"

export default function Footer() {
    return(
        <>
            <section>
                <div className="bg-primary-grey text-white">
                    <div>
                        <h2>Contact Us</h2>
                        <ul>
                            <li>nathaniel@rndsquared.co.za</li>
                            <li>067 114 4899</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Explore</h2>
                        <ul>
                            <li>About</li>
                            <li>Partners</li>
                            <li>Job Opportunities</li>
                            <li>Membership</li>
                            <li>Advertise</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Headquarters</h2>
                        <ul>
                            <li>16 Beachway, Durban North, Kwa-Zulu Natal South Africa 4051</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Connections</h2>
                        <div>
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
                <div className="bg-secondary-grey justify-between">
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