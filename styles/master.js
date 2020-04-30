
let square = document.querySelectorAll('.squareBox')
let audio = document.querySelectorAll('audio')
let play = (index) => {
	if(index == 1 || index == 4 || index == 7 || index == 10 ){
		audio[index].loop = true 
		console.log(audio[index])
		// audio[index].load()
	}
	audio[index].currentTime = 0
	audio[index].play()
}
let pause = (index) => {
	console.log("pause the song")
	audio[index].loop = false
	// console.log(tune.loop)
	// tune.load()
	audio[index].pause();
}
let run = (index) => {
	index = index - 1


	console.log(audio[index])

	square[index].classList.toggle('shadow')
	if (square[index].className == "squareBox shadow"){
		play(index)
	} else {
		pause(index)
	}
	console.log(index)

}

