// Navbar
window.addEventListener('resize', add)
function add() {
    if (window.innerWidth < 900) {
        document.body.classList.add('mobile')
    } else {
        document.body.classList.remove('mobile')
    }
}
window.onload = add;
let hamburger = document.querySelector('.hamburger')
let mobileNav = document.querySelector('.nav-list')
let bars = document.querySelectorAll('.hamburger span')
let isActive = false
hamburger.addEventListener('click', function () {
    mobileNav.classList.toggle('open')
    if (!isActive) {
        bars[0].style.transform = 'rotate(45deg)'
        bars[1].style.opacity = '0'
        bars[2].style.transform = 'rotate(-45deg)'
        isActive = true
    } else {
        bars[0].style.transform = 'rotate(0deg)'
        bars[1].style.opacity = '1'
        bars[2].style.transform = 'rotate(0deg)'
        isActive = false
    }
})

// Animation
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 400
})

const ops = { interval: 100 }

sr.reveal('.head, .paragraph, .hero-button', ops);
sr.reveal('.icon', ops);
sr.reveal('.trusted-header', ops);
sr.reveal('.trusted-companies', ops);
sr.reveal(".skill-title, .skill-img, .skill-text, .skill-description.grey", ops);
sr.reveal('.stats-item', ops);
sr.reveal('.timeline-event', ops);
sr.reveal('.project-content', ops);
sr.reveal('.project-card-whole', ops);

// Links
const links = document.querySelectorAll(".nav-link");
Array.from(links).forEach(link => {
    if (link.getAttribute('data-scroll')) {
        link.onclick = () => window.scrollTo({ top: document.querySelector(link.getAttribute("data-scroll")).offsetTop, behavior: 'smooth' })
    }
})

// Counter
if (window.innerWidth > 600) {
    new PureCounter({
        selector: '.purecounter',
        start: 0,
        end: 100,
        duration: 2,
        delay: 10,
        once: true,
        repeat: false,
        decimals: 0,
        legacy: true,
        filesizing: false,
        currency: false,
        separator: false,
    });
}

// Projects

const container = document.querySelector('.project-content');
fetch('/data/projects').then(r => r.json()).then(projects => {
    console.log(projects);
    projects.forEach((project) => {
        container.innerHTML +=
            `<div class="card">
                <div class="card-content">
                <h3 class="card-heading">${project.name}</h3>
                <p class="card-description">${project.description.slice(0, 20) + "..."}</p>
                <div class="buttons">
                  <button onclick="window.location.href='/projects/${project.id}'" class="card-button">Read More</button>
                </div>
                </div>
              </div>`
    })
})

// Loader

// Songs

let now_playing = document.querySelector('.now-playing');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');
let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        name: 'edamame',
        artist: 'bbno$ and Rich Brian',
        music:
            '/static/audio/bbno_Rich_Brian_-_edamame_Offic_(getmp3.pro).mp3'
    },
    {
        name: 'Left And Right',
        artist: 'Charlie Puth',
        music:
            '/static/audio/Charlie_Puth_-_Left_And_Right_feat_(getmp3.pro).mp3'
    },
    {
        name: 'Live Fast Die Numb',
        artist: 'iann dior',
        music:
            '/static/audio/iann_dior_-_Live_Fast_Die_Numb_Off_(getmp3.pro).mp3'
    },
    {
        name: 'Speak',
        artist: 'The Kid Laroi',
        music:
            '/static/audio/Internet_Money_-_Speak_Ft_The_Kid_(getmp3.pro).mp3'
    },
    {
        name: 'Go Hard 2.0',
        artist: 'Juice Wrld',
        music:
            '/static/audio/Juice_WRLD_-_Go_Hard_20_Official_(getmp3.pro).mp3'
    },
    {
        name: '5150',
        artist: 'Machine Gun Kelly',
        music:
            '/static/audio/Machine_Gun_Kelly_-_5150_Official_(getmp3.pro).mp3'
    },
    {
        name: 'born with horns',
        artist: 'Machine Gun Kelly',
        music:
            '/static/audio/Machine_Gun_Kelly_-_born_with_horns_(getmp3.pro).mp3'
    },
    {
        name: 'drug dealer',
        artist: 'Machine Gun Kelly',
        music:
            '/static/audio/Machine_Gun_Kelly_-_drug_dealer_fea_(getmp3.pro).mp3'
    },
    {
        name: 'LOCO',
        artist: 'Machine Gun Kelly',
        music:
            '/static/audio/Machine_Gun_Kelly_-_LOCO_Official_(getmp3.pro).mp3'
    },
    {
        name: 'more than life',
        artist: 'Machine Gun Kelly and Glaive',
        music:
            '/static/audio/Machine_Gun_Kelly_-_more_than_life_(getmp3.pro).mp3'
    },
    {
        name: '9 lives',
        artist: 'Machine Gun Kelly',
        music:
            '/static/audio/Machine_Gun_Kelly_9_lives_Offici_(getmp3.pro).mp3'
    },
    {
        name: 'ay',
        artist: 'Machine Gun Kelly',
        music:
            '/static/audio/Machine_Gun_Kelly_Lil_Wayne_-_ay_(getmp3.pro).mp3'
    },
    {
        name: 'Euthanasia',
        artist: 'Post Malone',
        music:
            '/static/audio/Post_Malone_-_Euthanasia_Lyric_Vid_(getmp3.pro).mp3'
    },
    {
        name: 'Wasting Angels',
        artist: 'Post Malone and The Kid Laroi',
        music:
            '/static/audio/Post_Malone_-_Wasting_Angels_Lyric_(getmp3.pro).mp3'
    },
    {
        name: 'Wrapped Around Your Finger',
        artist: 'Post Malone',
        music:
            '/static/audio/Post_Malone_-_Wrapped_Around_Your_F_(getmp3.pro).mp3'
    },
    {
        name: 'Keisha & Becky Remix',
        artist: 'Russ Millions and Tion Wayne',
        music:
            '/static/audio/Russ_Millions_x_Tion_Wayne_-_Keisha_(getmp3.pro).mp3'
    },
    {
        name: 'Stay With Me',
        artist: 'Unknown',
        music: '/static/audio/Stay_With_Me_(getmp3.pro).mp3'
    },
    {
        name: 'The Funeral',
        artist: 'YUNGBLUD',
        music:
            '/static/audio/YUNGBLUD_-_The_Funeral_Official_Vi_(getmp3.pro).mp3'
    }]

loadTrack(track_index);

function loadTrack(track_index) {
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing song " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
}
function reset() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack() {
    isRandom ? pauseRandom() : playRandom();
}
function playRandom() {
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom() {
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack() {
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack() {
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack() {
    curr_track.play();
    isPlaying = true;
    wave.classList.add('m-loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    wave.classList.remove('m-loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack() {
    if (track_index < music_list.length - 1 && isRandom === false) {
        track_index += 1;
    } else if (track_index < music_list.length - 1 && isRandom === true) {
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    } else {
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack() {
    if (track_index > 0) {
        track_index -= 1;
    } else {
        track_index = music_list.length - 1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate() {
    let seekPosition = 0;
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}
const proceed = () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
    playTrack();
    curr_track.volume = 40 / 100;
}

document.getElementById('proceed').addEventListener('click', proceed);