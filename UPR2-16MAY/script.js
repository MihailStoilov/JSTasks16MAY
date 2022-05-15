const createRobot = document.querySelector("#create-robot");
const robotName = document.querySelector('#robot-name');
const robotType = document.querySelector('#robot-type');
const robotColor = document.querySelector('#robot-color');
const robotJump = document.querySelector('#jump');
const robotTalk = document.querySelector('#talk');
const robotBlink = document.querySelector('#blink');
const robotPhrase = document.querySelector('#robot-phrase');
const body = document.querySelector("body");
const btns = document.querySelector('.btns');
const btn = document.querySelectorAll(".btn");
const btnNext = document.querySelector(".next-btn");
const btnPrev = document.querySelector(".prev-btn");
const sectionCreateRobotEl = document.querySelector(".section-create-robot");
const showRobotBtn = document.querySelector("#show-robot");


let robots = [];
let copyOfRobots = [];
let robot = {
  name: "",
  type: "",
  color: "",
  jump: false,
  blink: false,
}



function dynamicRobot() {

  robot = {
    name: robotName.value,
    type: robotType.value,
    color: robotColor.value,
    jump: robotJump.checked,
    blink: robotBlink.checked,
  }

  if (robots.length === 0) {
    const newSection = document.createElement("section");
    newSection.classList.add("factory-section", "active");
    newSection.setAttribute("id", `slide-${robots.length + 1}`);

    const createSection = document.querySelector('.header');
    createSection.insertAdjacentElement("afterend", newSection);
  }

  const factoryEl = document.querySelector(".factory-section");

  const containerEl = document.createElement('div');
  containerEl.classList.add("container");
  containerEl.setAttribute("id", `slide-${robots.length + 1}`);
  factoryEl.appendChild(containerEl);

  const newSecionHeader = document.createElement("div");
  newSecionHeader.classList.add("section-header");
  containerEl.appendChild(newSecionHeader);

  const newHeading = document.createElement("div");
  newHeading.classList.add("heading");
  newSecionHeader.appendChild(newHeading);

  const newSecondaryHeading = document.createElement("h2");
  newSecondaryHeading.classList.add("secondary-heading");
  newSecondaryHeading.textContent = robotType.options[robotType.selectedIndex].text;
  newHeading.appendChild(newSecondaryHeading);

  const newArr = document.createElement("div");
  newArr.classList.add("arr1");
  newHeading.appendChild(newArr);

  const newWrapper = document.createElement("div");
  newWrapper.classList.add("content-wrapper");
  containerEl.appendChild(newWrapper);

  const robotSide = document.createElement("div");
  robotSide.classList.add("robot-side");
  newWrapper.appendChild(robotSide);

  const robotBox = document.createElement("div");
  robotBox.classList.add("robot");
  robotSide.appendChild(robotBox);

  const robotHead = document.createElement("div");
  robotHead.classList.add("head");
  robotBox.appendChild(robotHead);

  const robotEyes = document.createElement("div");
  robotEyes.classList.add("eyes");
  robotHead.appendChild(robotEyes);

  const robotEye1 = document.createElement("div");
  robotEye1.classList.add("eye");
  robotEyes.appendChild(robotEye1);
  const robotEye2 = document.createElement("div");
  robotEye2.classList.add("eye");
  robotEyes.appendChild(robotEye2);

  const robotMouth = document.createElement("div");
  robotMouth.classList.add("mouth");
  robotHead.appendChild(robotMouth);

  const robotBody = document.createElement("div");
  robotBody.classList.add("robot-body");
  robotBox.appendChild(robotBody);

  const robotChest = document.createElement("div");
  robotChest.classList.add("chest");
  robotChest.style.borderTop = `5vw solid ${robot.color}`;
  robotBody.appendChild(robotChest);

  const robotRightHand = document.createElement("div");
  robotRightHand.classList.add("right-hand");
  robotBody.appendChild(robotRightHand);

  const robotLeftHand = document.createElement("div");
  robotLeftHand.classList.add("left-hand");
  robotBody.appendChild(robotLeftHand);

  if (robot.type === "Female") {
    const robotSkirt = document.createElement("div");
    robotSkirt.classList.add("skirt");
    robotSkirt.style.borderBottom = `2.5vw solid ${robot.color}`;
    robotBox.appendChild(robotSkirt);
  }

  const robotLegs = document.createElement("div");
  robotLegs.classList.add("legs");
  robotBox.appendChild(robotLegs);

  const robotLeftLeg = document.createElement("div");
  robotLeftLeg.classList.add("left-leg", "leg")
  robotLegs.appendChild(robotLeftLeg);

  const robotRightLeg = document.createElement("div");
  robotRightLeg.classList.add("right-leg", "leg")
  robotLegs.appendChild(robotRightLeg);

  const robotNameEl = document.createElement("p");
  robotNameEl.classList.add("robot-name");
  robotNameEl.textContent = robot.name;
  robotSide.appendChild(robotNameEl);

  const robotEyeEl = document.querySelector(".eyes").firstElementChild;

  if (robotBlink.checked) {
    console.log(robotEyeEl);
    robotEyes.firstChild.classList.add("blink");
  }

  if (robotJump.checked) {
    const robotLegs = document.querySelectorAll(".leg");
    robotLegs.forEach((leg) => {
      leg.classList.add("jump");
    })
  }

  const bubble = document.createElement("div");

  function showBubble() {
    bubble.classList.add("remove");
    robotMouth.classList.remove("speak");
  }

  if (robotTalk.checked) {
    bubble.classList.add("bubble");
    robotBox.appendChild(bubble);
    const bubbleText = document.createElement("p");
    bubbleText.classList.add("bubble-text");
    robot.phrase = robotPhrase.value;
    bubbleText.textContent = robot.phrase;
    bubble.appendChild(bubbleText);
    robotMouth.classList.add("speak");
    setTimeout(showBubble, 10000);
  }

  const textSide = document.createElement("div");
  textSide.classList.add("text-side");
  newWrapper.appendChild(textSide);

  const sendMsgBox = document.createElement("div");
  sendMsgBox.classList.add("send-msg-box");
  textSide.appendChild(sendMsgBox);

  const inputLineEl = document.createElement("div");
  inputLineEl.classList.add("input-line");
  sendMsgBox.appendChild(inputLineEl);

  const labelEl = document.createElement("label");
  labelEl.setAttribute("for", "send-message");
  labelEl.textContent = "Send message:"
  inputLineEl.appendChild(labelEl);

  const inputEl = document.createElement("input");
  inputEl.setAttribute("type", "text");
  inputEl.setAttribute("name", "send-message");
  inputEl.setAttribute("id", "send-message");
  inputEl.setAttribute("id", `input-${robots.length + 1}`);
  inputEl.setAttribute("placeholder", "write message here");
  inputEl.required = true;
  inputLineEl.appendChild(inputEl);

  const btnSubmitEl = document.createElement("button");
  btnSubmitEl.setAttribute("type", "submit");
  btnSubmitEl.classList.add("btn-send-message");
  btnSubmitEl.textContent = "Send";
  sendMsgBox.appendChild(btnSubmitEl);

  const lastMessagesEl = document.createElement("p");
  lastMessagesEl.classList.add("last-messages");
  lastMessagesEl.textContent = "Last Messages";
  textSide.appendChild(lastMessagesEl);


  const messagesBoxEl = document.createElement("div");
  messagesBoxEl.classList.add("messages");
  textSide.appendChild(messagesBoxEl);

  robots.push(robot);
  copyOfRobots.push(robot);
  robotName.value = "";
  robotType.value = "";
  robotColor.value = "#e96126";
  robotPhrase.value = "";

  btnSubmitEl.addEventListener("click", (event) => {
    if (inputEl.value === "") {
      alert("Please type message");
    } else {
      const currentDate = new Date();
      const currentTime = currentDate.getHours() + ":" + currentDate.getMinutes();
      let whichInput = Number(inputEl.getAttribute("id").slice(-1))
      const whichRobot = Object.values(robots[whichInput - 1])

      document.querySelectorAll(".messages").forEach((m) => {
        const messageEl = document.createElement("div");
        messageEl.classList.add("message");
        m.insertAdjacentElement("afterbegin", messageEl);
        const robotMessageEl = document.createElement("p");
        robotMessageEl.classList.add("robot-message");
        const spanMessage = document.createElement("span");
        const messageContentEl = document.createElement("p");
        messageContentEl.classList.add("msg-content");
        messageEl.appendChild(robotMessageEl);
        messageEl.appendChild(messageContentEl)
        robotMessageEl.style.color = whichRobot[2];
        robotMessageEl.textContent = whichRobot[0];
        messageContentEl.textContent = inputEl.value;
        spanMessage.textContent = `  ${currentTime}`;
        robotMessageEl.appendChild(spanMessage);
      })
      inputEl.value = "";
    }
    event.preventDefault();
  })
}


