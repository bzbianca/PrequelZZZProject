// click on images to switch through the character introductions

const corinButton = document.getElementById("selectCorin");
const lycaonButton = document.getElementById("selectLycaon");
const ellenButton = document.getElementById("selectEllen");
const rinaButton = document.getElementById("selectRina");

const starterIntro = document.getElementById("introChars"); // intro starts with Corin

// All character descriptions in variables
const corinDesc = "A shy and timid girl who is very soft-spoken. Whenever there is a need to speak up and talk to strangers, she stutters and no one can hear anything she says. However, when she is around her friends like Ellen or Rina, she is a kind and lovable person who cares about her friends well-being.";
const lycaonDesc = "A tall wolf man who stands higher than 7 feet. He is the epitome of Lone Wolf, minus the lonely and rough personality. When you need assistance, he and his company will come to you and serve quickly and efficiently. He doesn't get his work and life tied and will be professional in anyway during work. Though it's hard to keep professional with the loving companions he has while working.";
const ellenDesc = "A shark girl who is in highschool. During work, she is mostly tired and sleepy due to the endless and draining hours of school. When she has no school or work, you will see her anywhere there is something fun to do. Lumina square to shop or Sixth Street to rent a new movie. Try not to get on her bad side, or she will bite!";
const rinaDesc = "A very calm ghost woman. Her personality doesn't match well with most as she doesn't understand personal boundaries. Other than that, she will serve you with food and drinks with love and cares for her customers and companions very well.";


// Event listeners that checks which button is clicked
corinButton.addEventListener("click", function(){
    starterIntro.src = "backgroundImgs/introImgs/1selectedCorin.jpeg";
    document.getElementById("descIntro").innerHTML = corinDesc;
})

lycaonButton.addEventListener("click", function(){
    starterIntro.src = "backgroundImgs/introImgs/2selectedLycaon.jpeg";
    document.getElementById("descIntro").innerHTML = lycaonDesc;
})

ellenButton.addEventListener("click", function(){
    starterIntro.src = "backgroundImgs/introImgs/3selectedEllen.jpeg";
    document.getElementById("descIntro").innerHTML = ellenDesc;
})

rinaButton.addEventListener("click", function(){
    starterIntro.src = "backgroundImgs/introImgs/4selectedRina.jpeg";
    document.getElementById("descIntro").innerHTML = rinaDesc;
})

/////////////// AGENT SELECTION

const agentSelectButton = document.getElementById("agentSelect");
let mainAgent; // declare main agent variable, will store main character

let corinAgent = document.getElementById("corinAgent"); // Corin's agent button
let lycaonAgent = document.getElementById("lycaonAgent"); // Lycaon's agent button
let rinaAgent = document.getElementById("rinaAgent"); // Rina's agent button

////////////////////// VARIABLE MAKING FOR AGENT SELECTION & MAIN STORY//////////////////////

// message ids into variables
let uhOh = document.getElementById("uhOh")
let instructions = document.getElementById("instructions")
let letsfindClues = document.getElementById("letsfindClues")


// agent selection process button press

