const faq = [
  {
    ques: "When is Exam?",
    ans: "16 Oct 2003",
  },
  {
    ques: "How should I prepare?",
    ans: "We will Guide You",
  },
  {
    ques: "What are upcoming Batches?",
    ans: "Just launched!",
  },
];

function scrollToBottom() {
  const messageArea = document.querySelector(".message-area");
  messageArea.scrollTop = messageArea.scrollHeight;
}

function toggleChat() {
  var chatContainer = document.querySelector(".chat-container");
  chatContainer.classList.toggle("hidden");
}

const handleKeyUp = (event) => {
  if (event.key !== "Enter") return;
  sendMessage(event.target.value.trim());
};

const handleClick = (e) => {
  sendMessage(e.target.textContent.trim());
};
const sendMessage = (value) => {
  const messageArea = document.querySelector(".message-area");
  messageArea.innerHTML += `<p class="message outgoing">${value}</p>`;
  textarea.value = "";
  scrollToBottom();
  sendMessageLogic(value);
};

const sendMessageLogic = (value) => {
  let result = `<div class="suggestion"> <h4>Choose From the below options</h4>`;
  faq.forEach((question) => {
    result += `<p onclick="handleClick(event)">${question.ques}</p>`;
  });
  result += `</div>`;

  faq.forEach((question) => {
    if (value === question.ques) result = `<p class="message incoming">${question.ans}</p>`;
  });

  receiveMessage(result);
};

const receiveMessage = (value) => {
  const messageArea = document.querySelector(".message-area");
  messageArea.innerHTML += value;
  scrollToBottom();
};
