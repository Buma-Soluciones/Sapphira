// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');
const { exec } = require('child_process');
const trad = require('./src/Sapphira_src/Translator').Translator

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let NEXT_TERM_ID = 1;

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "sapphira" is now active!');

	let folderPath = vscode.window.activeTextEditor.document.fileName; // get the open folder path
	let folderPathSplit = folderPath.split("\\")
	let userPath = folderPathSplit.slice(0,4).join("\\")
	let folder = userPath + "\\Sapphira\\src\\Alpaca_src\\eg\\life\\eg";

	let files = []
	fs.readdirSync(folder).forEach(file => {
		files.push(file.slice(0,-5))
	});

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Sapphira dice hola!');
	});

	console.log("Terminals: " + vscode.window.terminals.length);
	// vscode.window.onDidOpenTerminal
	vscode.window.onDidOpenTerminal(terminal => {
		console.log("Terminal opened. Total count: " + vscode.window.terminals.length);
	});

	// vscode.window.onDidChangeActiveTerminal
	vscode.window.onDidChangeActiveTerminal(e => {
		console.log(`Active terminal changed, name=${e ? e.name : 'undefined'}`);
	});

	// vscode.window.createTerminal
	context.subscriptions.push(vscode.commands.registerCommand('terminalTest.createTerminal', () => {
		vscode.window.createTerminal(`Sapphira Terminal #${NEXT_TERM_ID++}`);
		vscode.window.showInformationMessage('Hello World 2!');
	}));

	context.subscriptions.push(vscode.commands.registerCommand('terminalTest.createAndSend', () => {
		const terminal = vscode.window.createTerminal(`Sapphira Terminal #${NEXT_TERM_ID++}`);
		let folderPath = vscode.window.activeTextEditor.document.fileName; // get the open folder path
		let folderPathSplit = folderPath.split("\\")
		let userPath = folderPathSplit.slice(0,4).join("\\")
		let copyPath = userPath + "\\Sapphira\\src\\Sapphira_src\\life.sp"
		console.log('folderPath :', folderPath);
		fs.copyFile(folderPath, copyPath, (err) => {
			if (err) throw err;
			console.log('source.txt was copied to destination.txt');

		  });
		  let command = exec('cd ' + '"' + userPath + "\\Sapphira\\src\\Sapphira_src\\" + '"' + '&& node index.js');
		  // let command = exec('cd');

		  
		  command.stdout.on("data", data => {
			  console.log(`Todo bien: ${data}`);
			  terminal.sendText(`cd \"${userPath}\\Sapphira\\src\\Alpaca_src\\bin\" | ${data}`);
			  terminal.show(true)
		  });
		  
		  
		  command.stderr.on("data", data => {
			  console.log(`stderr: ${data}`);
		  });
		  
		  command.on('error', (error) => {
			  console.log(`error: ${error.message}`);
		  });
		  
		  command.on("close", code => {
			  console.log(`child process exited with code ${code}`);
		  });
		
	}));

	context.subscriptions.push(vscode.commands.registerCommand('terminalTest.viewConfiguration', async () => {
		let what = await vscode.window.showInputBox({ placeHolder: 'Cual configuracion quieres ver?' });
		if (what) {
			console.log('what:', what);
			console.log('folder :', folder);
			let terminal = vscode.window.createTerminal(`Configuracion: ${what}`);
			terminal.sendText(`cd \"${folder}\"`);
			terminal.sendText(`cat \"${what}.life\"`);
			terminal.show(true)
		}	

		
	}));

	const provider2 = vscode.languages.registerCompletionItemProvider(
		'sp',
		{
			provideCompletionItems(document, position) {

				// get all text until the `position` and check if it reads `console.`
				// and if so then complete if `log`, `warn`, and `error`
				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('conf ')) {
					return undefined;
				}
				
				let items = []
				files.forEach(filename => {
					items.push(new vscode.CompletionItem(filename, vscode.CompletionItemKind.Method))
				});

				return items;
			}
		},
		' ' // triggered whenever a ' ' is being typed
	);

	context.subscriptions.push(provider2);

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
