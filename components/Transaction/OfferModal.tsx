import type { ModalTrigger } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function OfferModal({
  closeModal,
}: {
  closeModal: ModalTrigger;
}) {
  return (
    <>
      <div
        role="presentation"
        className="MuiModal-root delegateModal__modal css-8ndowl"
      >
        <div
          aria-hidden="true"
          className="MuiBackdrop-root css-919eu4"
          style={{
            opacity: 1,
            transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
          }}
        ></div>
        <div data-test="sentinelStart"></div>
        <div className="delegateModal__spacer">
          <div className="delegateModal__container animate__animated animate__zoomIn">
            <button onClick={() => closeModal(false)} className="close">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="xmark"
                className="svg-inline--fa fa-xmark"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6l-132.7 132.7c-6.253 6.253-16.37 6.253-22.63 0c-6.253-6.253-6.253-16.37 0-22.63L137.4 256L4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63c6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0c6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7C321.6 394.9 321.6 405.1 315.3 411.3z"
                ></path>
              </svg>
            </button>
            <div className="delegateModal__banner">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALZJREFUWEdjbJ516j8DEvi1XxOZy8DmeB2FTyqHkHmMow4YDYHREBjwEKiN/IxSDhDK5zKpz/EqeTJbkpARKPKMow4Y8BCYue8WShpAj0P0ukBMRQBvHL+68wFFHr0uQE9DjKMOGPAQIFQQoccZoXxOSD16miLYHiBkIHqKJKR+1AGjITAaAgRDAD1bEWrXU6oeoxyg1EBSHTzqAIwmGXpRil6/k9TgY2BgQG8/oNclow4Y8BAAACmeNShnUhH7AAAAAElFTkSuQmCC"
                alt="Delegate Banner"
              />
            </div>
            <div className="delegateModal__body">
              <img
                className="delegateIcon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALZJREFUWEdjbJ516j8DEvi1XxOZy8DmeB2FTyqHkHmMow4YDYHREBjwEKiN/IxSDhDK5zKpz/EqeTJbkpARKPKMow4Y8BCYue8WShpAj0P0ukBMRQBvHL+68wFFHr0uQE9DjKMOGPAQIFQQoccZoXxOSD16miLYHiBkIHqKJKR+1AGjITAaAgRDAD1bEWrXU6oeoxyg1EBSHTzqAIwmGXpRil6/k9TgY2BgQG8/oNclow4Y8BAAACmeNShnUhH7AAAAAElFTkSuQmCC"
                alt="Delegate Icon"
              />
              <section className="delegateModal__headerWrapper">
                <div className="info">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h2>AMOUNT - $500</h2>
                    <p>LOCATION - GOMA</p>
                  </div>
                </div>
                <button className="optimism-button__container small">
                  Commit &nbsp; &nbsp;
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </button>
              </section>
              <div className="line"></div>
              <section>
                <div className="delegateModal__sectionHeader">
                  <h4>SELF-DESCRIPTION</h4>
                </div>
                <p className="description">
                  I have been writing about rollups as a side hobby for a couple
                  of years and curious to see what the governance for a major
                  rollup feels like. Wish I could offer you some grand
                  statement, but it’s just curiosity at this point.
                </p>
              </section>
              <section>
                <div className="list-container list-item-offer-detail">
                  <div className="list-item-container">
                    <p className="list-title">VALIDITY</p>
                    <span className="list-value">3 DAYS</span>
                  </div>
                  <div className="list-item-container">
                    <p className="list-title">MIN AMOUNT</p>
                    <span className="list-value">$5</span>
                  </div>
                  <div className="list-item-container">
                    <p className="list-title">CONTACT NAME</p>
                    <span className="list-value">JOHN DOE</span>
                  </div>
                  <div className="list-item-container">
                    <p className="list-title">CONTACT NUMBER</p>
                    <span className="list-value">+243999999999</span>
                  </div>
                  <div className="list-item-container">
                    <p className="list-title">CONTACT EMAIL</p>
                    <span className="list-value">john@doe.com</span>
                  </div>
                </div>
              </section>
              <section>
                <h4>CRYPTO INTERESTS</h4>
                <div className="pillContainer">
                  <button className="pillToggle__container">
                    <span className="icon">🌐</span>
                    <span>Accessibility</span>
                  </button>
                  <button className="pillToggle__container">
                    <span className="icon">🎫</span>
                    <span>Identity</span>
                  </button>
                  <button className="pillToggle__container">
                    <span className="icon">🔒</span>
                    <span>Privacy</span>
                  </button>
                  <button className="pillToggle__container">
                    <span className="icon">🤝</span>
                    <span>Social impact</span>
                  </button>
                  <button className="pillToggle__container">
                    <span className="icon">🛡</span>
                    <span>Security</span>
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div data-test="sentinelEnd"></div>
      </div>
    </>
  );
}
