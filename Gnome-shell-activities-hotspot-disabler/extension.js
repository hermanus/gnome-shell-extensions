/*
 * Gnome-Shell Hot corner disabler
 * Author: Herman Boomsma
 * Author: Nathaniel Case
 * 
 */

const Main = imports.ui.main;
const Panel = imports.ui.layout;

let _monitorChangeId;

function init() {
}

function enable() {
    hotCorners(false);
    Main.panel._activitiesButton._hotCorner._corner.reactive = false;
    _monitorChangeId = Main.layoutManager.connect('monitors-changed', disableHotCorners);
}

function disable() {
    hotCorners(true);
    Main.panel._activitiesButton._hotCorner._corner.reactive = true;
    Main.layoutManager.disconnect(_monitorChangeId);
}

function disableHotCorners() {
    hotCorners(false);
}

function hotCorners(enable) {
    for(let i = 0; i < Main.layoutManager._hotCorners.length; i++) {
        hotcorner = Main.layoutManager._hotCorners[i];
        hotcorner._corner.reactive = enable;
    }
}
