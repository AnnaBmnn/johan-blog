import React from "react"

const Playlists = ({ playlists }) => {
  return (
    <div>
      {playlists.map((item, i) =>
        item.PlaylistUrl ? (
          <div className="product" key={i}>
            <iframe
              title="spot"
              src={item.PlaylistUrl}
              width="300"
              height="380"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        ) : (
          <div></div>
        )
      )}
    </div>
  )
}

export default Playlists
