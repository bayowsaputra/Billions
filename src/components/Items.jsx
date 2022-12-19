import { apple, items, google } from "../assets";
import styles, { layout } from "../style";

const Items = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={items} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        All About <br className="sm:block hidden" /> Designer 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We serve several design services including: Logo Design, 
      UI/UX design, Company Profile Document Design, 
      Social Media Content Design and others.
      </p>
    </div>
  </section>
  
);

export default Items;
