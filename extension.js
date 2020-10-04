const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const getAlign = vscode.workspace.getConfiguration('whosTheBoss').get('align') ? 
	vscode.workspace.getConfiguration('whosTheBoss').get('align') === "left" ?
		"Left" :
		"Right" :
	"Left";

	let statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment[getAlign], 1000);

	statusBarItem.text = vscode.workspace.getConfiguration('whosTheBoss').get('bossName') ?
		vscode.workspace.getConfiguration('whosTheBoss').get('bossName') :
		"Whos the Boss";

	statusBarItem.color = vscode.workspace.getConfiguration('whosTheBoss').get('align') ? vscode.workspace.getConfiguration('whosTheBoss').get('align') : "#FFFFFF";
	
	statusBarItem.show();
	
	statusBarItem.tooltip = "An Extension for adding Owner/Boss name";
	
	context.subscriptions.push(statusBarItem);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
