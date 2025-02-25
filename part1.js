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

// agent selection

const agentSelectButton = document.getElementById("agentSelect");

agentSelectButton.addEventListener("click", function(){
    agentSelectButton.style = "display: none;";
})