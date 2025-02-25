//Making new buttons
//let newButton = document.createElement('button')
//newButton.id = 'but4' //create id
//newButton.innerHTML = 'Choice 4' //text inside
//document.body.appendChild(newButton) //add it into html

// Removing buttons
//let rem = document.getElementById('but1') //makes variable
//rem.remove() //removes it


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

// agent select


const agentSelectButton = document.getElementById("agentSelect");
const descBox = document.getElementById("descIntro");

agentSelectButton.addEventListener("click", function(){
    agentSelectButton.style = "display: none;";
    document.getElementById("uhOh").innerHTML = "That's weird Ellen isn't on here? Let's pick a character first then we'll go and find out where she is."

    let agentCorin = document.createElement("button");
    agentCorin.classList.add("agentButtons");
    agentCorin.id = "corinAgent"
    let agentCorinImg = document.createElement("img")
    agentCorinImg.src = "characterImgs/Agent_Corin_Wickes_Icon.png"
    agentCorin.appendChild(agentCorinImg)
    //document.getElementById('agentSelection').appendChild(agentCorin)
    document.body.appendChild(agentCorin)

    let agentLycaon = document.createElement("button");
    agentLycaon.classList.add("agentButtons");
    agentLycaon.id = "lycaonAgent"
    let agentLycaonImg = document.createElement("img")
    agentLycaonImg.src = "characterImgs/Agent_Von_Lycaon_Icon.png"
    agentLycaon.appendChild(agentLycaonImg)
    //document.getElementById('agentSelection').appendChild(agentLycaon)
    document.body.appendChild(agentLycaon)


    let agentRina = document.createElement("button");
    agentRina.classList.add("agentButtons");
    agentRina.id = "rinaAgent"
    let agentRinaImg = document.createElement("img")
    agentRinaImg.src = "characterImgs/Agent_Alexandrina_Sebastiane_Icon.png"
    agentRina.appendChild(agentRinaImg)
    //document.getElementById('agentSelection').appendChild(agentRina)
    document.body.appendChild(agentRina)

    let picked = document.getElementById("youPicked");

    agentCorin.addEventListener("click", function(){
        // remove agent selection buttons
        agentCorin.remove()
        agentLycaon.remove()
        agentRina.remove()
        // create a new button to confirm and go to the next node
        let agentconfirmCorin = document.createElement("button");
        agentconfirmCorin.classList.add("agentButtons");
        agentconfirmCorin.id = "corinAgent"
        let agentCorinImg = document.createElement("img")
        agentCorinImg.src = "characterImgs/Agent_Corin_Wickes_Icon.png"
        agentconfirmCorin.appendChild(agentCorinImg)
        document.body.appendChild(agentconfirmCorin)
        agentconfirmCorin.style = "transform: translate(260%, -10%);";
        // prompt to click again to continue on
        picked.innerHTML = "You picked Corin! Click Corin again to continue on."
})

    agentLycaon.addEventListener("click", function(){
        // remove agent selection buttons
        agentCorin.remove()
        agentLycaon.remove()
        agentRina.remove()
        // create a new button to confirm and go to the next node
        let agentconfirmLycaon = document.createElement("button");
        agentconfirmLycaon.classList.add("agentButtons");
        agentconfirmLycaon.id = "lycaonAgent"
        let agentLycaonImg = document.createElement("img")
        agentLycaonImg.src = "characterImgs/Agent_Von_Lycaon_Icon.png"
        agentconfirmLycaon.appendChild(agentLycaonImg)
        document.body.appendChild(agentconfirmLycaon)
        agentconfirmLycaon.style = "transform: translate(260%, -10%);";
        // prompt to click again to continue on
        picked.innerHTML = "You picked Lycaon! Click Lycaon again to continue on."
})
    
    agentRina.addEventListener("click", function(){
        // remove agent selection buttons
        agentCorin.remove()
        agentLycaon.remove()
        agentRina.remove()
        // create a new button to confirm and go to the next node
        let agentconfirmRina = document.createElement("button");
        agentconfirmRina.classList.add("agentButtons");
        agentconfirmRina.id = "rinaAgent"
        let agentRinaImg = document.createElement("img")
        agentRinaImg.src = "characterImgs/Agent_Alexandrina_Sebastiane_Icon.png"
        agentconfirmRina.appendChild(agentRinaImg)
        document.body.appendChild(agentconfirmRina)
        agentconfirmRina.style = "transform: translate(260%, -10%);";
        // prompt to click again to continue on
        picked.innerHTML = "You picked Rina! Click Rina again to continue on."
    })
})

// agentconfirmRina.addEventListener("click", function() {
    
// })
