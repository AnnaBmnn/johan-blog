import React from "react"

import creditsStyles from "./credits.module.scss"

const Credits = ({ classNameProp, credits }) => {
  return (
    <footer className={` ${classNameProp} `}>
      <div className={`${creditsStyles.credits__section} `}>
        <h2
          className={`${creditsStyles.credits__title}`}
        >{`${credits.CreditsTitle} : `}</h2>
        <ul className={creditsStyles.credits__list}>
          {credits.CreditsList.map((item, i) => (
            <li className={creditsStyles.credits__credit} key={i}>
              <a
                className={creditsStyles.credits__link}
                target="_blank"
                rel="noreferrer"
                alt={`lien vers le site  de ${item.CreditsListName}`}
                href={item.CreditsListUrl}
              >
                {`${item.CreditsListName} `}
              </a>
              {`(${item.CreditsListsLabel})`}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Credits
