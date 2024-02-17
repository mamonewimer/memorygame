document.querySelector(".control-buttons span").onclick = function(){

    let yourName= prompt("Whats Your Name?")

    if(yourName == null || yourName == ""){

document.querySelector(".name span").innerHTML = 'Unknown'

    }else {

        document.querySelector(".name span").innerHTML = yourName

    }

    document.querySelector(".control-buttons").remove()

}

let duration = 1000


let blocksContainer = document.querySelector(".memory-game-blocks")

let blocks = Array.from(blocksContainer.children)

let orderRange = Array.from(Array(blocks.length).keys())
// console.log(orderRange)
shuffle(orderRange);
// console.log(orderRange)

blocks.forEach((block, index) => {

    block.style.order = orderRange[index]

    block.addEventListener('click', function(){
        flipBlock(block)
    })
})

function flipBlock(selectedBlock){
    selectedBlock.classList.add('is-flipped')

    let allFlippedBlocks= blocks.filter(FlippedBlock => FlippedBlock.classList.contains('is-flipped'))

    if (allFlippedBlocks.length === 2 ){
        // console.log('Tow Flipped Blocks Selector')

stopClicking()
checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1])

    }

}

function stopClicking(){
    blocksContainer.classList.add('no-clicking')

setTimeout(()=>{
    blocksContainer.classList.remove('no-clicking')
},duration)


}

function checkMatchedBlocks(firstBlock, secondBlock){
    let triesElement = document.querySelector('.tries span')

    if (firstBlock.dataset.technology === secondBlock.dataset.technology){
        firstBlock.classList.remove('is-flipped')
        secondBlock.classList.remove('is-flipped')


        firstBlock.classList.add('has-match')
        secondBlock.classList.add('has-match')
        document.getElementById('success').play()

       
    }else{
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1 
setTimeout(()=>{
    firstBlock.classList.remove('is-flipped')
    secondBlock.classList.remove('is-flipped')
},duration)
      document.getElementById('fail').play()
    }
}

function shuffle(Array){
    
    let current = Array.length,

    temp,

    random;


    while (current > 0 ) {

        random = Math.floor(Math.random() * current);

        current--;
temp = Array[current]

Array[current]=Array[random]

Array[random]= temp

    }
return Array;
}
