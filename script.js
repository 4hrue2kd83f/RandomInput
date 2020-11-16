let currentWord = "";
let counter = 0;

clear.onclick = () => {
    textArea.value = "";
}

enter.onclick = () => {
    if (confirm("Enter this word: " + currentWord + "?")) {
        textArea.value += currentWord;
    }
}
changePos();

newword.onclick = () => {
    if (confirm("Are you sure you want to get a new word?")) {
        currentWord = wordlist[Math.floor(Math.random() * wordlist.length)];
        document.getElementById("selectedWord").innerHTML = currentWord;
        counter++;
    }
}

space.onclick = () => {
    if (confirm("Are you sure you want to add a space?")) {
        textArea.value += " ";
    }
}

tkls.onclick = () => {
    if (confirm("Are you sure you want to remove a space?\n\nNOTE: If you didn't just add a space, there will be serious consequences!")) {
        if (textArea.value.charAt(textArea.value.length - 1) == " ") {
            textArea.value = textArea.value.slice(0, -1);
        } else {
            alert("This isn't a backspace button, you hacker. To avoid further hacking, the text box will now be cleared.");
            textArea.value = "";
        }
    }
}

uppercase.onclick = () => {
    if (confirm("Are you sure you want to capitalize this word?")) {
        currentWord = currentWord.charAt(0).toUpperCase() + currentWord.slice(1)
        document.getElementById("selectedWord").innerHTML = currentWord;
    }
}

lowercase.onclick = () => {
    if (confirm("Are you sure you want to lowercase this word?")) {
        currentWord = currentWord.charAt(0).toUpperCase() + currentWord.slice(1)
        document.getElementById("selectedWord").innerHTML = currentWord;
    }
}

newline.onclick = () => {
    if (confirm("Are you sure you want to add a new line?")) {
        textArea.value += "\n";
    }
}

postbutton.onclick = () => {
    if (confirm("Posting must be unlocked by purchasing Premium for $4.99. Please click \"OK\" to proceed to checkout.")) {
        prompt("Please enter your credit card number.", "0000 0000 0000 0000");
        alert("Invalid credit card number. Purchase has been cancelled.");
    }
}

function changePos() {
    /*     t.focus();
        t.setSelectionRange(t.value.length, t.value.length);
        s.style.left = getCursorXY(t, t.selectionEnd).x - 100 + "px";
        t.blur();
     */
}








/**
 * FROM https://medium.com/@jh3y/how-to-where-s-the-caret-getting-the-xy-position-of-the-caret-a24ba372990a
 */
function getCursorXY(input, selectionPoint) {
    const {
        offsetLeft: inputX,
        offsetTop: inputY,
    } = input
    // create a dummy element that will be a clone of our input
    const div = document.createElement('div')
    // get the computed style of the input and clone it onto the dummy element
    const copyStyle = getComputedStyle(input)
    for (const prop of copyStyle) {
        div.style[prop] = copyStyle[prop]
    }
    // we need a character that will replace whitespace when filling our dummy element if it's a single line <input/>
    const swap = '.'
    const inputValue = input.tagName === 'INPUT' ? input.value.replace(/ /g, swap) : input.value
    // set the div content to that of the textarea up until selection
    const textContent = inputValue.substr(0, selectionPoint)
    // set the text content of the dummy element div
    div.textContent = textContent
    if (input.tagName === 'TEXTAREA') div.style.height = 'auto'
    // if a single line input then the div needs to be single line and not break out like a text area
    if (input.tagName === 'INPUT') div.style.width = 'auto'
    // create a marker element to obtain caret position
    const span = document.createElement('span')
    // give the span the textContent of remaining content so that the recreated dummy element is as close as possible
    span.textContent = inputValue.substr(selectionPoint) || '.'
    // append the span marker to the div
    div.appendChild(span)
    // append the dummy element to the body
    document.body.appendChild(div)
    // get the marker position, this is the caret position top and left relative to the input
    const { offsetLeft: spanX, offsetTop: spanY } = span
    // lastly, remove that dummy element
    // NOTE:: can comment this out for debugging purposes if you want to see where that span is rendered
    document.body.removeChild(div)
    // return an object with the x and y of the caret. account for input positioning so that you don't need to wrap the input
    return {
        x: inputX + spanX,
        y: inputY + spanY,
    }
}