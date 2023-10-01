import Image from "next/image"
import pop7 from "../../public/images/pop7.jpg"
import Header from "../components/header"
import Footer from "../components/footer"
import Pick from "../components/pick"

export default function Blog () {
    return(
        <>
            <Header />
            <div>
                <div className="h-[600px] relative">
                    <Image src={pop7}
                    alt="This is just a stand in" fill
                    className="object-cover"/>
                     <div className="text-white absolute text-left top-[232px] ml-[80px] z-40">
                        <h2 className="text-[46px] font-bold">Your Rig Matters</h2>
                        <p className="text-[26px] font-semibold">What combo Rig should you go for?</p>
                        <p className="w-[450px] mt-[30px]">The Humble Guitar is back, today we explore the main factors and players brining back this once lost art.</p>
                        <p className="text-[26px] font-bold mt-[30px]">By: Nathaniel Donato</p>
                    </div>
                </div>
                <div className="content-center m-[90px]">
                    <p className="mb-[30px]">
                        The guitar has been a staple of popular music for decades, but in recent years, it has seen something of a resurgence. This is due to a number of factors, including the popularity of new genres of music that feature guitars prominently, such as indie rock and pop punk, and the increasing availability of high-quality guitars and amps at affordable prices.
                        Another factor contributing to the resurgence of guitars is the rise of social media and streaming platforms. These platforms have made it easier for new artists to reach a wider audience, and many of these artists are incorporating guitars into their music.
                        Finally, the guitar is simply a versatile and expressive instrument that can be used to create a wide range of sounds. This makes it a popular choice for musicians of all genres, from rock and blues to country and folk.
                        In the 20th century, the guitar became even more popular, thanks to the work of rock and roll musicians. Guitarists such as Chuck Berry, Jimi Hendrix, and Eric Clapton helped to popularize the electric guitar and to establish it as a staple of rock music.
                        Today, the guitar is one of the most popular instruments in the world. It is played in a variety of genres, from classical to rock to country. The guitar is a versatile and expressive instrument that can be used to create a wide range of sounds. It is an essential part of many cultures and musical traditions, and it is sure to continue to be popular for many years to come.
                        Here are some of the most important milestones in the history of the guitar:
                        3500 BC: The first guitar-like instruments are played in Mesopotamia and Egypt.
                        16th century: The first true guitars appear in Spain.
                        18th century: The guitar becomes increasingly popular in Europe.
                        19th century: The guitar sees a resurgence in popularity in the United States.
                        20th century: The guitar becomes even more popular, thanks to the work of rock and roll musicians.
                        Present day: The guitar is one of the most popular instruments in the world.
                        The guitar is a fascinating instrument with a rich history. It has been played by people all over the world for centuries, and it continues to be a popular choice for musicians of all genres.
                    </p>
                    <p className="mb-[30px]">
                        The guitar has been a staple of popular music for decades, but in recent years, it has seen something of a resurgence. This is due to a number of factors, including the popularity of new genres of music that feature guitars prominently, such as indie rock and pop punk, and the increasing availability of high-quality guitars and amps at affordable prices.
                        Another factor contributing to the resurgence of guitars is the rise of social media and streaming platforms. These platforms have made it easier for new artists to reach a wider audience, and many of these artists are incorporating guitars into their music.
                        Finally, the guitar is simply a versatile and expressive instrument that can be used to create a wide range of sounds. This makes it a popular choice for musicians of all genres, from rock and blues to country and folk.
                        In the 20th century, the guitar became even more popular, thanks to the work of rock and roll musicians. Guitarists such as Chuck Berry, Jimi Hendrix, and Eric Clapton helped to popularize the electric guitar and to establish it as a staple of rock music.
                        Today, the guitar is one of the most popular instruments in the world. It is played in a variety of genres, from classical to rock to country. The guitar is a versatile and expressive instrument that can be used to create a wide range of sounds. It is an essential part of many cultures and musical traditions, and it is sure to continue to be popular for many years to come.
                        Here are some of the most important milestones in the history of the guitar:
                        3500 BC: The first guitar-like instruments are played in Mesopotamia and Egypt.
                        16th century: The first true guitars appear in Spain.
                        18th century: The guitar becomes increasingly popular in Europe.
                        19th century: The guitar sees a resurgence in popularity in the United States.
                        20th century: The guitar becomes even more popular, thanks to the work of rock and roll musicians.
                        Present day: The guitar is one of the most popular instruments in the world.
                        The guitar is a fascinating instrument with a rich history. It has been played by people all over the world for centuries, and it continues to be a popular choice for musicians of all genres.
                    </p>
                    <p className="text-[26px] font-bold">By Nathaniel Donato</p>
                </div>
            </div>
            <Pick />
            <Footer />
        </>
    )
}