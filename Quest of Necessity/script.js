const text = document.querySelector('#text');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const stats = document.querySelector('#stats');
const tummy = document.querySelector('#tummy');
const tumVal = document.querySelector('#tumVal');

let player;
let tummyStates = ['Persistently inflamed', 'Consistently troublesome', 'Occasionally bothersome', 'Mildy irksome', 'Satisfyingly Soothed']

function startUp1() {
    text.innerText = 'Welcome! What is your name?';
    button1.innerText = 'Bob';
    button2.innerText = 'John';
    button3.innerText = 'Neither';
    button3.style.display = 'inline-block';
    button1.onclick = function() {startUp2(button1.innerText);}
    button2.onclick = function() {startUp2(button2.innerText);}
    button3.onclick = function() {startUp2(button3.innerText);}
}

function startUp2(newName) {
    player = newName;
    
    text.innerText = 'Hi ' + player + '! My name is ' + player + '\'s Vocalized But Somewhat Subpar Awareness! I\'ll make sure that throughout your life, you\'ll be aware of everything going on around you! Or most of it at least. First thing\'s first, you\'ve got a doctor\'s appointment today to see if that upset stomache you\'ve had recently is anything to be worried about.'
    button1.innerText = 'Let\'s go';
    button2.innerText = 'I can\'t be bothered';
    button3.style.display = 'none';
    button1.onclick = function() {startUp3b();}
    button2.onclick = function() {startUp3a();}
}

function startUp3a() {
    stats.style.display = 'block';

    text.innerText = 'This appointment must be really important to you, huh?. As you sit on your fat lazy butt, you decide to go outside and get the mail in case your Vbucks purchase confirmation has come in. As you walk to the mailbox, you see a puddle, which you think nothing of. As you step in, you fall all the way over your head. As you sink to the bottom, you look up through the water at the cloudy sky above, wishing you had made better decisions. Suddenly, you feel yourself freefalling, and you land on a painfully hard surface. You look up and see a circle of water floating in the ceiling of a long stone hallway, each direction lit with torches as far as the eye can see. Wherever you are, it\'s like nowhere you\'ve ever been before. You can\'t imagine how the water is floating like it is. Luckily you brought a compass.'
    button1.innerText = 'Go east down the hallway';
    button2.innerText = 'Go west down the hallway';
    button1.onclick = function() {startUp7();}
    button2.onclick = function() {startUp7();}
}

function startUp3b() {
    text.innerText = 'On your way to the doctor\'s office (you\'re walking because you\'re poor), you step in a puddle. It\'s deeper than you expected. Now you have a wet sock.'
    button1.innerText = 'Keep pressing forward';
    button2.innerText = 'Turn back';
    button1.onclick = function() {startUp4b();}
    button2.onclick = function() {startUp4a();}
}

function startUp4a() {
    stats.style.display = 'block';

    text.innerText = 'As you turn back, you see another puddle and you reflect on your last experience. This puddle looks massive, so if your previous experience is anything to go off of, it\'s depths most likely could not be fathomed. While you\'re thinking about this, someone rudely bumps into you, knocking you into the puddle. As you sink to the bottom, you look up through the water at the cloudy sky above, wishing you had just stayed at home. Suddenly, you feel yourself freefalling, and you land on a painfully hard surface. You look up and see a circle of water floating in the ceiling of a long stone hallway, each direction lit with torches as far as the eye can see. Wherever you are, it\'s like nowhere you\'ve ever been before. You can\'t imagine how the water is floating like it is. Luckily you brought a compass.'
    button1.innerText = 'Go east down the hallway';
    button2.innerText = 'Go west down the hallway';
    button1.onclick = function() {startUp7();}
    button2.onclick = function() {startUp7();}
}

function startUp4b() {
    text.innerText = 'You continue on, letting nothing keep you from your appointment. While thinking about how cool you must look with your newfound determination, you step in a puddle. It\'s deeper than you would have expected, had you been paying attention and seen it. Now you have 2 wet socks.'
    button1.onclick = function() {startUp5b();}
    button2.onclick = function() {startUp5a();}
}

function startUp5a() {
    stats.style.display = 'block';

    text.innerText = 'As you turn back, you see another puddle and you reflect on your past experiences. This puddle looks massive, so if your previous experiences are anything to go off of, it\'s depths most likely could not be fathomed. While you\'re thinking about this, someone rudely bumps into you, knocking you into the puddle. As you sink to the bottom, you look up through the water at the cloudy sky above, wishing you had just stayed at home. Suddenly, you feel yourself freefalling, and you land on a painfully hard surface. You look up and see a circle of water floating in the ceiling of a long stone hallway, each direction lit with torches as far as the eye can see. Wherever you are, it\'s like nowhere you\'ve ever been before. You can\'t imagine how the water is floating like it is. Luckily you brought a compass.'
    button1.innerText = 'Go east down the hallway';
    button2.innerText = 'Go west down the hallway';
    button1.onclick = function() {startUp7();}
    button2.onclick = function() {startUp7();}
}

function startUp5b() {
    text.innerText = 'Miserable as you must now be, you continue walking. Upon seeing another puddle, you feel yourself lose all motivation to avoid it, and you step in the puddle. It\'s deeper than you expected. Now you have 3 wet socks.'
    button1.onclick = function() {startUp6();}
    button2.onclick = function() {startUp5a();}
}

function startUp6() {
    stats.style.display = 'block';

    text.innerText = 'This appointment must be really important to you. As you see another puddle, you reflect on past events. This puddle looks massive, so if your previous expereinces are anything to go off of, it\'s depths most likely could not be fathomed. While you\'re thinking about this, someone rudely bumps into you, knocking you into the puddle. As you sink to the bottom, you look up through the water at the cloudy sky above, wishing you had been a little less diehard for that appointment. Suddenly, you feel yourself freefalling, and you land on a painfully hard surface. You look up and see a circle of water floating in the ceiling of a long stone hallway, each direction lit with torches as far as the eye can see. Wherever you are, it\'s like nowhere you\'ve ever been before. You can\'t imagine how the water is floating like it is. Luckily you brought a compass.'
    button1.innerText = 'Go east down the hallway';
    button2.innerText = 'Go west down the hallway';
    button1.onclick = function() {startUp7();}
    button2.onclick = function() {startUp7();}
}

function startUp7() {
    tumVal.innerText = tummyStates[3];
    tummy.style.display = 'inline';

    text.innerText = 'As you walk, you pass the occasion hole in the ceiling filled with gravity-defying water, just like the one you fell through. After several hours, you grow weary, and just as you\'re considering taking a break you hear a sound of dislodging stone above you. As you look up you feel a sharp pain and impact on your forehead, and everything goes black. When you wake up, I, ' + player + '\'s Vocalized But Somewhat Subpar Awareness, have a rare moment of pure clarity, and am accutely aware that you have contracted IBS, hence your recent stomache problems. Bummer. It may also interest you to know that you are now in a small cot in a small and dimly lit room. The walls are made of rough stone, and there\'s a wooden door with no obvious lock on it. The rest of the room is empty.'
    button1.innerText = 'Go through the door';
    button2.innerText = 'Continue resting';
    button1.onclick = function() {startUp8a();}
    button2.onclick = function() {startUp8b();}
}

function startUp8() {
    text.innerText = 'You awaken feeling rested'
    button1.innerText = 'Go east down the hallway';
    button2.innerText = 'Go west down the hallway';
    button1.onclick = function() {startUp7();}
    button2.onclick = function() {startUp7();}
}