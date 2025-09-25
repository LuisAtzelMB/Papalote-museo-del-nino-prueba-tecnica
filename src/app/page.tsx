import Image from "next/image";

export default function DesignSystem() {
  return (
    <div className="design-system-container">
      <header className="header">
        <div className="header-group ">
          <Image
            src={"./images/~.svg"}
            alt="Logo de la marca"
            width={134}
            height={60}
          />
          <h1 className="main-title">Design System</h1>
        </div>

        <div className="header-group">
          <Image
            src={"./images/Logo.svg"}
            alt="Logo de la compañía"
            width={161}
            height={30}
          />
        </div>
      </header>
      <div className="design-system-content-container">
        <section className="colors-section section">
          {/* Tarjetas de color */}
          <div className="color-card">
            <div className="red-square square">
              <p className="squares-name">Red</p>
              <p className="squares-exa">#F94F4F</p>
            </div>
            <div className="color-values">
              <p>
                <strong className="color-values-title">RGB</strong>249, 79, 79
              </p>
              <p>
                <strong className="color-values-title">HSL</strong>0°, 93%, 64%
              </p>
            </div>
          </div>

          <div className="color-card">
            <div className="bg-black-square square">
              <p className="squares-name">BG Black</p>
              <p className="squares-exa">#191921</p>
            </div>
            <div className="color-values">
              <p>
                <strong className="color-values-title">RGB</strong>25, 25, 33
              </p>
              <p>
                <strong className="color-values-title">RGB</strong>240°, 14%,
                11%
              </p>
            </div>
          </div>

          <div className="color-card">
            <div className="white-square square">
              <p className="squares-name">White</p>
              <p className="squares-exa">#FFFFFF</p>
            </div>
            <div className="color-values">
              <p>
                <strong className="color-values-title">RGB</strong>255, 255, 255
              </p>
              <p>
                <strong className="color-values-title">RGB</strong>0°, 0%, 100%
              </p>
            </div>
          </div>

          <div className="color-card">
            <div className="text-black-square square">
              <p className="squares-name">Text Black</p>
              <p className="squares-exa">#000000</p>
            </div>
            <div className="color-values">
              <p>
                <strong className="color-values-title">RGB</strong>0, 0, 0
              </p>
              <p>
                <strong className="color-values-title">RGB</strong>0°, 0%, 0%
              </p>
            </div>
          </div>
        </section>

        <section className="typography-section section">
          <div className="heading-styles">
            {/* H1 */}
            <div className="typography-block">
              <p className="typography-label">
                H1 - Commissioner - Extra Bold - 80px - 88px line
              </p>
              <h1 className="h1-style">
                Lorem Ipsum
                <br />
                Dolor Sit
              </h1>
            </div>
            {/* H2 */}
            <div className="typography-block">
              <p className="typography-label">
                H2 - Commissioner - Extra Bold - 56px - 64px line
              </p>
              <h2 className="h2-style">
                Viverra non semper
                <br />
                suscipit posuere a<br />
                pede donec nec
              </h2>
            </div>
            {/* H3 */}
            <div className="typography-block">
              <p className="typography-label">
                H3 - Commissioner - Extra Bold - 20px - 32px line
              </p>
              <h3 className="h3-style">Lorem Ipsum Dolor Sit</h3>
            </div>
          </div>
          {/* Body Text */}
          <div className="body-text-styles">
            <p className="typography-label">
              Body - Commissioner - Regular - 18px - 32px line
            </p>
            <p className="body-paragraph">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet, mauris, tortor libero sodalesienim,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti.
            </p>
            <p className="body-paragraph">
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi puruslibero, faucibus
              adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
              elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
              volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
              pulvinar nunc sapien ornare nisi. Morbi interdum mollis sapien.
              Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet,
              lectus arcu pulvinar risus
            </p>
          </div>
        </section>

        <section className="buttons-section section">
          {/* Botón 1 */}
          <div className="button-style-group">
            <p className="button-state-label">Default</p>
            <button className="btn btn-primary">Button 1</button>
            <p className="button-state-label">Hover</p>
            <button className="btn btn-primary hover">Button 1</button>
          </div>
          {/* Botón 2 */}
          <div className="button-style-group">
            <p className="button-state-label">Default</p>
            <button className="btn btn-secondary">Button 2</button>
            <p className="button-state-label">Hover</p>
            <button className="btn btn-secondary hover">Button 2</button>
          </div>
          {/* Botón 3 */}
          <div className="button-style-group">
            <p className="button-state-label">Default</p>
            <button className="btn btn-tertiary">
              <div>Button 3</div>
            </button>
            <p className="button-state-label">Hover</p>
            <button className="btn btn-tertiary hover">
              <div>Button 3</div>
            </button>
          </div>
          {/* Botón 4 (Iconos de navegación) */}
          <div className="button-style-group">
            <p className="button-state-label">Default</p>
            <div className="btn btn-icon">
              <button className="icon-arrow">&lt;</button>
              <button className="icon-arrow">&gt;</button>
            </div>
            <p className="button-state-label">Hover</p>
            <div className="btn btn-icon hover">
              <button className="icon-arrow">&lt;</button>
              <button className="icon-arrow">&gt;</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
