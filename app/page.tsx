import AnimatedImage from "./components/AnimatedImage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import TextRotater from "./components/TextRotater";


export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="md:hidden">
        <MobileHeader />
      </div>
      <section id="home">
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start min-h-screen md:min-h-auto">
          <div id="name" className="m-4 mt-15 relative h-100 md:h-140 lg:h-150 w-full">
            <AnimatedImage
              className="left-[8%] w-full lg:w-3/4 mx-auto absolute transform -translate-x-8"
              src="/sophia_text.png"
              alt="sophia"
              width={700}
              height={700}
              delay={100}
            />
            <AnimatedImage
              className="absolute md:left-[23%] top-30 left-[20%] lg:left-[35%] md:top-65 lg:w-3/5"
              src="/evans_text.png"
              alt="evans"
              width={500}
              height={500}
              delay={300}
            />
          </div>
          {/* <div className="w-full flex items-center text-center justify-center mx-3">
            <TextRotater />
          </div> */}
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
