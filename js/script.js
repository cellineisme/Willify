// Toggle active class
const navbarNav = document.querySelector(".navbar-nav");
// when hammenu is clicked
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function imgSlider(anything) {
  document.querySelector(".ttpd").src = anything;
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}

const text = document.querySelectorAll("label");
text.forEach((label) => {
  label.innerHTML = label.textContent
    .split("")
    .map(
      (text, wave) =>
        `<span style="transition-delay: ${wave * 25}ms">${text}</span>`
    )
    .join("");
});

function validateData() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var pass = document.getElementById("pass");
  var age = document.getElementById("age");
  var male = document.getElementById("male");
  var female = document.getElementById("female");

  if (name.value.length < 5) {
    alert("Username must be more than 5 characters");
  } else if (!email.value.endsWith("@gmail.com")) {
    alert("Email must ends with @gmail.com");
  } else if (!checkAlphaNum(pass.value)) {
    alert("Password must be alphanumeric");
  } else if (age.value <= 0) {
    alert("Age must be above 0");
  } else if (!male.checked && !female.checked) {
    alert("Gender must be selected");
  } else {
    alert("Registered!");
  }
}

function checkAlphaNum(pass) {
  var isAlpha = false;
  var isNum = false;
  for (let i = 0; i < pass.length; i++) {
    if (isNaN(pass[i])) {
      isAlpha = true;
    } else {
      isNum = true;
    }

    if (isAlpha && isNum) {
      return true;
    }
  }
  return false;
}

