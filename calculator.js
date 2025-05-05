let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".btn");

let buttonsArray = Array.from(buttons);

let string = "";



buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerHTML == "AC") {
            string = "";
            display.value = string;
        }
        else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            display.value = string;
        }
        else if (e.target.innerHTML == "=") {
            string = eval(string);
            display.value = string;
        }
        else {
            string = string + e.target.innerHTML;
            display.value = string;
        }

        display.scrollLeft = display.scrollWidth;
    })
})

document.addEventListener("keydown", function(e) {
    e.preventDefault(); // ✅ Block default Enter button behavior

    // ✅ Prevent button re-click if one is focused
    if (document.activeElement.tagName === "BUTTON") {
        document.activeElement.blur();
    }

    if (e.key === "Enter") {
        // Simulate "=" button click
        document.querySelector('.btn.bgColor').click();
    }

    if (e.key === "r" || e.key === "R") {
        location.reload();
    }

    if (e.key === "Escape") {
        string = "";
        display.value = string;
    }
});

