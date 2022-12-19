import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Create & Manage <br className="sm:block hidden" /> 
        Desktop App Development
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We serve desktop application development services, 
      Application development is made to facilitate users with digital data management models and many more
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
