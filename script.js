const febHolidays = [
  "Dear vaishuu jii, please feel it",
  "happy birthday vaishu jii 💖💫",
  "Dost bhi tum, pyaar bhi tum 😊",
  "ek bhi tum aur hazar bhi tum 🤩",
  "dukh me tum aur khushi me tum 🤨",
  "you're just enough for me ✨🤗",
  "You're my everything ✔",
  "I will always be there for you",
  "No matter how far we are🥰",
  "I promise I will never multi-thread on you",
  "You're the prettiest, cutest, funniest,",
  "sweetest girl alive. 🤞✍",
  "In one word, you're just perfect.😍",
  "I'm the happiest man alive🥰",
  "I'm so grateful I met you❤️",
  "I'll always do my best to keep you happy🥺",
  "Main humesa aapke sath hun vaishu jii 🤞✔",
  "kabhi khud ko akela mat samjhna💓",
  "You are the most special person in my life🥰",
  "I don't want to lose you 😒",
  "And trust me I dont want anyone else 🥰",
  "There's no one better than you❤️",
  "You're the best healer for me!! 💖",
  "Or should I say, I miss you when",
  "something really good happens 🤨",
  "Acche lagte hai wo pal jo aapke",
  "sath bitaye hain virtually 💓",
  "There's some hardships, 😢",
  "but we overcame most of them 🥰",
  "and it made me realised how",
  "important you are in my life❤️",
  "This complete cycle is just for you, 😘",
  "Please take care of yourself you're so important for me besyiee jii❤",
  "I'm binary in friendship; you're the one and only '1 in my life",
  "Thanks to God for helping us,ki hum logo ko milaya🙏",
  "You're my faviourate bestfriend for me ✨,",
  "I Love You So much my bestiee❤️",
  "Your beauty radiates from the kindness in your heart 🧡",
  "True beauty is in your soul, and you shine brightly.💕🤗",
  "Your loyalty is rare, your kindness a treasure.💌🤍"
];
const ulEl = document.querySelector("ul");
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
let activeIndex = daynumber;
const rotate = -360 / febHolidays.length;
init();
function init() {
  febHolidays.forEach((holiday, idx) => {
    const liEl = document.createElement("li");
    liEl.style.setProperty("--day_idx", idx);
    liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
      }</time><span>${holiday}</span>`;
    ulEl.append(liEl);
  });
  ulEl.style.setProperty("--rotateDegrees", rotate);
  adjustDay(0);
}
function adjustDay(nr) {
  daynumber += nr;
  ulEl.style.setProperty("--currentDay", daynumber);
  const activeEl = document.querySelector("li.active");
  if (activeEl) activeEl.classList.remove("active");
  activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
  const newActiveEl = document.querySelector(
    `li:nth-child(${activeIndex + 1})`
  );
  document.body.style.backgroundColor = window.getComputedStyle(
    newActiveEl
  ).backgroundColor;
  newActiveEl.classList.add("active");
}
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      adjustDay(-1);
      break;
    case "ArrowDown":
      adjustDay(1);
      break;
    default:
      return;
  }
});
