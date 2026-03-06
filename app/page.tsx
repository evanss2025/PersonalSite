import AnimatedImage from "./components/AnimatedImage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";

export default function Home() {
  return (
    <div className="w-full">
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="md:hidden">
        <MobileHeader />
      </div>
      <section id="home">
        <div className="flex flex-col">
          <div id="name" className="m-4 mt-15 relative h-64 md:h-120 lg:h-130">
            <AnimatedImage
              className="left-[8%] w-full lg:w-2/3 mx-auto absolute transform -translate-x-8"
              src="/sophia_text.png"
              alt="sophia"
              width={700}
              height={700}
              delay={100}
            />
            <AnimatedImage
              className="absolute md:left-[23%] top-30 left-[20%] lg:left-[35%] md:top-55 lg:w-1/2"
              src="/evans_text.png"
              alt="evans"
              width={500}
              height={500}
              delay={300}
            />
          </div>
          <div className="w-full flex items-center text-center justify-center mx-3">
            <h1 className="text-lg">game designer, artist, coder, student...</h1>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
