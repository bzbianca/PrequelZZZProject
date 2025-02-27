// click on images to switch through the character introductions

// variable making for intro button
const corinButton = document.getElementById("selectCorin"); // corin intro button
const lycaonButton = document.getElementById("selectLycaon"); // lycaon intro button
const ellenButton = document.getElementById("selectEllen"); // ellen intro button
const rinaButton = document.getElementById("selectRina"); // rina intro button

const starterIntro = document.getElementById("introChars"); // intro starts with Corin


// All character descriptions in variables

// corin's description
const corinDesc = "A shy and timid girl who is very soft-spoken. Whenever there is a need to speak up and talk to strangers, she stutters and no one can hear anything she says. However, when she is around her friends like Ellen or Rina, she is a kind and lovable person who cares about her friends well-being.";
// lycaon's description
const lycaonDesc = "A tall wolf man who stands higher than 7 feet. He is the epitome of Lone Wolf, minus the lonely and rough personality. When you need assistance, he and his company will come to you and serve quickly and efficiently. He doesn't get his work and life tied and will be professional in anyway during work. Though it's hard to keep professional with the loving companions he has while working.";
// ellen's description
const ellenDesc = "A shark girl who is in highschool. During work, she is mostly tired and sleepy due to the endless and draining hours of school. When she has no school or work, you will see her anywhere there is something fun to do. Lumina square to shop or Sixth Street to rent a new movie. Try not to get on her bad side, or she will bite!";
// rina's description
const rinaDesc = "A very calm ghost woman. Her personality doesn't match well with most as she doesn't understand personal boundaries. Other than that, she will serve you with food and drinks with love and cares for her customers and companions very well.";


let cluesList = document.getElementById("cluesList") // creating clueslist variable
let addtoclueList = [] // list that will store the clues
let confirmedclueList = []
let clue; // global variable that will be used to store the clues from each location to be added to the list

// refresh the clues list
function refreshClues() {
    cluesList.innerHTML = "Clues List:<br>"
    for (let i = 0; i < addtoclueList.length; i++) { // adding all clues to list
        cluesList.innerHTML += addtoclueList[i] + "<br>" // clue to list
    }
}

// Event listeners that checks which button is clicked
corinButton.addEventListener("click", function(){ // corin button is pressed, show img and desc
    starterIntro.src = "backgroundImgs/introImgs/1selectedCorin.jpeg";
    document.getElementById("descIntro").innerHTML = corinDesc;
})

lycaonButton.addEventListener("click", function(){ // lycaon button is pressed, show img and desc
    starterIntro.src = "backgroundImgs/introImgs/2selectedLycaon.jpeg";
    document.getElementById("descIntro").innerHTML = lycaonDesc;
})

ellenButton.addEventListener("click", function(){ // ellen button is pressed, show img and desc
    starterIntro.src = "backgroundImgs/introImgs/3selectedEllen.jpeg";
    document.getElementById("descIntro").innerHTML = ellenDesc;
})

rinaButton.addEventListener("click", function(){ // rina button is pressed, show img and desc
    starterIntro.src = "backgroundImgs/introImgs/4selectedRina.jpeg";
    document.getElementById("descIntro").innerHTML = rinaDesc;
})

/////////////// AGENT SELECTION

const agentSelectButton = document.getElementById("agentSelect"); // agent selection start button
let mainAgent; // declare main agent variable, will store main character

let corinAgent = document.getElementById("corinAgent"); // Corin's agent button
let lycaonAgent = document.getElementById("lycaonAgent"); // Lycaon's agent button
let rinaAgent = document.getElementById("rinaAgent"); // Rina's agent button

////////////////////// VARIABLE MAKING FOR AGENT SELECTION & MAIN STORY//////////////////////

// message ids into variables
let timeToPick = document.getElementById("timeToPick")
let agentSelect = document.getElementById("agentSelect")
let uhOh = document.getElementById("uhOh")
let instructions = document.getElementById("instructions")
let letsfindClues = document.getElementById("letsfindClues")



// agent selection process button press

