// DECLARE
var betterhelpImg = document.getElementById('betterhelp-toggle');
var betterhelpImgLink = document.getElementById('betterhelp-link');

console.log('testing running');

// FUNKY FUNCTIONS
betterhelpImg.style.display = "none";

betterhelpImgLink.addEventListener('click', function() {
	if (betterhelpImg.style.display === "none") {
		betterhelpImg.style.display = "block";
		betterhelpImgLink.innerHTML = "Click to close screenshot view"
	} else {
		betterhelpImg.style.display = "none";
		betterhelpImgLink.innerHTML = "Click to see BetterHelp subscription costs"
	}
});
