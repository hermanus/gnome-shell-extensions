/*
 * Gnome-Shell Hot corner disabler
 * Author: Herman Boomsma
 * 
 * 
 */

const Panel = imports.ui.layout;

function main() {
//clear the _onCornerEntered function so there will be no hotspot    
    Panel.HotCorner.prototype._onCornerEntered = function() {
			return false;
		};
}

function init() {
}

function enable() {
}

function disable() {
}