agentSelectButton.addEventListener("click", function(){
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
}

function locationMenu() {
    // checking if the locations were chosen or not
    if (sixthStreet_Active === true) {
        sixthStreet.style.visibility = "visible"
    }
    if (balletTwins_Active === true) {
        balletTwins.style.visibility = "visible"
    }
    if (brantStreet_Active === true) {
        brantStreet.style.visibility = "visible"
    }
    if (portElpis_Active === true) {
        portElpis.style.visibility = "visible"
    }
    if (luminaSquare_Active === true) {
        luminaSquare.style.visibility = "visible"
    }

    // no repeating instructions
    if (counting >= 3) {
        instructions.style.visibility = "visible"
        letsfindClues.style.visibility = "visible"
    }

    // location counter
    locationCount.style.visibility = "visible"

    locationCount.innerHTML = `Locations Left: ${counting} / 3`
    //console.log(locationCount)
    counting -= 1
    //console.log(counting)
}



// go back to the location menu if the back button is pressed
const backButton = document.getElementById("backButton")

const groupSixth = document.getElementsByClassName("groupSixth")

backButton.addEventListener("click", function() {
    if (counting == 0) {
        clearLocationMenu()
    } else {
        locationMenu()
    }
    // HIDE ALL UI LOCATIONS
    backButton.style.visibility = "hidden" // hide back button
    //sixth street
    sixthStreet_IMG.style.visibility = "hidden"
    sixthStreet_Title.style.visibility = "hidden"
    sixclue.style.visibility = "hidden"
    sixcluemsg.style.visibility = "hidden"
    sixcluemsg.innerHTML = "Sixth Street"
    //ballet twins
    balletTwins_IMG.style.visibility = "hidden"
    balletTwins_Title.style.visibility = "hidden"
    balletclue.style.visibility = "hidden"
    balletcluemsg.style.visibility = "hidden"
    //brant street construction
    brantStreet_IMG.style.visibility = "hidden"
    brantStreet_Title.style.visibility = "hidden"
    brantclue1.style.visibility = "hidden"
    brantclue2.style.visibility = "hidden"
    brantcluemsg1.style.visibility = "hidden"
    brantcluemsg2.style.visibility = "hidden"
    //port elpis
    portElpis_IMG.style.visibility = "hidden"
    portElpis_Title.style.visibility = "hidden"
    portclue1.style.visibility = "hidden"
    portclue2.style.visibility = "hidden"
    portcluemsg1.style.visibility = "hidden"
    portcluemsg2.style.visibility = "hidden"
    //lumina square
    luminaSquare_IMG.style.visibility = "hidden"
    luminaSquare_Title.style.visibility = "hidden"
    luminaclue.style.visibility = "hidden"
    luminacluemsg.style.visibility = "hidden"
})

// making each story node/scenes

// sixth street
const sixthStreet_IMG = document.getElementById("sixthStreet_IMG")
const sixthStreet_Title = document.getElementById("sixthStreet_Title")
const sixclue = document.getElementById("sixclue")
sixthStreet.addEventListener("click", function(){
    clearLocationMenu()
    sixthStreet_IMG.style.visibility = "visible"
    sixthStreet_Title.style.visibility = "visible"
    sixclue.style.visibility = "visible"
    backButton.style.visibility = "visible"
    sixthStreet_Active = false;
})

const sixcluemsg = document.getElementById("sixcluemsg")
sixclue.addEventListener("click", function(){
    sixcluemsg.style.visibility = "visible"

    // checks which agent is active and pulls the dialogue for that specific character
    if (mainAgent === "Corin") {
        //sixcluemsg.style.transform = "translate(0% , -300%)"
        sixcluemsg.innerHTML = `"Urhhhh. Mr. Lycaon, can I get noodles to eat?"<br>
        "Sure Corin, buy one for To-Go for Ellen. She must be hungry while she has been out."<br>
        "Okay!"<br>
        "Here Mr. Lycaon! I told the Shop Owner to pick a random dish."<br>
        "Oh let me see it."<br>
        [Shark Fin Soup]`
    }
})

// ballet twins
const balletTwins_IMG = document.getElementById("balletTwins_IMG")
const balletTwins_Title = document.getElementById("balletTwins_Title")
const balletclue = document.getElementById("balletclue")
balletTwins.addEventListener("click", function(){
    clearLocationMenu()
    balletTwins_IMG.style.visibility = "visible"
    balletTwins_Title.style.visibility = "visible"
    balletclue.style.visibility = "visible"
    backButton.style.visibility = "visible"
    balletTwins_Active = false;
})

const balletcluemsg = document.getElementById("balletcluemsg")
balletclue.addEventListener("click", function(){
    sixcluemsg.style.visibility = "visible"

    // checks which agent is active and pulls the dialogue for that specific character
    if (mainAgent === "Corin") {
        //sixcluemsg.style.transform = "translate(0% , -300%)"
        sixcluemsg.innerHTML = `"Oh Ellen, where areee you?"<br>
"Oh what's this? This must be some torn clothing from her skirt! She must be close by!"`
    }
})

// brant street
const brantStreet_IMG = document.getElementById("brantStreet_IMG")
const brantStreet_Title = document.getElementById("brantStreet_Title")
const brantclue1 = document.getElementById("brantclue1")
const brantclue2 = document.getElementById("brantclue2")
brantStreet.addEventListener("click", function(){
    clearLocationMenu()
    brantStreet_IMG.style.visibility = "visible"
    brantStreet_Title.style.visibility = "visible"
    brantclue1.style.visibility = "visible"
    brantclue2.style.visibility = "visible"
    backButton.style.visibility = "visible"
    brantStreet_Active = false;
})

const brantcluemsg1 = document.getElementById("brantcluemsg1")
const brantcluemsg2 = document.getElementById("brantcluemsg2")
brantclue1.addEventListener("click", function(){
    sixcluemsg.style.visibility = "visible"
    
    // checks which agent is active and pulls the dialogue for that specific character
    if (mainAgent === "Corin") {
        //sixcluemsg.style.transform = "translate(0% , -300%)"
        sixcluemsg.innerHTML = `"With a noisy place like this, would Ellen even want to be here? She usually loves her quiet spaces"`
    }
})
brantclue2.addEventListener("click", function(){
    sixcluemsg.style.visibility = "visible"
    
    // checks which agent is active and pulls the dialogue for that specific character
    if (mainAgent === "Corin") {
        //sixcluemsg.style.transform = "translate(0% , -300%)"
        sixcluemsg.innerHTML = `"再不会让 承诺被敷衍"<br>
"不让真心被曲解"<br>
"没有预演的人生 但"<br>
"每一步 我有决定权"<br>
"让瑕疵被发现"<br>
"让美丽 被真实复原"<br>
"我所了解的我 还没被了解"<br>
"SHUT UP, WHY ARE YOU SINGING IN CATONESE CORIN?!"<br>
"oh-uh sorry!!! It's Ellen's favorite Astra Yao song. Y'know, she's a big fan, maybe she would follow the music!"<br>
"That's the dumbest idea I've ever heard. sing with a softer voice moving forward please."`
    }
})

//port elpis
const portElpis_IMG = document.getElementById("portElpis_IMG")
const portElpis_Title = document.getElementById("portElpis_Title")
const portclue1 = document.getElementById("portclue1")
const portclue2 = document.getElementById("portclue2")
portElpis.addEventListener("click", function(){
    clearLocationMenu()
    portElpis_IMG.style.visibility = "visible"
    portElpis_Title.style.visibility = "visible"
    portclue1.style.visibility = "visible"
    portclue2.style.visibility = "visible"
    backButton.style.visibility = "visible"
    portElpis_Active = false;
})

const portcluemsg1 = document.getElementById("portcluemsg1")
const portcluemsg2 = document.getElementById("portcluemsg2")
portclue1.addEventListener("click", function(){
    sixcluemsg.style.visibility = "visible"
    
    // checks which agent is active and pulls the dialogue for that specific character
    if (mainAgent === "Corin") {
        //sixcluemsg.style.transform = "translate(0% , -300%)"
        sixcluemsg.innerHTML = `"Look at that bucket! There's so much dead fish..."<br>
"Let's hope Ellen isn't one of the dead fish today"<br>
"Corin, this is not the time to crack jokes!"<br>
"Sorry!"`
    }
})
portclue2.addEventListener("click", function(){
    sixcluemsg.style.visibility = "visible"
    
    // checks which agent is active and pulls the dialogue for that specific character
    if (mainAgent === "Corin") {
        //sixcluemsg.style.transform = "translate(0% , -300%)"
        sixcluemsg.innerHTML = `"ohhhh Ellen, where are you... *GASP* ELLEN SHE'S IN THE WATER! MR. LYCAON"<br>
"I'm on it!"<br>
*Lycaon swims down to the water. After a few secs*<br>
"Corin, have you considered getting prescription glasses? This isn't Ellen. This is a seal."<br>
"oh, ha ha, sorry..."`
    }
})

// luminasquare
const luminaSquare_IMG = document.getElementById("luminaSquare_IMG")
const luminaSquare_Title = document.getElementById("luminaSquare_Title")
const luminaclue = document.getElementById("luminaclue")
luminaSquare.addEventListener("click", function(){
    clearLocationMenu()
    luminaSquare_IMG.style.visibility = "visible"
    luminaSquare_Title.style.visibility = "visible"
    luminaclue.style.visibility = "visible"
    backButton.style.visibility = "visible"
    luminaSquare_Active = false;
})

const luminacluemsg = document.getElementById("luminacluemsg")
luminaclue.addEventListener("click", function(){
    sixcluemsg.style.visibility = "visible"
    // checks which agent is active and pulls the dialogue for that specific character
    if (mainAgent === "Corin") {
        //sixcluemsg.style.transform = "translate(0% , -300%)"
        sixcluemsg.innerHTML = `"Hmm, Ellen usually goes here to watch movies with her friends."<br>
"What movie is airing today"<br>
"Jaws."<br>
"Yeah I don't think she's watching a movie right now."`
    }
})

// LOCATION MENU AGAIN TO ENSURE THERE ARE NO ERRORS //
function locationMenu() {
    // checking if the locations were chosen or not
    if (sixthStreet_Active === true) {
        sixthStreet.style.visibility = "visible"
    }
    if (balletTwins_Active === true) {
        balletTwins.style.visibility = "visible"
    }
    if (brantStreet_Active === true) {
        brantStreet.style.visibility = "visible"
    }
    if (portElpis_Active === true) {
        portElpis.style.visibility = "visible"
    }
    if (luminaSquare_Active === true) {
        luminaSquare.style.visibility = "visible"
    }

    // no repeating instructions
    if (counting >= 3) {
         instructions.style.visibility = "visible"
         letsfindClues.style.visibility = "visible"
    }

    // location counter
    locationCount.style.visibility = "visible"

    locationCount.innerHTML = `Locations Left: ${counting} / 3`
    //console.log(locationCount)
    counting -= 1
    //console.log(counting)
}