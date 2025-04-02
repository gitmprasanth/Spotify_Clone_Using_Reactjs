import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import badassi from './badass.jpg'
import Hukumi from './hukum.jpg'
import Yedii from   './yedi.jpg'
import vipi from './vip.jpg'
import myi from './my.jpg'
import nrii from './nr.jpg'
import armi from './arm.jpg'
import cmi from './cm.jpg'
import di from './d.jpg'
import badass from './badass.mp3'
import Hukum from './Hukum.mp3'
import Yedi from './Yedi.mp3'
import vip from './vip.mp3'
import my from './my.mp3'
import nr from './nr.mp3'
import arm from './arm.mp3'
import cm from './cm.mp3'
import d from './d.mp3'
export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 India",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits,",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
      id:0,
      name:"Badass",
      image:badassi,
      file:badass,
      desc:"Leo - Anirudh ravinchandar",
      duration:"3:49"

    },
    {
        id:1,
        name: "Hukum",
        image: Hukumi,
        file:Hukum,
        desc:"Jailer-Anirudh Ravichandar",
        duration:"3:27"
    },
    {
        id:2,
        name: "Yedi",
        image:Yedii ,
        file:Yedi,
        desc:"NEEK-G V Prakash Kumar",
        duration:"3:27"
    },
    {
        id:3,
        name: "Udhungada Sangu",
        image: vipi,
        file:vip,
        desc:"Vellai illa Pattadhaari - Anirudh ravichandar",
        duration:"3:29"
    },
    {
        id:4,
        name: "Pirai thedum Iraviley",
        image: myi,
        file:my,
        desc:"Mayakkam Enna - G.V PrakashKumar",
        duration:"5:32"
    },
    {
        id:5,
        name: "Thangamey",
        image:nrii,
        file:nr,
        desc:"Naanum Rowdy Thaan - Anirudh ravichandar",
        duration:"4:22"
    },
    {
        id:6,
        name: "Angu Vaana Konilu",
        image: armi ,
        file:arm,
        desc:"A R M - Dhibu Ninan Thomas",
        duration:"4:09"
    },
    {
        id:7,
        name: "Killer Killer",
        image: cmi,
        file:cm,
        desc:"Captain Miller - G V prakash Kumar",
        duration:"3:40"
    },
    {
        id:8,
        name: "Devara",
        image: di,
        file:d,
        desc:"Devara Fear Song -Anirudh ravichandar",
        duration:"3:17"
    }
]