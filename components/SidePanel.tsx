import BalanceCard from './Wallet/BalanceCard'

export default function SidePanel() {
  return (
    <div className="delegatesSidebar__container">
      <BalanceCard />
      <ul className="delegatesSidebar__faqs">
        <li className="accordion__container">
          <button className="button">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dolore, quod?
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-down"
              className="svg-inline--fa fa-chevron-down icon"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"
              ></path>
            </svg>
          </button>
          <div
            className="accordion__answerWrapper"
            style={{height: '0px', visibility: 'hidden'}}
          >
            <div className="answer">
              Participating in governance of the Optimism Token House will
              require a serious time commitment. For this reason, we will
              strongly encourage people claiming OP in Airdrop #1 (that's
              you!) to delegate the voting power of their tokens to a
              community member who has explicitly volunteered to play an
              active role in Token House governance. These volunteers are
              called delegates.
            </div>
            <div className="answer">
              <strong
                >When you delegate your voting power, you retain 100%
                ownership of your tokens, and can use them however you want.
                You may change your delegate selection at any time.</strong>
            </div>
          </div>
        </li>
        <li className="accordion__container">
          <button className="button">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit?
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-down"
              className="svg-inline--fa fa-chevron-down icon"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"
              ></path>
            </svg>
          </button>
          <div
            className="accordion__answerWrapper"
            style={{ height: '0px', visibility: 'hidden' }}
          >
            <div className="answer">
              When you delegate the voting power of your tokens, you retain
              100% ownership of the token itself. There are no changes to
              the way you use or hold the token.
            </div>
            <div className="answer">
              A healthy governance system is good for Optimism and for all
              OP holders. Choosing a good delegate is in each OP token
              holder's best interest.
            </div>
          </div>
        </li>
        <li className="accordion__container">
          <button className="button">
            Lorem ipsum dolor sit, eos? ?
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-down"
              className="svg-inline--fa fa-chevron-down icon"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"
              ></path>
            </svg>
          </button>
          <div
            className="accordion__answerWrapper"
            style={{ height: '0px', visibility: 'hidden' }}
          >
            <div className="answer">
              You can choose anyone who you believe will participate in
              Optimism governance and can represent what you want this
              ecosystem to become.
            </div>
            <div className="answer">
              You can see each delegate's statement of interest by clicking
              on their tile. You may also delegate to any address using the
              input field to the top-left.
            </div>
          </div>
        </li>
        <li className="accordion__container">
          <button className="button">
            How do I change this later?
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-down"
              className="svg-inline--fa fa-chevron-down icon"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"
              ></path>
            </svg>
          </button>
          <div
            className="accordion__answerWrapper"
            style={{ visibility: 'hidden', height: '0px' }}
          >
            <div className="answer">
              Delegation is always in your control. You can return to this
              page at any time to change your delegate selection, or to
              re-delegate voting power to yourself.
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
