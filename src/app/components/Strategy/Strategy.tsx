import React from "react";
import Image from "next/image";
import "@/app/components/Strategy/Strategy.css";

export default function Strategy() {
  return (
    <div className="strategy-container">
      <div className="strategy-1rst-container">
        <Image
          src={"/images/cofee.png"}
          alt="mesa de trabajo con cafe"
          width={735}
          height={984}
          className="strategy-image"
        />

        {/* cuadro azul*/}
        <div className="strategy-text-top">
          <Image
            src={"/images/~.svg"}
            alt="mesa de trabajo con cafe"
            width={135}
            height={61}
            className="strategy-logo"
          />
          <div className="strategy-text-container">
            <h1 className="strategy-title">
              <div>
                <p>Design</p> is <br />
              </div>
              strategic.
            </h1>
            <p className="strategy-description">
              "A well-crafted design strategy consistently produces desired
              outcomes and brand awareness. We are firm believers that success
              lies in creative collaboration with our clients."
            </p>
            <a href="#" className="strategy-link">
              Schedule a Call
            </a>
          </div>
        </div>
      </div>

      {/* Segunda seccion */}
      <div className="strategy-2nd-container">
        <div className="strategy-approach">
          <p>Our approach for creating a winning brand</p>
        </div>
        <div className="strategy-steps-container">
          <div className="steps">
            <h1>01</h1>
            <h2>Brand Strategy</h2>
            <p>
              Brand strategy is critical for long-term success. Outshining
              competitors and capturing the target audience are key.
            </p>
          </div>
          <div className="steps">
            <h1>02</h1>
            <h2>Brand Design</h2>
            <p>
              Keeping the brand design unique and meaningful helps in
              communicating the brand’s timeless value effectively.
            </p>
          </div>
          <div className="steps">
            <h1>03</h1>
            <h2>Web Design</h2>
            <p>
              A beautifully crafted website is the best tool for brand
              awareness, and ultimately results in increased revenues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
