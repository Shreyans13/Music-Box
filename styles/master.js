let audio = [
	"sounds/pad1_sunset.mp3",
	"sounds/pad2_sunset.mp3",
	"sounds/pad3_sunset.mp3",
	"sounds/pad4_sunset.mp3",
	"sounds/pad5_sunset.mp3",
	"sounds/pad6_sunset.mp3",
	"sounds/pad7_sunset.mp3",
	"sounds/pad8_sunset.mp3",
	"sounds/pad9_sunset.mp3",
	"sounds/pad10_sunset.mp3",
	"sounds/pad11_sunset.mp3",
	"sounds/pad12_sunset.mp3",
]

let square = document.querySelectorAll('.squareBox')

let run = (index) => {

	index = index - 1

	let tune = new Audio(audio[index])
	
	let play = (index) => {
		if(index == 1 || index == 4 || index == 7 || index == 10 ){
			tune.loop = true 
			tune.load()
		}
		tune.play()
	}
	
	let pause = (index) => {
		console.log("pause the song")
		tune.loop = false
		console.log(tune.loop)
		// tune.load()
		tune.pause();
	}
	
	square[index].classList.toggle('shadow')
	console.log(square[index].className)
	if (square[index].className == "squareBox shadow"){
		play(index)
	} else {
		pause(index)
	}
	console.log(index)
}

