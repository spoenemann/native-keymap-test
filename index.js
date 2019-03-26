const keymap = require('native-keymap');

console.log(keymap.getCurrentKeyboardLayout());

keymap.onDidChangeKeyboardLayout(() => {
    console.log(keymap.getCurrentKeyboardLayout());
});
