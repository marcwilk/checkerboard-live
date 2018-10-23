document.addEventListener('DOMContentLoaded', function(){
	//find element
	let body = document.querySelector("body")
	let numberOfTiles = 63

	function getHexValue(){
  let numCharacters = 6
  let numPossibleValues = 16

  let val = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
  let color = "#"

  for (var i = 0; i < numCharacters; i++) {
    color += val[Math.floor(Math.random(0, numPossibleValues) * numPossibleValues)]
  }

  return color
}

	for(let i=0; i<numberOfTiles; i++){
		let tile = document.createElement("div")
		tile.style.width = "11.1%"
		tile.style.paddingBottom = "11.1%"
		tile.style.backgroundColor = getHexValue()
		body.appendChild(tile)
			if(i % 2 === 0){
				tile.style.backgroundColor = 
				getHexValue()
			}
		tile.style.float = "right"
	}
})