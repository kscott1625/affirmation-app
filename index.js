

let btn = document.querySelector('button');
let output = document.querySelector('p');

const quotes =[
    "I am successful",
    "I am confident",
    "I am powerful",
    "I am strong",
    "I am getting better and better every day",
    "I wake up motivated",
    "I am an unstoppable force of nature",
    "I am a living, breathing example of motivation",
    "Note to self: I am going to make you so proud",
    "I set goals and go after them with all the determination I can muster. When I do this, my own skills and talents will take me to places that amaze me",
    "What I have done today was the best I was able to do today. And for that, I am thankful",
    "Happiness is a choice, and today I choose to be happy",
    "My life has meaning. What I do has meaning. My actions are meaningful and inspiring",
    "I feed my spirit. I train my body. I focus my mind. This is my time",
    "I finish what matters and let go of what does not",
    "I don’t compare myself to others. The only person I compare myself to is the person I was yesterday. And as long as the person I am today is even the tiniest bit better than the person I was yesterday—I’m meeting my own definition of success",
    "My soul radiates from the inside and warms the souls of others",
    "I have made mistakes, but I will not let them define me",
    "I belong in this world; there are people that care about me and my worth",
    "I do not engage with people who try to penetrate my mind with unhelpful thoughts and ideas—I walk away when a person or a situation isn’t healthy for me",
    "I must remember the incredible power I possess within me to achieve anything I desire",
    "I do not waste away a single day of my life. I squeeze every ounce of value out of each of my days on this planet—today, tomorrow, and everyday",
    "I’ve made it through hard times before, and I’ve come out stronger and better because of them. I’m going to make it through this",
    "I am healing and strengthening every day",
    "I am going to forgive myself and free myself. I deserve to forgive and be forgiven",
    "I accept myself for who I am and create peace, power and confidence of mind and of heart",
    "I’m freeing myself from all destructive doubt and fear",
    "I am constantly growing and evolving into a better person",
    "Through the power of my thoughts and words, incredible transformations are happening in me and within my life right now",
    "Each and every day, I am getting closer to achieving my goals",
    "I feel more grateful each day",
    "I am intelligent and focused",
    "Today will be a productive day",
    "I use obstacles to motivate me to learn and grow",
    "I am not defined my by past; I am driven by my future",
    "I can be whatever I want to be",
    "I am not pushed by my problems; I am led by my dreams",
    "I am turning DOWN the volume of negativity in my life, while simultaneously turning UP the volume of positivity",
    "I’m rising above the thoughts that are trying to make me angry or afraid",

];

btn.addEventListener('click', () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})


