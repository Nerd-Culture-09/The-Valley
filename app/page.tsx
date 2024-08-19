import Book from "@/components/ui/Book-Now";
import Carousel from "@/components/ui/Carousel";
import Footer from "@/components/ui/Footer";
import { ImagesSliderDemo } from "@/components/ui/Image-slider-Carousel";
import NavbarDemo from "@/components/ui/Nav-Bar";
import Services from "@/components/ui/Services";
//import { FloatingNavDemo } from "@/components/ui/Nav-Bar";
import SpecialOffer from "@/components/ui/Special-Offers";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavbarDemo/>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <ImagesSliderDemo />
      </div>
      <div className="mt-12"> {/* Added margin-top to create space */}
        <Book />
      </div>
      <div className="mt-12"> 
      <Services/>  
      </div>
      <div className="mt-12"> {/* Added margin-top to create space */}
     <SpecialOffer/>
     </div>
     <div className="mt-12">
    <Footer/>
    </div>
    </main>
  );
}
