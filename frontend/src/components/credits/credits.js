import React from "react"

import creditsStyles from "./credits.module.scss"

const Credits = ({ credits }) => {
  return (
    <footer>
      <div className={`${creditsStyles.credits__section} `}>
        <ul className={creditsStyles.credits__list}>
          <li
            className={`${creditsStyles.credits__title}`}
          >{`${credits.CreditsTitle} `}</li>
          {credits.CreditsList.map((item, i) => (
            <li className={creditsStyles.credits__credit} key={i}>
              {`${item.CreditsListsLabel} : `}
              <a
                className={creditsStyles.credits__link}
                target="_blank"
                rel="noreferrer"
                alt={`lien vers le site  de ${item.CreditsListName}`}
                href={item.CreditsListUrl}
              >
                {`${item.CreditsListName} `}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Credits
