/*
 * Gnome-Shell Hot corner disabler
 * Author: Herman Boomsma
 * Author: Nathaniel Case
 *
 */

const Main = imports.ui.main;

let _monitorChangeId;

function init() {}

function enable() {
    hotCorners(false);
    _monitorChangeId = Main.layoutManager.connect('monitors-changed', disableHotCorners);
}

function disable() {
    hotCorners(true);
    Main.layoutManager.disconnect(_monitorChangeId);
}

function disableHotCorners() {
    hotCorners(false);
}

function hotCorners(enable) {
    for(let i = 0; i < Main.layoutManager.hotCorners.length; i++) {
        if (Main.layoutManager.hotCorners[i]._pressureBarrier) {
            Main.layoutManager.hotCorners[i]._pressureBarrier.setEventFilter(function(event) {
                return !enable;
            });
        }
        if (Main.layoutManager.hotCorners[i]._corner) {
            Main.layoutManager.hotCorners[i]._corner.reactive = enable;
        }
    }
}
