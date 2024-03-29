"use client";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Pick from "./components/pick";
import Popular from "./components/popular";
import Slider from "./components/Slider";

export default function Page() {
  return(
    <>
      <section className="bg-slate-100">
        <Header />
        <Hero />
        <Popular />
        <Slider />
        <Pick />
        <Footer />
      </section>
    </>
  )
}