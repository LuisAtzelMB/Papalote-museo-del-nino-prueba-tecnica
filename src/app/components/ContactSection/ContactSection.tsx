import Image from "next/image";
import "@/app/components/ContactSection/ContactSection.css";

export default function ContactSection() {
  const scheduleCall = () => {
    window.location.href = "/landingPage/Form";
  };

  return (
    <div className="contactSection-container">
      <Image
        src={"./images/~.svg"}
        alt="Logo de la marca"
        width={134}
        height={60}
        className="logo-svg-contact"
      />
      <div className="contactSection-btn-tex">
        <h1>Let&apos;s build something great together.</h1>
        <button onClick={scheduleCall} className="contactSection-btn">
          Schedule a Call
        </button>
      </div>
    </div>
  );
}
