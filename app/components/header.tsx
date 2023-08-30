"use client";
import Link from "next/link";

export default function Header() {
    return(
        <>
            <section>
                <div>
                    <h1>The Instrumentalist</h1>
                </div>
                <div>
                    <Link href="../"><p>Home</p></Link>
                    <Link href="../about">About</Link>
                    <Link href="../articles">Articles</Link>
                    <Link href="../contact">Contact Us</Link>
                </div>
            </section>
        </>
    )
}