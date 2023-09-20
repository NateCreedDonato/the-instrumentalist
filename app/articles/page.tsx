import Link from "next/link"
import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"
import pop7 from "../../public/images/pop7.jpg"

export default function Articles () {
    return(
        <>
            <Header />
            <div>
                <div className="relative w-[100%] h-[600px]">
                    <Image src={pop7} 
                    alt="This is a guitar"
                    className="object-cover"/>
                </div>
                <h1>This is the Articles Page</h1>
                <h2>This is where articles will go</h2>
                <h3>As well as another slider to show them all</h3>
            </div>
            <div>
                <p>This is where the stuff goes, like the paragraphs and stuff</p>
            </div>
            <Footer />
        </>
        
    )
}