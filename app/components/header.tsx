"use client";
import Link from "next/link";

export default function Header() {
    return(
        <>
            <section>
                <div className="flex justify-between p-[30px]">
                    <div className="text-[28px]">
                        <h1>The Instrumentalist</h1>
                    </div>
                    <div className="text-[16px] flex justify-between">
                        <Link href="../">Home</Link>
                        <Link href="../about">About</Link>
                        <Link href="../articles">Articles</Link>
                        <Link href="../contact">Contact Us</Link>
                    </div>
                </div>
            </section>
        </>
    )
}