agentSelectButton.addEventListener("click", function(){ // agent selection start button is pressed
    agentSelectButton.style.visibility = "hidden";
    corinAgent.style.visibility = "visible"
    lycaonAgent.style.visibility = "visible"
    rinaAgent.style.visibility = "visible"

    // display uhOh message
    uhOh.style.visibility = "visible"

    /// agent buttons and messages

    let agentPicked = document.getElementById("youPicked")
    let currentAgent = document.getElementById("currentAgent")

    // corin's button was pressed
    corinAgent.addEventListener("click", function(){
        mainAgent = "Corin"
        agentPicked.innerHTML = "You picked Corin!"
        currentAgent.innerHTML = "Current Agent: Corin"
        corinAgent.style.visibility = "hidden"
        lycaonAgent.style.visibility = "hidden"
        rinaAgent.style.visibility = "hidden"

        // open location menu
        locationMenu()
    })

    // lycaon's button was pressed
    lycaonAgent.addEventListener("click", function(){
        mainAgent = "Lycaon"
        agentPicked.innerHTML = "You picked Lycaon!"
        currentAgent.innerHTML = "Current Agent: Lycaon"
        corinAgent.style.visibility = "hidden"
        lycaonAgent.style.visibility = "hidden"
        rinaAgent.style.visibility = "hidden"

        // open location menu
        locationMenu()
    })

    // rina's button was pressed
    rinaAgent.addEventListener("click", function(){
        mainAgent = "Rina"
        agentPicked.innerHTML = "You picked Rina!"
        currentAgent.innerHTML = "Current Agent: Rina"
        corinAgent.style.visibility = "hidden"
        lycaonAgent.style.visibility = "hidden"
        rinaAgent.style.visibility = "hidden"

        // open location menu
        locationMenu()
    })

})

// LOCATION BUTTON VARIABLES //
const sixthStreet = document.getElementById("sixthStreet")
const balletTwins = document.getElementById("balletTwins")
const brantStreet = document.getElementById("brantStreet")
const portElpis = document.getElementById("portElpis")
const luminaSquare = document.getElementById("luminaSquare")

// LOCATION MENU FUNCTION //
let locationCount = document.getElementById("locationCount")
let counting = 3
// check if the location was chosen
let sixthStreet_Active = true;
let balletTwins_Active = true;
let brantStreet_Active = true;
let portElpis_Active = true;
let luminaSquare_Active = true;

// clear the location menu
function clearLocationMenu() {
    sixthStreet.style.visibility = "hidden"
    balletTwins.style.visibility = "hidden"
    brantStreet.style.visibility = "hidden"
    portElpis.style.visibility = "hidden"
    luminaSquare.style.visibility = "hidden"
    instructions.style.visibility = "hidden"
    letsfindClues.style.visibility = "hidden"
    locationCount.style.visibility = "hidden"
    uhOh.style.visibility = "hidden"
    timeToPick.style.visibility = "hidden"
    agentSelect.style.visibility = "hidden"
}

function locationMenu() {
    // checking if the locations were chosen or not
    if (sixthStreet_Active === true) { // checks if the location button was not pressed
        sixthStreet.style.visibility = "visible"
    }
    if (balletTwins_Active === true) { // checks if the location button was not pressed
        balletTwins.style.visibility = "visible"
    }
    if (brantStreet_Active === true) { // checks if the location button was not pressed
        brantStreet.style.visibility = "visible"
    }
    if (portElpis_Active === true) { // checks if the location button was not pressed
        portElpis.style.visibility = "visible"
    }
    if (luminaSquare_Active === true) { // checks if the location button was not pressed
        luminaSquare.style.visibility = "visible"
    }

    // no repeating instructions
    if (counting >= 3) {
        instructions.style.visibility = "visible"
        letsfindClues.style.visibility = "visible"
    }

    // location counter
    locationCount.style.visibility = "visible"

    // display location counter with the right number
    locationCount.innerHTML = `Locations Left: ${counting} / 3`
    counting -= 1
}

// ending variables
const ending_Title = document.getElementById("ending_Title") // ending title
const ending_text = document.getElementById("ending_text") // ending text
const ending_IMG = document.getElementById("ending_IMG") // ending image
// endings function
function findEllenEndings() { // print ending function
    //console.log(mainAgent)
    //console.log("ending")
    ending_Title.style.visibility = "visible"
    ending_text.style.visibility = "visible"
    ending_IMG.style.visibility = "visible"

    // corin is default in ending
    // lycaon ending
    if (mainAgent === "Lycaon") { // show lycaon's ending
        ending_IMG.src = "backgroundImgs/endingImgs/LycaonEnding.png"
        ending_text.innerHTML = "Lycaon analyzes all of the clues and realized that he doesn't know Ellen that well even after going to all those parent conferences for her education. But remembering what was scheduled, he realized that she was doing a commission in the Brant Street Construction Site Hollow. Go into the Hollow and find her!"
    } else if (mainAgent === "Rina") { // show rina's ending
        ending_IMG.src = "backgroundImgs/endingImgs/RinaEnding.png"
        ending_text.innerHTML = "Rina analyzes all of the clues and realized that Ellen is actually at the Brant Street Construction Site! From all the interactions, it just came to her motherly instincts that she needs help!! Go into the Hollow and find her!"
    }
}

