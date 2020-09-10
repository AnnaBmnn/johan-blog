import React from "react"

const Credits = ({ credits }) => {
  return (
    <div>
      <h2>{credits.CreditsTitle}</h2>
      <ul>
        {credits.CreditsList.map((item, i) => (
          <li className="product" key={i}>
            {item.CreditsListsLabel} -
            <a href={item.CreditsListUrl}>{item.CreditsListName}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Credits
