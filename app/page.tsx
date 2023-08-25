"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Page() {
  return(
    <>
      <section>
        <Header />
          <div>
            <h1 className="text-[48px]">Hello World</h1>
            <h2 className="text-[28px]">This is the Home Page</h2>
          </div>
        <Footer />
      </section>
    </>
  )
}