// press space bar to display ending
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        findEllenEndings()
    }
})

// go back to the location menu if the back button is pressed
const backButton = document.getElementById("backButton")

const pressSpace = document.getElementById("pressSpace") // press space message variable

// back button is pressed
backButton.addEventListener("click", function() {
    if (counting == 0) { // clear location menu and call ending function if there is not more locations left
        pressSpace.style.visibility = "visible"
        clearLocationMenu()
        //findEllenEndings()
    } else {
        locationMenu() // go back to location menu
    }
    // HIDE ALL UI LOCATIONS
    backButton.style.visibility = "hidden" // hide back button
    // clear sixth street ui
    sixthStreet_IMG.style.visibility = "hidden"
    sixthStreet_Title.style.visibility = "hidden"
    sixclue.style.visibility = "hidden"
    sixcluemsg.style.visibility = "hidden"
    // clear ballet twins ui
    balletTwins_IMG.style.visibility = "hidden"
    balletTwins_Title.style.visibility = "hidden"
    balletclue.style.visibility = "hidden"
    // clear brant street ui
    brantStreet_IMG.style.visibility = "hidden"
    brantStreet_Title.style.visibility = "hidden"
    brantclue1.style.visibility = "hidden"
    brantclue2.style.visibility = "hidden"
    // clear port elpis ui
    portElpis_IMG.style.visibility = "hidden"
    portElpis_Title.style.visibility = "hidden"
    portclue1.style.visibility = "hidden"
    portclue2.style.visibility = "hidden"
    // clear lumina square ui
    luminaSquare_IMG.style.visibility = "hidden"
    luminaSquare_Title.style.visibility = "hidden"
    luminaclue.style.visibility = "hidden"
})

// making each story node/scenes

const sixcluemsg = document.getElementById("sixcluemsg") // MAIN DIALOGUE/MESSAGEBOX

// sixth street assets
const sixthStreet_IMG = document.getElementById("sixthStreet_IMG")
const sixthStreet_Title = document.getElementById("sixthStreet_Title")
const sixclue = document.getElementById("sixclue")
sixthStreet.addEventListener("click", function(){ // if sixth street location button is pressed
    clearLocationMenu()
    sixthStreet_IMG.style.visibility = "visible"
    sixthStreet_Title.style.visibility = "visible"
    sixclue.style.visibility = "visible"
    backButton.style.visibility = "visible"
    sixthStreet_Active = false;
})


sixclue.addEventListener("click", function(){ // if location's clue is pressed
    sixcluemsg.style.visibility = "visible"

    // checks which agent is active and pulls the dialogue for that specific character
    if (mainAgent === "Corin") { // if current agent is corin
        sixcluemsg.innerHTML = `"Uhhhh.. Mr. Lycaon, can I get noodles to eat?"<br>
        "Sure Corin, buy one to-go for Ellen. She must be hungry while she has been out."<br>
        "Okay!"<br>
        "Here Mr. Lycaon! I told the Shop Owner to pick a random dish."<br>
        "Oh let me see it."<br>
        [Shark Fin Soup]`
        clue = "Shark Fin Soup";
        addtoclueList.push(clue)
        refreshClues()
        sixclue.remove()
    } else if (mainAgent === "Lycaon") { // if current agent is lycaon
        sixcluemsg.innerHTML = `"Maybe Ellen would come out if we brought some candy for her. She can probably sniff it a mile away!"<br>
"Mr. Lycaon.. I think Ellen is a shark not a dog like you.."<br>
"Let's try something else then, maybe fish bait?"`
        clue = "Lollipop";
        addtoclueList.push(clue)
        refreshClues()
        sixclue.remove()
    } else if (mainAgent === "Rina") { // if current agent is rina
        sixcluemsg.innerHTML = `"Excuse me kind man. Have you seen this short highschool girl, hair short, personality that's just as feisty as a shark, does have a big shark tail, and has a large shark styled scissor? I'll repay you if you tell me all you know..."<br>
"Uhhh.. I haven't seen any person with that description and I don't think you should be finding her.. creep. Ahhh get out of my space!"<br>
*Man runs away*<br>
"Aww looks like she really wasn't here. A timid man like that isn't Ellen's type. Let's go."`
        clue = "Timid man";
        addtoclueList.push(clue)
        refreshClues()
        sixclue.remove()
    }
})

