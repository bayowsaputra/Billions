import styles from "./style";
import {
  Billing,
  Business,
  Items,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import Package from "./components/Package";
import { useEffect, useState } from "react";
import Portfolio from "./components/Portfolio";

const App = () => {
  // const [isScrolled, setIsScrolled] = useState(true);

  // const changeBackground = () => {
  //   if (window.scrollY >= 66) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   changeBackground();
  // });

  return (
    <div className="bg-primary w-full">
      <div
        className={`${styles.paddingX} ${styles.flexCenter} z-[100] sticky top-0 bg-inherit`}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Items />
          <Testimonials />
          <Clients />
          <Package />
          <Portfolio />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
