const SecondaryButton = ({ styles, label }) => (
  <a
    href="https://api.whatsapp.com/send?phone=6285891199511&text=Saya%20tertarik%20ingin%20membuat%20project bersama anda!"
    target="_blank"
    rel="noreferrer"
    className={`w-[234.59px] h-[39.76px] box-border border-box flex font-poppins font-small text-[18px] text-white rounded-[8px] outline-none items-center justify-center ${styles}`}
  >
    <button>{label}</button>
  </a>
);

export default SecondaryButton;