// ballet twins assets
const balletTwins_IMG = document.getElementById("balletTwins_IMG")
const balletTwins_Title = document.getElementById("balletTwins_Title")
const balletclue = document.getElementById("balletclue")
balletTwins.addEventListener("click", function(){ // if ballet twins location button is pressed
    clearLocationMenu()
    balletTwins_IMG.style.visibility = "visible"
    balletTwins_Title.style.visibility = "visible"
    balletclue.style.visibility = "visible"
    backButton.style.visibility = "visible"
    balletTwins_Active = false;
})

balletclue.addEventListener("click", function(){ // if location's clue is pressed
    sixcluemsg.style.visibility = "visible"

    // checks which agent is active and pulls the dialogue for that specific character
    if (mainAgent === "Corin") { // if current agent is corin
        sixcluemsg.innerHTML = `"Oh Ellen, where areee you?"<br>
"Oh what's this? This must be some torn clothing from her skirt! She must be close by!"`
        clue = "Cloth";
        addtoclueList.push(clue)
        refreshClues()
        balletclue.remove()
    } else if (mainAgent === "Lycaon") { // if current agent is lycaon
        sixcluemsg.innerHTML = `"Ellen always sleep on the job.. why would she come here, Lycaon?"<br>
"I just thought she would clean up the place like I told her to. I guess not.."`
        clue = "Pillow";
        addtoclueList.push(clue)
        refreshClues()
        balletclue.remove()
    } else if (mainAgent === "Rina") { // if current agent is rina
        sixcluemsg.innerHTML = `"Hmm, I wonder if she slept too long and stayed here..."<br>
"Gahhh! Oh! It's just you Corin! I thought you were an ethereal!"<br>
"Do I look that awful?"<br>
"No no, it's fine. I just think you'll have a successful career in the circus. Hah!"`
        clue = "Ethereal";
        addtoclueList.push(clue)
        refreshClues()
        balletclue.remove()
    }
})

// brant street assets
const brantStreet_IMG = document.getElementById("brantStreet_IMG")
const brantStreet_Title = document.getElementById("brantStreet_Title")
const brantclue1 = document.getElementById("brantclue1")
const brantclue2 = document.getElementById("brantclue2")
brantStreet.addEventListener("click", function(){ // if brant street location button is pressed
    clearLocationMenu()
    brantStreet_IMG.style.visibility = "visible"
    brantStreet_Title.style.visibility = "visible"
    brantclue1.style.visibility = "visible"
    brantclue2.style.visibility = "visible"
    backButton.style.visibility = "visible"
    brantStreet_Active = false;
})


