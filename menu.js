'use strict';

const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu;
const appName = app.getName();

module.exports.otherosMenu =
	[{
		label: appName,
		submenu: [{
			label: `About ${appName}`,
			event: 'about'
		}, {
			type: 'separator'
		}, {
			label: 'Change theme',
			event: 'theme'
		}, {
			label: 'Change toggle animation',
			event: 'toggle-animation'
		}, {
			label: 'Offline',
			event: 'offline'
		}, {
			type: 'separator'
		}, {
			label: 'Hide',
			accelerator: 'Esc',
			selector: 'hide:'
		}, {
			type: 'separator'
		}, {
			label: 'Quit',
			accelerator: 'CmdOrCtrl+Q',
			click() {
				app.quit();
			}
		}]
	}, {
		label: 'Edit',
		submenu: [{
			label: 'Cut',
			accelerator: 'CmdOrCtrl+X',
			role: 'cut'
		}, {
			label: 'Copy',
			accelerator: 'CmdOrCtrl+C',
			role: 'copy'
		}, {
			label: 'Paste',
			accelerator: 'CmdOrCtrl+V',
			role: 'paste'
		}, {
			label: 'Select All',
			accelerator: 'CmdOrCtrl+A',
			role: 'selectall'
		}]
	}, {
		label: 'Help',
		submenu: [{
			label: 'News',
			event: 'news'
		}, {
			label: 'Tips',
			event: 'tips'
		}]
	}];

module.exports.macosMenu =
	[{
		label: appName,
		submenu: [{
			label: `About ${appName}`,
			event: 'about'
		}, {
			type: 'separator'
		}, {
			label: 'Change theme',
			event: 'theme'
		}, {
			label: 'Change toggle animation',
			event: 'toggle-animation'
		}, {
			label: 'Offline',
			event: 'offline'
		}, {
			type: 'separator'
		}, {
			label: 'Hide',
			accelerator: 'Esc',
			selector: 'hide:'
		}, {
			type: 'separator'
		}, {
			label: 'Quit',
			accelerator: 'CmdOrCtrl+Q',
			click() {
				app.quit();
			}
		}]
	}, {
		label: 'Edit',
		submenu: [{
			label: 'Cut',
			accelerator: 'CmdOrCtrl+X',
			role: 'cut'
		}, {
			label: 'Copy',
			accelerator: 'CmdOrCtrl+C',
			role: 'copy'
		}, {
			label: 'Paste',
			accelerator: 'CmdOrCtrl+V',
			role: 'paste'
		}, {
			label: 'Select All',
			accelerator: 'CmdOrCtrl+A',
			role: 'selectall'
		}]
	}, {
		label: 'Help',
		submenu: [{
			label: 'News',
			event: 'news'
		}, {
			label: 'Tips',
			event: 'tips'
		}]
	}];
