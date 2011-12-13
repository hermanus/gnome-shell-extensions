/*
 * Gnome-Shell Hot corner disabler
 * Author: Herman Boomsma
 * 
 * 
 */

const Panel = imports.ui.layout;

function init() {
    old_function = Panel.HotCorner.prototype._onCornerEntered;
}

function enable() {
    //clear the _onCornerEntered function so there will be no hotspot
    Panel.HotCorner.prototype._onCornerEntered = function() {
        return false;
    };
}

function disable() {
    //restore the _onCornerEntered function
    Panel.HotCorner.prototype._onCornerEntered = old_function;
}
