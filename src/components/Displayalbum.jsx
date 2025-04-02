import React, { useContext } from 'react'
import Navbar from './Navbar.jsx'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets.js';
import { PlayerContext } from '../context/PlayerContext.jsx';

const Displayalbum = () => {
  const {id}=useParams();
  const albumData=albumsData[id];
  const {playwithId}=useContext(PlayerContext)
  return (
    <>
    <Navbar/>
    <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
      <img src={albumData.image} alt="" className='w-48 rounded ' />
      <div className='flex flex-col'>
          <p>Playlist</p>
          <h2 className='text-4xl font-bold mb-4 md:text-6xl'>{albumData.name}</h2>
          <h4>{albumData.desc}</h4>
          <p className='mt-2'>
            <img src={assets.spotify_logo} alt="" className='inline-block w-5'/>
            <b>   Spotify  </b> • 1,323,514 likes  • <b> 50 Songs , </b>
             about 2hr 30 mins
          </p>
      </div>
    </div>
    <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
       <p><b className='mr-4'>#</b>Title</p>
       <p>Album</p>
       <p className='hidden md:block '>Date Added</p>
       <img className='m-auto w-4' src={assets.clock_icon} alt="clock" />
    </div>
    <hr />
    {
    songsData.map((item,index)=>(
      <div onClick={()=>playwithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-3 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
         <p className='text-white '>
          <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
          <img src={item.image} alt="" className='inline w-10 mr-5' />
          {item.name}
         </p>
         <p className='text-[15px]'>{albumData.name}</p>
         <p className='text-[15px] hidden sm:block '>3 days ago</p>
         <p className='text-[15px] text-center'>{item.duration}</p>
      </div>
    ))
    }
    </>
  )
}

export default Displayalbum