
let square = document.querySelectorAll('.squareBox')
let audio = document.querySelectorAll('audio')
let icon = document.querySelectorAll('.icon')
let play = (index) => {
	if(index == 1 || index == 4 || index == 7 || index == 10 ){
		audio[index].loop = true
		let iconIndex = (index == 1) ? 0 : (index == 4?1:(index == 7?2:(index==10)?3:null) )
		icon[iconIndex].classList.add('rotate')
	} 
	audio[index].currentTime = 0
	audio[index].play()

	audio[index].onended = () => {
		square[index].classList.toggle('shadow')
	}
	
}
let pause = (index) => {
	audio[index].loop = false
	audio[index].pause();
	let iconIndex = (index == 1) ? 0 : (index == 4?1:(index == 7?2:(index==10)?3:null) )
	icon[iconIndex].classList.remove('rotate')
}
let audioPlaying = (index) => {
	return (audio[index].duration > 0 && !audio[index].paused)
}
let run = (index) => {
	index = index - 1

	square[index].classList.toggle('shadow')
	if (square[index].className == "squareBox shadow"){
		play(index)
	} else {
		pause(index)
	}
}
