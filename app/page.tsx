import AnimatedImage from "./components/AnimatedImage";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <section id="home">
        <div id="name" className="m-4 mt-15 relative">
          <AnimatedImage
            className="ml-5 lg:w-1/2 mx-auto block transform -translate-x-8"
            src="/sophia_text.png"
            alt="sophia"
            width={700}
            height={700}
            delay={100}
          />
          <AnimatedImage
            className="absolute md:left-[20%] top-40 left-[20%] lg:left-[42%] md:top-50 lg:top-70 lg:w-1/3"
            src="/evans_text.png"
            alt="evans"
            width={500}
            height={500}
            delay={300}
          />
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