brantclue1.addEventListener("click", function(){ // if location's clue is pressed
    sixcluemsg.style.visibility = "visible"
    
    // checks which agent is active and pulls the dialogue for that specific character
    if (mainAgent === "Corin") { // if current agent is corin
        sixcluemsg.innerHTML = `"With a noisy place like this, would Ellen even want to be here? She usually loves her quiet spaces"`
        clue = "Headphones";
        addtoclueList.push(clue)
        refreshClues()
        brantclue1.remove()
    } else if (mainAgent === "Lycaon") { // if current agent is lycaon
        sixcluemsg.innerHTML = `"This place is always so dirty, I'll give it a good clean."<br>
*Cleans to the point that even the ground is sparkling*<br>
"Lycaon.. I think we are missing the point here."`
        clue = "Spray Bottle";
        addtoclueList.push(clue)
        refreshClues()
        brantclue1.remove()
    } else if (mainAgent === "Rina") { // if current agent is rina
        sixcluemsg.innerHTML = `"Wow, these construction workers work all day?"<br>
"Yes, they do."<br>
"Hey there. Take my new recipe, fish pie!!"<br>
"Uhhh, excuse me, I'm guessing your with... her. Do you know what that is?"<br>
"I apologize for her.. unprofessionalism. Rina, I think we should look somewhere else.."`
        clue = "Fish pie";
        addtoclueList.push(clue)
        refreshClues()
        brantclue1.remove()
    }
})
brantclue2.addEventListener("click", function(){ // if location's clue is pressed
    sixcluemsg.style.visibility = "visible"
    
    // checks which agent is active and pulls the dialogue for that specific character
    if (mainAgent === "Corin") { // if current agent is corin
        sixcluemsg.innerHTML = `"没有预演的人生 但"<br>
"SHUT UP, WHY ARE YOU SINGING IN CATONESE CORIN?!"<br>
"oh-uh sorry!!! It's Ellen's favorite Astra Yao song.<br>
Y'know, she's a big fan, maybe she would follow the music!"<br>
"That's the dumbest idea I've ever heard. sing with a softer voice moving forward please."`
        clue = "Microphone";
        addtoclueList.push(clue)
        refreshClues()
        brantclue2.remove()
    } else if (mainAgent === "Lycaon") { // if current agent is lycaon
        sixcluemsg.innerHTML = `"Since we are here at the site, I have prepared a few items."<br>
"Mr. Lycaon.. Are these really necessary?"<br>
"Yes, Corin. They are necessary"<br>
"[Cleaning Supplies]"`
        clue = "Cleaning Supplies";
        addtoclueList.push(clue)
        refreshClues()
        brantclue2.remove()
    } else if (mainAgent === "Rina") { // if current agent is rina
        sixcluemsg.innerHTML = `"Ugh the noise and this confusing layout, I don't believe she'll be here."<br>
"Oh and who is this hunk of a guy. What's your name?"<br>
"Uhhh, ben?"<br>
"Ben... Ben... huh. Yea okay see ya. Corin, Lycaon, let's move another place for more clues."`
        clue = "Ben";
        addtoclueList.push(clue)
        refreshClues()
        brantclue2.remove()
    }
})

// port elpis assets
const portElpis_IMG = document.getElementById("portElpis_IMG")
const portElpis_Title = document.getElementById("portElpis_Title")
const portclue1 = document.getElementById("portclue1")
const portclue2 = document.getElementById("portclue2")
portElpis.addEventListener("click", function(){ // if port elpis location button is pressed
    clearLocationMenu()
    portElpis_IMG.style.visibility = "visible"
    portElpis_Title.style.visibility = "visible"
    portclue1.style.visibility = "visible"
    portclue2.style.visibility = "visible"
    backButton.style.visibility = "visible"
    portElpis_Active = false;
})


portclue1.addEventListener("click", function(){ // if location's clue is pressed
    sixcluemsg.style.visibility = "visible"
    
    // checks which agent is active and pulls the dialogue for that specific character
    if (mainAgent === "Corin") { // if current agent is corin
        sixcluemsg.innerHTML = `"Look at that bucket! There's so much dead fish..."<br>
"Let's hope Ellen isn't one of the dead fish today"<br>
"Corin, this is not the time to crack jokes!"<br>
"Sorry!"`
        clue = "Bucket";
        addtoclueList.push(clue)
        refreshClues()
        portclue1.remove()
    } else if (mainAgent === "Lycaon") { // if current agent is lycaon
        sixcluemsg.innerHTML = `"Catching fish? Eating fish? I don't get the hype around it."<br>
*Pulls out with his bare paws and eats it"<br>
"Oh Lycaon, please do that again so I can use fish for my latest recipe, fish pie!!"`
        clue = "Fish";
        addtoclueList.push(clue)
        refreshClues()
        portclue1.remove()
    } else if (mainAgent === "Rina") { // if current agent is rina
        sixcluemsg.innerHTML = `"Hmm though I would love to look for Ellen anywhere, let's keep our stay here quick. The smell of this port is going to stink my outfit and it will be a shame. It already stinks if I stay near Ellen all day. I mean, she is a fish!"<br>
"Rina, this is not the time to make rude comments of Ellen. We are here to look for her"<br>
"Oohhh okay. I'll just stand 50 feet away from the port and you two can look for clues."`
        clue = "Smelly outfit";
        addtoclueList.push(clue)
        refreshClues()
        portclue1.remove()
    }
})
portclue2.addEventListener("click", function(){ // if location's clue is pressed
    sixcluemsg.style.visibility = "visible"
    
    // checks which agent is active and pulls the dialogue for that specific character
    if (mainAgent === "Corin") { // if current agent is corin
        sixcluemsg.innerHTML = `"ohhhh Ellen, where are you... *GASP* ELLEN SHE'S IN THE WATER! MR. LYCAON"<br>
"I'm on it!"<br>
*Lycaon swims down to the water. After a few secs*<br>
"Corin, have you considered getting prescription glasses? This isn't Ellen. This is a seal."<br>
"oh, ha ha, sorry..."`
        clue = "Prescription Glasses";
        addtoclueList.push(clue)
        refreshClues()
        portclue2.remove()
    } else if (mainAgent === "Lycaon") { // if current agent is lycaon
        sixcluemsg.innerHTML = `"Mr. Lycaon, I think I see Ellen at the top of the lighthouse!"<br>
"Corin, you might be right. That must be her!"<br>
"Oh, its just you Rina."<br>
"Do I look like a highschool girl?!"`
        clue = "Light bulb";
        addtoclueList.push(clue)
        refreshClues()
        portclue2.remove()
    } else if (mainAgent === "Rina") { // if current agent is rina
        sixcluemsg.innerHTML = `"Rina, come join us and help find clues."<br>
"Nope, not moving any more forward. I might get splashed by water!"<br>
Wave of water splash the side of the port and sprayed over Rina.<br>
"....aaaaagggggGGAHGGAGHHHHHHHH"`
        clue = "Salt water";
        addtoclueList.push(clue)
        refreshClues()
        portclue2.remove()
    }
})

