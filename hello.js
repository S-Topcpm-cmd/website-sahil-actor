const message = "Typing...";
let index = 0;

const interval = setInterval(() => {
    // Clear the console each time
    console.clear();

    // Show part of the message
    console.log(message.slice(0, index + 1));

    index++;

    // Reset the animation when it finishes
    if (index === message.length) {
        index = 0;
    }
}, 200); // 200ms between updates
