let span = document.querySelector(".control-button span");
let name = document.querySelector(".info-container .name");
span.onclick = function () {
  let yourName = prompt("Whats your name");
  if (yourName == null || yourName == "") {
    document.querySelector(".info-container .name span").innerHTML = "UnKnown";
  } else {
    document.querySelector(".info-container .name span").innerHTML = yourName;
  }
  document.querySelector(".control-button ").remove();
};

let duration = 1000;
let blockContainer = document.querySelector(".memory-game-block");
// I need all the elements inside this block
// to collect in my opinion so that I can deal with them
let blocks = Array.from(blockContainer.children);
//blocks.length ==>20
// blocks.length.keys()==>from 0 to 19
// I want to see 20 elements in it. These elements start from 0 to 19
let orderRange = Array.from(Array(blocks.length).keys());
shuffle(orderRange);
// add order css property to  game Blocks
// make for loop on blocks that contain mor than==> block
// and make loop on its index
blocks.forEach((block, index) => {
  // I made the blocks go in the same order as the index
  block.style.order = orderRange[index];
  //add click event
  block.addEventListener("click", function () {
    //trigger flip function
    //  every block that is click on will enter into flipped function
    flipped(block);
  });
});

// make shuffle function (In order to make the orderRange function not go in order)
//take array and mix its element then return new array
function shuffle(array) {
  // setting variables
  let current = array.length,
    temp,
    random;
  while (current > 0) {
    //get random num
    random = Math.floor(Math.random() * current);
    //decrease length by one
    current--;
    // three steps like swap:
    // [1]Save current element in stach
    temp = array[current];
    // [2]Current element = Random element
    array[current] = array[random];
    // [3]Random element = get element from stach
    array[random] = temp;
  }
  return array;
}
// Function When I click on a specific block add fliped class to it
function flipped(selectedBlock) {
  selectedBlock.classList.add("is-flipped");

  //collect all fliped cards
  let allFlipedBlocs = blocks.filter((filppedblock) =>
    filppedblock.classList.contains("is-flipped")
  );

  //if there is two selected blocks
  if (allFlipedBlocs.length === 2) {
    // If he opens two, make a mistake that he cannot open the third
    //stop clicking function
    stopClicking();
  }
  //match blocs function
  // firstBlock = allFlipedBlocs[0]
  // SecondBlock = allFlipedBlocs[1]
  checkMatchedBlock(allFlipedBlocs[0], allFlipedBlocs[1]);
}
//stop clicking function
function stopClicking() {
  //add class no clicking on main container
  blockContainer.classList.add("no-clicking");
  //set time out
  setTimeout(() => {
    // after duration(1000s) remove no-clicking class
    blockContainer.classList.remove("no-clicking");
  }, duration);
}
//match blocs function
function checkMatchedBlock(firstBlock, SecondBlock) {
  let tries = document.querySelector(".info-container .tries span");
  if (firstBlock.dataset.techology === SecondBlock.dataset.techology) {
    firstBlock.classList.remove("is-flipped");
    SecondBlock.classList.remove("is-flipped");
    firstBlock.classList.add("has-match");
    SecondBlock.classList.add("has-match");
    document.getElementById("success").play();
  } else {
    tries.innerHTML = parseInt(tries.innerHTML) + 1;
    // put it in Settimet to remove is-flipped after duration
    setTimeout(() => {
      firstBlock.classList.remove("is-flipped");
      SecondBlock.classList.remove("is-flipped");
    }, duration);
    document.getElementById("fail").play();
  }
}
