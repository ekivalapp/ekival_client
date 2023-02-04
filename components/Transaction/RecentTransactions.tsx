import { Transaction } from "../../types";

export default function RecentTransactions() {
  return (
    <div className="features">
      <div className="block-info">
        <div className="block-image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1680531/money.png"
            alt="paid"
          />
        </div>
        <div className="block-txt">
          <p>LOCATION - GOMA</p>
          <span>Deadline - 3 days | Payment - CASH</span>
        </div>
        <div className="block-price">
          <p className="plus">$100</p>
        </div>
      </div>
      <div className="block-info">
        <div className="block-image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1680531/money.png"
            alt="paid"
          />
        </div>
        <div className="block-txt">
          <p>LOCATION - GOMA</p>
          <span>Deadline - 5 days | Payment - CASH</span>
        </div>
        <div className="block-price">
          <p className="plus">$500</p>
        </div>
      </div>
      <div className="block-info">
        <div className="block-image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1680531/money.png"
            alt="paid"
          />
        </div>
        <div className="block-txt">
          <p>LOCATION - TORONTO</p>
          <span>Deadline - 3 days | Payment - CASH</span>
        </div>
        <div className="block-price">
          <p className="plus">$10</p>
        </div>
      </div>
    </div>
  );
}
