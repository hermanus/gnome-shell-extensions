/*
 * Gnome-shell notification area icon for hamster applet
 * Author: Herman Boomsma
 * 
 * Next step will be having the current activity as text in the notification area
 */

const Panel = imports.ui.panel;
const StatusIconDispatcher = imports.ui.statusIconDispatcher;

function main() {
  StatusIconDispatcher.STANDARD_TRAY_ICON_IMPLEMENTATIONS['hamster-tray'] = 'hamster-tray';
  
//http://www.janhouse.lv/blog/linux/hamster-time-tracker-in-system-tray/
//use that script to make it work!!
//DO MIND THE UPDATE AT THE BOTTOM ABOUT REMOVING import gnomeapplet FROM applet.py
}
