/*
 * Gnome-Shell Hot corner disabler
 * Author: Herman Boomsma
 * Author: Nathaniel Case
 * 
 */

const Main = imports.ui.main;
const Panel = imports.ui.layout;

function init() {
    Panel.HotCorner.prototype.setReactive = function(enable) {
        this._corner.reactive = enable;
    }
}

function enable() {
    Main.panel._activitiesButton._hotCorner.setReactive(false);
}

function disable() {
    Main.panel._activitiesButton._hotCorner.setReactive(true);
}
