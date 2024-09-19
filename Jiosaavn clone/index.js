console.log("Welcome To JioSaavn ");

let songIndex = 0;
let audioElement = new Audio();
audioElement.src = songs[songIndex].filePath;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName:"Ladki Badi Anjani Hai", filePath:"./files/Ladki Badi Anjani Hai - Kuch Kuch Hota Hai 128 Kbps.mp3", coverPath:"./files/ladki-badi-anjani-hai.jpg"},
    { songName:"Milne Ki Tum Koshish Karna",filePath:"./files/Milne Ki Tum Koshish Karna Dil Ka Kya Kasoor 128 Kbps.mp3",coverPath:"./files/milne-ki-tum-koshish-karna.jpg"},
    { songName:"Raah me unse Mulaqat Hogi",filePath:"./files/Raah Mein Unse Mulaqat - Vijaypath 320 Kbps.mp3",coverPath:"./files/raah-me -unse-mulaqat.png"},
    { songName:"Shaam Bhi Khoob Hai",filePath:"./files/Sham Bhi Khub Hai - Karz 128 Kbps.mp3",coverPath:"./files/shaam-bhi-khoob-hai.jpg"},
    { songName:"Tumsa Koi Pyaara",filePath:"./files/Tumsa Koi Pyaara - Khuddar 320 Kbps.mp3",coverPath:"./files/tumsa-koi-pyara.png"}
    // Include other song objects here
];

// Loop through song items to set cover and name
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].textContent = songs[i].songName;
});


masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});


audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


// Add event listeners for song item clicks
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

// Implement next and previous button functionality
document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
