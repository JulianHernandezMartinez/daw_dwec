
const msgp = document.querySelector('#message');

/**
 * Changes the paragraph content
 * @param {string} msg - the message to set
 */
function setMessageContent(msg) {
  msgp.textContent = msg;
}

export { setMessageContent };
