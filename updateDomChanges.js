function updateDomChanges() {
	if (this._element) {
		var regex = /transform: translate3d\((-?\d+)px, (-?\d+)px, (-?\d+)px\)/g
		var transform = regex.exec(this._element.outerHTML);
		if (transform) {
			var posX = parseInt(transform[1]);
			var posY = parseInt(transform[2]);
			var sizeW = this._element.clientWidth;
			var sizeH = this._element.clientHeight;
			this.attr({x: posX, y: posY, w: sizeW, h: sizeH})
		}

		if(!this._element.parentNode) {
			this.destroy();
		}
	}
}