const songs = {
  eternal_sunshine: {
    image: "img/ari.jpg",
    title: "eternal sunshine",
    artist: "Ariana Grande",
    lyrics: `I
    I don't care what people say
    We both know I couldn't change you
    I guess you could say the same
    Can't rearrange truth
    I've never seen someone lie like you do
    So much, even you start to think it's true
    Ooh
    Get me out of this loop, yeah, yeah
    So now we play our separate scenes
    Now, now she's in my bed, mm-mm, layin' on your chest
    Now I'm in my head, wonderin' how it ends
    I'll be the first to say, "I'm sorry"
    Now you got me feelin' sorry
    I showed you all my demons, all my lies
    Yet you played me like Atari
    Now it's like I'm lookin' in the mirror
    Hope you feel alright when you're in her
    I found a good boy and he's on my side
    You're just my eternal sunshine, sunshine
    So I try to wipe my mind
    Just so I feel less insane
    Rather feel painless
    I'd rather forget than know, know for sure
    What we could've fought through behind this door, mm
    So I close it and move, yeah, yeah
    So now we play our separate scenes
    Now, now he's in your bed, and layin' on my chest
    Now I'm in my head, and wonderin' how it ends, ends, ends
    I'll be the first to say, "I'm sorry"
    Now you got me feelin' sorry
    I showed you all my demons, all my lies
    Yet you played me like Atari
    Now it's like I'm lookin' in the mirror
    Hope you feel alright when you're in her
    I found a good boy and he's on my side
    You're just my eternal sunshine, sunshine
    Won't break, can't shake
    This fate, rewrite
    Deep breaths, tight chest
    Life, death, rewind
    Won't (won't) break (won't), can't (can't) shake (shake)
    This (this) fate (fate), rewrite
    Deep (deep) breaths (breaths), tight (tight) chest (chest)
    Life (life), death (death)
    I'll be the first to say, "I'm sorry"
    Now you got me feelin' sorry
    I showed you all my demons, all my lies
    Yet you played me like Atari
    Now it's like I'm lookin' in the mirror (won't break, can't shake)
    Hope you feel alright when you're in her (this fate, rewrite)
    I found a good boy and he's on my side (deep breaths, tight chest)
    You're just my eternal sunshine, sunshine (life, death, rewind)
    Won't (won't) break (won't), can't (can't) shake (shake)
    This (this) fate (fate), rewrite
    Deep (deep) breaths (breaths), tight (tight) chest (chest)
    Life (life), death (death), rewind
    Won't (won't) break (won't), can't (can't) shake (shake)
    This (this) fate (fate), rewrite
    Deep (deep) breaths (breaths), tight (tight) chest (chest)
    Life (life), death (death)`,
  },
  sudden_shower: {
    image: "img/eclipse.jpg",
    title: "Sudden Shower",
    artist: "ECLIPSE",
    lyrics: `그치지 않기를 바랬죠
    처음 그대 내게로 오던 그날에
    잠시 동안 적시는 그런 비가 아니길
    간절히 난 바래왔었죠
    그대도 내 맘 아나요?
    매일 그대만 그려왔던 나를
    오늘도 내 맘에 스며들죠
    그대는 선물입니다, 하늘이 내려준
    홀로 선 세상 속에 그댈 지켜줄게요
    어느 날 문득 소나기처럼 내린 그대지만
    오늘도 불러 봅니다, 내겐 소중한 사람
    Oh
    떨어지는 빗물이 어느새 날 깨우고
    그대 생각에 잠겨요
    이제는 내게로 와요
    언제나처럼 기다리고 있죠
    그대 손을 꼭 잡아줄게요
    그대는 선물입니다, 하늘이 내려준
    홀로 선 세상 속에 그댈 지켜줄게요
    어느 날 문득 소나기처럼 내린 그대지만
    오늘도 불러 봅니다, 내겐 소중한 사람
    잊고 싶던 아픈 기억들도
    빗방울과 함께 흘려보내면 돼요
    때로는 지쳐도, 하늘이 흐려도
    내가 있다는 걸 잊지 말아요
    그대는 사랑입니다, 하나뿐인 사랑
    다시는 그대와 같은 사랑 없을 테니
    잊지 않아요, 내게 주었던 작은 기억 하나도
    오늘도 새겨봅니다, 내겐 선물인 그댈`,
  },
  drunk: {
    image: "img/keshi.jpg",
    title: "drunk",
    artist: "keshi",
    lyrics: `All my friends are drunk again
    And I'm stumblin' back to bed all by myself
    Don't need nobody else
    All my friends are drunk again
    And I'm stumblin' back to bed all by myself
    Don't need nobody else
    Smell like smoke, nuit de l'homme
    It's been a while since we last spoke
    So tell me, how's it go?
    Still love blues, nothin' new
    Careless love, I've had a few
    How 'bout you?
    All my friends are drunk again
    And I'm stumblin' back to bed all by myself
    Don't need nobody else
    All my friends are drunk again
    And I'm stumblin' back to bed all by myself
    Don't need nobody else
    I never have thought
    When you're gone
    I'd find it hard to carry on
    And it's probably 'cause
    I fell in love way back then
    And I think about us when
    I think about us when
    All my friends are drunk again
    And I'm stumblin' back to bed all by myself
    I got nobody else
    All my friends are drunk again
    And I'm stumblin' back to bed all by myself
    I got, I got nobody else`,
  },
  thru_these_tears: {
    image: "img/lany2.jpg",
    title: "Thru These Tears",
    artist: "LANY",
    lyrics: `This hurts like hell
    But I keep telling myself
    It's gonna get better
    But it's taking forever
    I try to go out
    But every time I leave the house
    Something reminds me
    Of what's now behind me
    Every day I let go just a little bit more
    In the end, I'm gonna be alright
    But it might take a hundred sleepless nights
    To make the memories of you disappear
    But right now, I can't see nothing through these tears
    Control my thoughts
    Convincing myself it's your loss
    I really mean it
    And I'm starting to believe it
    'Cause every day I let go just a little bit more
    In the end, I'm gonna be alright
    But it might take a hundred sleepless nights
    To make the memories of you disappear
    But right now, I can't see nothing through these tears
    Out of sight but you're not out of my mind
    So it might take somebody else at night
    To make it feel like you were never here
    But right now, I can't see nothing through these tears
    You said it was over
    But when we got closer
    You cried on my shoulder
    Goodbye
    In the end, I'm gonna be alright
    But it might take a hundred sleepless nights
    To make the memories of you disappear
    But right now, I can't see nothing through these tears
    Out of sight but you're not out of my mind
    So it might take somebody else at night
    To make it feel like you were never here
    But right now, I can't see nothing through these tears
    Driving home on an empty highway
    I thought about you and I hit the brakes
    What we had and who we were was so clear
    But right now, I can't see nothing through these tears`,
  },
  photograph: {
    image: "img/ed.jpg",
    title: "Photograph",
    artist: "Ed Sheeran",
    lyrics: `Loving can hurt
    Loving can hurt sometimes
    But it's the only thing that I know
    When it gets hard
    You know it can get hard sometimes
    It is the only thing that makes us feel alive
    
    We keep this love in a photograph
    We made these memories for ourselves
    Where our eyes are never closing
    Hearts are never broken
    Times forever frozen still
    
    So you can keep me
    Inside the pocket
    Of your ripped jeans
    Holding me closer
    'Til our eyes meet
    You won't ever be alone
    Wait for me to come home
    
    Loving can heal
    Loving can mend your soul
    And it's the only thing that I know (know)
    I swear it will get easier
    Remember that with every piece of ya
    And it's the only thing we take with us when we die
    
    We keep this love in a photograph
    We made these memories for ourselves
    Where our eyes are never closing
    Hearts were never broken
    Times forever frozen still
    
    So you can keep me
    Inside the pocket
    Of your ripped jeans
    Holding me closer
    'Til our eyes meet
    You won't ever be alone
    
    And if you hurt me
    That's OK, baby, only words bleed
    Inside these pages you just hold me
    And I won't ever let you go
    
    Wait for me to come home
    Wait for me to come home
    Wait for me to come home
    Wait for me to come home
    
    Oh you can fit me
    Inside the necklace you got when you were sixteen
    Next to your heartbeat
    Where I should be
    Keep it deep within your soul
    
    And if you hurt me
    Well, that's OK, baby, only words bleed
    Inside these pages you just hold me
    And I won't ever let you go
    
    When I'm away
    I will remember how you kissed me
    Under the lamppost
    Back on 6th street
    Hearing you whisper through the phone
    "Wait for me to come home"
    
    `,
  },
};

// Function to get URL parameters
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(params.entries());
}

// Function to update the page content
function updateSongDetails() {
  const params = getQueryParams();
  const song = songs[params.song];

  if (song) {
    document.getElementById("song-image").src = song.image;
    document.getElementById("song-title").textContent = song.title;
    document.getElementById("song-artist").textContent = song.artist;
    document.getElementById("song-lyrics").textContent = song.lyrics;
  }
}

// Call the function to update song details
window.onload = updateSongDetails;
