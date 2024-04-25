window.addEventListener("load",function() {
	var canvas = document.getElementById('canperso');
	var ctx = canvas.getContext('2d');
	
	var ref = this.document.getElementById('imgref').src;
	var img = new Image();
	img.src = ref

	var iw = img.naturalWidth
	var ih = img.naturalHeight
	var cw = canvas.width
	var ch = canvas.height
	var i = iw / ih


	img.onload = function() {
		ctx.drawImage(img, 0, 0, cw,cw/i)
		}
})