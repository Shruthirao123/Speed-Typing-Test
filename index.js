let speedTypingTest = document.getElementById('speedTypingTest');
let timer = document.getElementById('timer');
let quoteDisplay = document.getElementById('quoteDisplay');
let quoteInput = document.getElementById('quoteInput');
let result = document.getElementById('result');
let submitBtn = document.getElementById('submitBtn');
let resetBtn = document.getElementById('resetBtn');
let sp = document.getElementById('sp');
timer.style.fontSize = 50 + 'px';

function fun1() {
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };
    sp.classList.add('spinner-border');
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data1) {
            let {
                content
            } = data1;
            sp.classList.remove('spinner-border');
            quoteDisplay.textContent = content;
        });
}

let count = 0;
let a = setInterval(function() {
    count += 1;
    if (count > 1) {
        timer.textContent = count + ' Seconds';
    } else {
        timer.textContent = count + ' Second';
    }

}, 1000);
fun1();

submitBtn.onclick = function() {
    if (quoteDisplay.textContent === quoteInput.value) {
        clearInterval(a);
        result.textContent = "You Typed in " + count + ' Seconds';
    } else {
        result.textContent = "You Typed Incorrect Sentence";
    }
}

resetBtn.onclick = function() {
    clearInterval(a)
    count = 0;
    quoteInput.value = "";
    result.textContent = "";
    fun1();
    a = setInterval(function() {
        count += 1;
        if (count > 1) {
        timer.textContent = count + ' Seconds';
    } else {
        timer.textContent = count + ' Second';
    }
    }, 1000);
}