// lumina square assets
const luminaSquare_IMG = document.getElementById("luminaSquare_IMG")
const luminaSquare_Title = document.getElementById("luminaSquare_Title")
const luminaclue = document.getElementById("luminaclue")
luminaSquare.addEventListener("click", function(){ // if lumina square location button is pressed
    clearLocationMenu()
    luminaSquare_IMG.style.visibility = "visible"
    luminaSquare_Title.style.visibility = "visible"
    luminaclue.style.visibility = "visible"
    backButton.style.visibility = "visible"
    luminaSquare_Active = false;
})


luminaclue.addEventListener("click", function(){ // if location's clue is pressed
    sixcluemsg.style.visibility = "visible"
    // checks which agent is active and pulls the dialogue for that specific character
    if (mainAgent === "Corin") { // if current agent is corin
        sixcluemsg.innerHTML = `"Hmm, Ellen usually goes here to watch movies with her friends."<br>
"What movie is airing today"<br>
"Jaws."<br>
"Yeah I don't think she's watching a movie right now."`
        clue = "Movie Ticket";
        addtoclueList.push(clue)
        refreshClues()
        luminaclue.remove()
    } else if (mainAgent === "Lycaon") { // if current agent is lycaon
        sixcluemsg.innerHTML = `"Ellen loves bringing back teamilk to our commissions."<br>
"She does but she loves my fish pie more!!"`
        clue = "Teamilk";
        addtoclueList.push(clue)
        refreshClues()
        luminaclue.remove()
    } else if (mainAgent === "Rina") { // if current agent is rina
        sixcluemsg.innerHTML = `"Hmm.. I wonder why many are staring at me? Corin, do you know?"<br>
"Well uhm you are floating above the ground. And other various things..."<br>
"Oh! haha thank you Corin for telling me!" `
        clue = "Floating ability";
        addtoclueList.push(clue)
        refreshClues()
        luminaclue.remove()
    }
})

// LOCATION MENU AGAIN TO ENSURE THERE ARE NO ERRORS //
function locationMenu() {
    // checking if the locations were chosen or not
    if (sixthStreet_Active === true) { // checks if the location button was not pressed
        sixthStreet.style.visibility = "visible"
    }
    if (balletTwins_Active === true) { // checks if the location button was not pressed
        balletTwins.style.visibility = "visible"
    }
    if (brantStreet_Active === true) { // checks if the location button was not pressed
        brantStreet.style.visibility = "visible"
    }
    if (portElpis_Active === true) { // checks if the location button was not pressed
        portElpis.style.visibility = "visible"
    }
    if (luminaSquare_Active === true) { // checks if the location button was not pressed
        luminaSquare.style.visibility = "visible"
    }

    // no repeating instructions
    if (counting >= 3) {
        instructions.style.visibility = "visible"
        letsfindClues.style.visibility = "visible"
    }

    // location counter
    locationCount.style.visibility = "visible"

    // display location counter with the right number
    locationCount.innerHTML = `Locations Left: ${counting} / 3`
    counting -= 1
}