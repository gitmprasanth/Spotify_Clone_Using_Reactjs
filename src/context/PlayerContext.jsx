import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

 export const PlayerContext=createContext()
const PlayerContextProvider=(props)=>{
    const audioRef=useRef();
    const seekBg=useRef();
    const seekbar=useRef()
    const [track,setTrack]=useState(songsData[0])
    const [playStatus,setPlaystatus]=useState(false)
    const [time,setTime]=useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })
    const play =()=>{
        audioRef.current.play();
        setPlaystatus(true)
    }
    const pause=()=>{
        audioRef.current.pause()
        setPlaystatus(false)
    }
    const playwithId= async (id)=>{
        await setTrack(songsData[id])
        await audioRef.current.play();
        setPlaystatus(true)
    }
    const previous= async()=>{
        if(track.id>0){
            await setTrack(songsData[track.id-1]);
           await audioRef.current.play();
           setPlaystatus(true)
        }
    }
    const next= async()=>{
        if(track.id < songsData.length-1){
           await setTrack(songsData[track.id+1]);
           await audioRef.current.play();
           setPlaystatus(true)
        }
    }
    const seekSong=(e)=>{
     audioRef.current.currentTime=((e.nativeEvent.offsetX/seekBg.current.offsetWidth)*audioRef.current.duration)
    }

    useEffect(()=>{
     setTimeout(()=>{
     audioRef.current.ontimeupdate=()=>{
        seekbar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"
        setTime({
            currentTime:{
                second: Math.floor(audioRef.current.currentTime % 60),
                minute: Math.floor(audioRef.current.currentTime / 60)
            },
            totalTime:{
                second: Math.floor(audioRef.current.duration % 60),
                minute: Math.floor(audioRef.current.duration / 60)
            }
    
        })
     }
     },1000)
    },[audioRef])
    const contextValue={
      audioRef,
      seekBg,
      seekbar,
      track,
      setTrack,
      playStatus,setPlaystatus,
      time,setTime,
      play,pause,
      playwithId,
      previous,
      next,
      seekSong
    }
    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}
export default PlayerContextProvider;