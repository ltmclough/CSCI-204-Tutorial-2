//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];

}
//2. RAW TEXT STRINGS
let storyText = "It was 94 fahrenheit outside, so :insertX: went for " +
"a walk. When they got to :insertY:, they stared in horror for a few " +
"moments, then :insertZ:. Bob saw the whole thing, but was not " +
"surprised — :insertX: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {

    newStory = storyText;
    xItem = randomValueFromArray(insertX);
    yItem = randomValueFromArray(insertY);
    zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertX:",xItem);
    newStory = newStory.replaceAll(":insertY:",yItem);
    newStory = newStory.replaceAll(":insertZ:",zItem);

  if(customName.value !== 'Bob') {
    const name = customName.value;

  }
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    const temperature =  Math.round((94-32)*(5/9));
    newStory = newStory.replaceAll("300",weight);
    newStory = newStory.replaceAll("pounds","stone");
    newStory = newStory.replaceAll("94",temperature);
    newStory = newStory.replaceAll("fahrenheit","centigrade");

  }
  story.textContent = newStory;
  story.style.visibility = 'visible';

}