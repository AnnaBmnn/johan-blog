import React from "react"

import mediasStyles from "./medias.module.scss"

const Medias = ({ medias }) => {
  return (
    <div>
      {medias?.map((media, i) =>
        media.url ? <img src={media.url}></img> : ""
      )}
    </div>
  )
}

export default Medias
