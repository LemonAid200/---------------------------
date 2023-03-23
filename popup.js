document.querySelector('.popup').onclick = function() {
	document.querySelector('.popup').style.display = 'none';
}

document.querySelector('.popup__body').addEventListener('click', function (e) {
  e.stopPropagation();
});


document.querySelector('.popup__body .close').onclick = function() {
	document.querySelector('.popup').style.display = 'none';
}

document.querySelector('#open-popup').onclick = function() {
	document.querySelector('.popup').style.display = 'flex';
	console.log('open pop')
}