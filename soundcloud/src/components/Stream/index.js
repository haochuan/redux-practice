import React from 'react'


export default function Stream ({ tracks = [] } => {
    <div>
        {
            tracks.map((track) => {
                return (
                    <div className="stream-track">{track.title}</div>
                )
            })
        }
    </div>
});