import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";


export default function Learning() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="md:hidden">
        <MobileHeader />
      </div>
    </div>
  );
}
