import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" width="50%" height="50%" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h3 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h3>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        With Billions You Can <br className="sm:block hidden" /> 
        Make Big Dreams.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We help companies who want to improve their 
      performance through customized technology solutions, 
      saving a lot of inefficiency costs with high-quality systems.
      </p>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
