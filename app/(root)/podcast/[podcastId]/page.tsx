import React from 'react'

const PodcastDetails = ({params}: {params:{podcastId:string}}) => {
  return (
    <p className='text-black-1'>PodcastDetails for {params.podcastId}</p>
  )
}

export default PodcastDetails