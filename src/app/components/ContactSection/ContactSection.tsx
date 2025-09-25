import Image from "next/image";
import "@/app/components/ContactSection/ContactSection.css";

export default function ContactSection() {
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
        <h1>Let's build something great together.</h1>
        <button>Schedule a Call</button>
      </div>
    </div>
  );
}
