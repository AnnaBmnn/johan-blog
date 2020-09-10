import React from "react"

const Credits = ({ credits }) => {
  return (
    <div>
      <h2>{credits.CreditsTitle}</h2>
      <ul>
        {credits.CreditsList.map((item, i) => (
          <li className="product" key={i}>
            {item.CreditsListsLabel} -
            <a
              target="_blank"
              alt={`lien vers le site  de ${item.CreditsListName}`}
              href={item.CreditsListUrl}
            >
              {item.CreditsListName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Credits
