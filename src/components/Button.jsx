import React from "react";

const Button = ({ styles }) => (
  <a href="https://api.whatsapp.com/send?phone=6285891199511&text=Saya%20tertarik%20ingin%20membuat%20project bersama anda!" target="_blank" rel="noreferrer" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
  <button>Contact Us</button>
</a>
);

export default Button;