robotTalk.addEventListener("change", () => {
  robotTalk.checked ? robotPhrase.disabled = false : robotPhrase.disabled = true;
})

// Create robot 
createRobot.addEventListener("click", (event) => {

  if (robotName.value === "" || robotType.value === "" || robotColor.value === "") {
    alert('You need to fill all the required fields (*)')
  }
  else if (robotTalk.checked && robotPhrase.value === "") {
    alert("Please input a phrase");
  }
  else {

    dynamicRobot();
    if (robots.length >= 1) {
      btns.classList.add("btns-active");
    }
    if (robots.length <= 1) {
      btn.forEach((b) => {
        b.disabled = true;
      })
    } else {
      btn.forEach((b) => {
        b.disabled = false;
      })
    }
    slides = document.querySelectorAll(".container");

    maxSlide++;
    curSlide++;
    goToSlide();
    i++;
  }
  event.preventDefault();
})

let slides = "";
let curSlide = 0;
let maxSlide = 0;

function goToSlide() {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - curSlide + 1)}%)`
  });
}


// Next slide
function nextSlide() {
  maxSlide = slides.length;
  if (curSlide === maxSlide) {
    curSlide = 1;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
}

// Prev slide
function prevSlide() {
  if (curSlide === 1) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
}
// robots-num box
const robotsNum = document.createElement("div");
robotsNum.classList.add("robots-num");
sectionCreateRobotEl.appendChild(robotsNum);
const robotsNumText = document.createElement("p");
robotsNum.appendChild(robotsNumText);

// table
const tableEl = document.createElement("table");
const tableHead = document.createElement("thead");

const tableBody = document.createElement("tbody");
const tableTr = document.createElement("tr");
const thName = document.createElement("th");
const thType = document.createElement("th");
const thColor = document.createElement("th");
const thOptions = document.createElement("th");
thName.textContent = "Name";
thType.textContent = "Type";
thColor.textContent = "Color";
thOptions.textContent = "Options";

let i = 0;
function showRobot() {

  function robotOptions() {
    let robotOptions = [];
    robotTalk.checked === true ? robotOptions.push("can talk") : "";
    robotBlink.checked === true ? robotOptions.push("can blink") : "";
    robotJump.checked === true ? robotOptions.push("can jump") : "";
    return robotOptions.join(", ");
  }
  if (i > 0) {
    copyOfRobots.forEach((robot) => {
      robotsNumText.textContent = `${i} robots found`;
      createRow(robot);
    })
    sectionCreateRobotEl.appendChild(tableEl);
    tableEl.appendChild(tableHead);
    tableHead.appendChild(tableTr);
    tableTr.appendChild(thName);
    tableTr.appendChild(thType);
    tableTr.appendChild(thColor);
    tableTr.appendChild(thOptions);
    tableEl.appendChild(tableBody);
  }
  else {
    robotsNumText.textContent = "No robots created yet";
  }

  function createRow(robot) {
    const tableBodyTr = document.createElement("tr");
    tableBody.appendChild(tableBodyTr);
    const robotNameTd = document.createElement("td");
    robotNameTd.textContent = robot.name;
    tableBodyTr.appendChild(robotNameTd);
    const robotTypeTd = document.createElement("td");
    robotTypeTd.textContent = robot.type;
    tableBodyTr.appendChild(robotTypeTd);
    const robotColorTd = document.createElement("td");
    tableBodyTr.appendChild(robotColorTd);
    const colorBoxEl = document.createElement("div");
    colorBoxEl.classList.add("color-box");
    colorBoxEl.style.backgroundColor = robot.color;
    robotColorTd.appendChild(colorBoxEl);
    const robotOptionsTd = document.createElement("td");
    robotOptionsTd.textContent = robotOptions();
    tableBodyTr.appendChild(robotOptionsTd);

  }
  copyOfRobots = [];
}


btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);
showRobotBtn.addEventListener("click", showRobot);







