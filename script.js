const quotes = [{"quote": "Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde"}, {"quote": "To live is the rarest thing in the world. Most people exist, that is all.",
        "author": "Oscar Wilde"}, { "quote": "Women are made to be Loved, not understood.",
        "author": "Oscar Wilde"}, {"quote": "Be the change that you wish to see in the world.",
        "author": "Mahatma Gandhi"}, {"quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "author": "Mahatma Gandhi"}, {"quote": "No one can make you feel inferior without your consent.",
        "author": "Eleanor Roosevelt"}, {"quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        "author": "Eleanor Roosevelt"}, {"quote": "Do one thing every day that scares you.",
        "author": "Eleanor Roosevelt"}, {"quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
        "author": "Martin Luther King"}, {"quote": "Our lives begin to end the day we become silent about things that matter.",
        "author": "Martin Luther King"}, {"quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "author": "Martin Luther King"}, { "quote": "Injustice anywhere is a threat to justice everywhere.",
        "author": "Martin Luther King"}, {"quote": "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
        "author": "Albert Einstein"}, {"quote": "I have not failed. I've just found 10,000 ways that won't work.",
        "author": "Thomas A. Edison"}, {"quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas A. Edison"}, {"quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        "author": "Thomas A. Edison"}, {"quote": "Life isn't about finding yourself. Life is about creating yourself.",
        "author": "George Bernard Shaw"}, {"quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "author": "Winston Churchill"}, {"quote": "If you're going through hell, keep going.",
        "author": "Winston Churchill"}, {"quote": "We make a living by what we get, but we make a life by what we give.",
        "author": "Winston Churchill"}, {"quote": "You and me", "author":"Sister Khadija"}]


const buttonEl = document.getElementById("button")
const authorEl = document.getElementById("author")
const quoteEl = document.getElementById("quote")

buttonEl.addEventListener("click", () => {
    rand = Math.floor(Math.random() * quotes.length)
    
    authorEl.innerHTML = quotes[rand].author
    quoteEl.innerHTML = `"${quotes[rand].quote}"`
})



