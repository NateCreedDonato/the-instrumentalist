import Image from "next/image"
import fb from "../public/icons/facebook.png"
import insta from "../public/icons/instagram.png"
import pin from "../public/icons/pinterest.png"
import x from "../public/icons/twitter.png"

export default function Footer() {
    return(
        <>
            <section>
                <div>
                    <h1 className="text-[20px]">The Instrumentalist</h1>
                </div>
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
            </section>
        </>
    )
}