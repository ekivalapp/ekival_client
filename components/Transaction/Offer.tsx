import type { Transaction, ModalTrigger } from "../../types";

export default function Order({
  transaction,
  showOffer,
}: {
  transaction: Transaction;
  showOffer: ModalTrigger;
}) {
  return (
    <div onClick={() => showOffer(true)} className="delegateCard__container">
      <div className="delegateCard__header">
        <img
          alt="user icon"
          className="icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALZJREFUWEdjbJ516j8DEvi1XxOZy8DmeB2FTyqHkHmMow4YDYHREBjwEKiN/IxSDhDK5zKpz/EqeTJbkpARKPKMow4Y8BCYue8WShpAj0P0ukBMRQBvHL+68wFFHr0uQE9DjKMOGPAQIFQQoccZoXxOSD16miLYHiBkIHqKJKR+1AGjITAaAgRDAD1bEWrXU6oeoxyg1EBSHTzqAIwmGXpRil6/k9TgY2BgQG8/oNclow4Y8BAAACmeNShnUhH7AAAAAElFTkSuQmCC"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3>AMOUNT - {`$${transaction.amount}`}</h3>
          <p className="delegateCard__description">LOCATION - GOMA</p>
        </div>
      </div>
      <p className="delegateCard__description">
        I have been writing about rollups as a side hobby for a couple of years
        and curious to see what the governance for a major rollup feels like.
      </p>
    </div>
  );
}
