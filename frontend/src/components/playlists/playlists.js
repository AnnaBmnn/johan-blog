import React from "react"

import playlistsStyles from "./playlists.module.scss"

const Playlists = ({ playlists }) => {
  return (
    <section className={playlistsStyles.playlists__section}>
      {playlists.map((item, i) =>
        item.PlaylistUrl ? (
          <div key={i}>
            <iframe
              className={playlistsStyles.playlists__iframe}
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
    </section>
  )
}

export default Playlists
