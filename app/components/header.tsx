"use client";
import Link from "next/link";
import Image from "next/image";
import fb from "../../public/icons/facebook.png"
import insta from "../../public/icons/instagram.png"
import x from "../../public/icons/twitter.png"
import pin from "../../public/icons/pinterest.png"

export default function Header() {
    return(
        <>
            <section>
                <div className="flex justify-between p-[30px] fixed w-[100%] z-50">
                    <div className="text-[28px] text-white">
                        <h1>The Instrumentalist</h1>
                    </div>
                    <div className="text-[16px] flex justify-between w-[35%] relative text-white">
                        <Link href="../">Home</Link>
                        <Link href="../about">About</Link>
                        <Link href="../articles">Articles</Link>
                        <Link href="../contact">Contact Us</Link>
                        <p>|</p>
                        <a href="https://web.facebook.com/rndsquared?_rdc=1&_rdr" className="mr-[20px]" target="_blank"><Image 
                            src={fb}
                            alt="Facebook Logo"
                            width={20}
                            height={20}/></a>
                        <a href="https://web.facebook.com/rndsquared?_rdc=1&_rdr" className="mr-[20px]" target="_blank"><Image 
                            src={insta}
                            alt="Instagram Logo"
                            width={20}
                            height={20}/></a>
                        <a href="https://web.facebook.com/rndsquared?_rdc=1&_rdr" className="mr-[20px]" target="_blank"><Image 
                            src={x}
                            alt="X Logo"
                            width={20}
                            height={20}/></a>
                        <a href="https://web.facebook.com/rndsquared?_rdc=1&_rdr" className="mr-[20px]" target="_blank"><Image 
                            src={pin}
                            alt="pinterest Logo"
                            width={20}
                            height={20}/></a>
                    </div>
                </div>
            </section>
        </>
    )
}