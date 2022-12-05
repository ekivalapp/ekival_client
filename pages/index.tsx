import type { NextPage } from 'next';
import { useState } from 'react';
import SidePanel from './../components/SidePanel'

const Home: NextPage = () => {

  const [transactions] = useState([
    {
      amount: 500,
    },
    {
      amount: 300,
    },
    {
      amount: 500,
    },
    {
      amount: 800,
    },
    {
      amount: 30,
    },
    {
      amount: 100,
    },
  ])

  return (
    <div className="publicDelegates__container">
      <div className="delegates__container">
        <div className="delegates__mainContainer">
          <div className="delegates__content">
            <h1>Available offers</h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, enim, ad provident similique quaerat voluptates qui nam eius, optio facilis quibusdam libero fugit ab! Delectus vero quaerat corrupti nihil dolore!
            </p>
            <div className="delegates__filterBar">
              <div className="textInput__wrapper">
                <input name="input" placeholder="Address or Phone number" className="search"/>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="magnifying-glass" className="svg-inline--fa fa-magnifying-glass searchIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M504.1 471l-134-134C399.1 301.5 415.1 256.8 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c48.79 0 93.55-16.91 129-45.04l134 134C475.7 509.7 481.9 512 488 512s12.28-2.344 16.97-7.031C514.3 495.6 514.3 480.4 504.1 471zM48 208c0-88.22 71.78-160 160-160s160 71.78 160 160s-71.78 160-160 160S48 296.2 48 208z"
                  ></path>
                </svg>
              </div>
              <button>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="bars-filter" className="svg-inline--fa fa-bars-filter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M0 88C0 74.75 10.75 64 24 64H424C437.3 64 448 74.75 448 88C448 101.3 437.3 112 424 112H24C10.75 112 0 101.3 0 88zM64 248C64 234.7 74.75 224 88 224H360C373.3 224 384 234.7 384 248C384 261.3 373.3 272 360 272H88C74.75 272 64 261.3 64 248zM264 432H184C170.7 432 160 421.3 160 408C160 394.7 170.7 384 184 384H264C277.3 384 288 394.7 288 408C288 421.3 277.3 432 264 432z"
                  ></path>
                </svg>
                <span className="label"> Filters</span>
              </button>
              <button >
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-down-arrow-up" className="svg-inline--fa fa-arrow-down-arrow-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M206.4 335.1L152 394.9V56.02C152 42.76 141.3 32 128 32S104 42.76 104 56.02v338.9l-54.37-58.95c-4.719-5.125-11.16-7.719-17.62-7.719c-5.812 0-11.66 2.094-16.28 6.375c-9.75 8.977-10.34 24.18-1.344 33.94l95.1 104.1c9.062 9.82 26.19 9.82 35.25 0l95.1-104.1c9-9.758 8.406-24.96-1.344-33.94C230.5 325.5 215.3 326.2 206.4 335.1zM433.6 143.4l-95.1-104.1c-9.062-9.82-26.19-9.82-35.25 0L206.4 143.4c-9 9.758-8.406 24.96 1.344 33.94c4.623 4.281 10.47 6.375 16.28 6.375c6.469 0 12.91-2.594 17.62-7.719L296 117.1v338.9C296 469.2 306.8 480 320 480s24-10.76 24-24.02V117.1l54.37 58.95c8.938 9.758 24.12 10.41 33.9 1.344C442 168.4 442.6 153.2 433.6 143.4z"
                  ></path>
                </svg>
                <span className="label">Sort by: latest</span>
              </button>
            </div>

            <div className="delegates__cardsContainer">
              {
                transactions.map((transaction, idx: number) => (
                  <div className="delegateCard__container" key={idx}>
                    <div className="delegateCard__header">
                      <img
                        alt="user icon"
                        className="icon"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALZJREFUWEdjbJ516j8DEvi1XxOZy8DmeB2FTyqHkHmMow4YDYHREBjwEKiN/IxSDhDK5zKpz/EqeTJbkpARKPKMow4Y8BCYue8WShpAj0P0ukBMRQBvHL+68wFFHr0uQE9DjKMOGPAQIFQQoccZoXxOSD16miLYHiBkIHqKJKR+1AGjITAaAgRDAD1bEWrXU6oeoxyg1EBSHTzqAIwmGXpRil6/k9TgY2BgQG8/oNclow4Y8BAAACmeNShnUhH7AAAAAElFTkSuQmCC"
                      />
                      <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3>AMOUNT - { `$${transaction.amount}` }</h3>
                        <p className="delegateCard__description">LOCATION - GOMA</p>
                      </div>
                    </div>
                    <p className="delegateCard__description">
                      I have been writing about rollups as a side hobby for a couple of years and curious to see what the governance for a major rollup feels like.
                    </p>
                  </div>
                ))
              }
            </div>
          </div>

        </div>
        <div className="delegates__sideContainer">
          <SidePanel/>
        </div>
      </div>
    </div>
  )
}

export default Home
