import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get </span>
        </p>
        <a href="https://api.whatsapp.com/send?phone=6281219277699&text=Saya%20tertarik%20untuk%20franchise%20paket standard" target="_blank">
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" width="23px" height="23px"/>
        </a>
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
