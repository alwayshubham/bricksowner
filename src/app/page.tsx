

import Briksdetails from "@/components/BricksDetails";
import HeaderSilder from "@/components/HeaderSlider";
import Hero from "@/components/Hero";
import Person from "@/components/Person";


export default function Home() {
  return (
   <div className="px-6 md:px-16 lg:px-20 lg:py-1 py-1">
    <HeaderSilder />
    <Briksdetails />
    <Person />
    <Hero/>
   </div>
  );
}


