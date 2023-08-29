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
                    <Link href=""><p>Home</p></Link>
                    <Link href="../app/about/About.tsx">About</Link>
                    <Link href="../app/articles/Articles.tsx">Articles</Link>
                    <Link href="../app/contact/Contact.tsx">Contact Us</Link>
                </div>
            </section>
        </>
    )
}