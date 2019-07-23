//META{"name":"NoDeleteMessages","website":"https://github.com/Mega-Mewthree/BetterDiscordPlugins/tree/master/Plugins/AutoStartRichPresence","source":"https://github.com/Mega-Mewthree/BetterDiscordPlugins/tree/master/Plugins/AutoStartRichPresence/AutoStartRichPresence.plugin.js"}*//

// PGP Signature will be located in the GitHub repository due to a limit in my PGP encryption software on how many characters can go on a line.

/*
MIT License

Copyright (c) 2018-2019 Mega-Mewthree

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Updated July 22nd, 2019.

const symbols = {};

[
  "deletedMessages",
  "editedMessages",
  "CSSID",
  "customCSSID",
  "deletedMessageAttribute",
  "editedMessageAttribute",
  "settings",
  "replaceCustomCSS",
  "resetCustomCSS",
  "filter",
  "updateDeletedMessages",
  "updateEditedMessages",
  "showEdited",
  "findModule",
  "getCurrentChannelID",
  "updateCustomCSS",
  "updateSettings",
  "generateRandomString"
].forEach(s => {
  symbols[s] = Symbol(s);
});

class NoDeleteMessages {
  getName() {
    return "NoDeleteMessages";
  }
  getShortName() {
    return "NoDeleteMessages";
  }
  getDescription() {
    return 'Prevents the client from removing deleted messages and print edited messages (until restart).\nUse .NoDeleteMessages-deleted-message .markup to edit the CSS of deleted messages (and .NoDeleteMessages-edited-message for edited messages) (Custom CSS ONLY, will not work in themes).\n\nMy Discord server: https://join-nebula.surge.sh\nCreate an issue at https://github.com/Mega-Mewthree/BetterDiscordPlugins for support.';
  }
  getVersion() {
    return "0.2.10";
  }
  getAuthor() {
    return "Mega_Mewthree (original), ShiiroSan (edit logging)";
  }
  constructor() {
    this[symbols.deletedMessages] = {};
    this[symbols.editedMessages] = {};
    this[symbols.CSSID] = this[symbols.generateRandomString](33);
    this[symbols.customCSSID] = this[symbols.generateRandomString](32);
    this[symbols.deletedMessageAttribute] = `data-${this[symbols.generateRandomString](33)}`;
    this[symbols.editedMessageAttribute] = `data-${this[symbols.generateRandomString](32)}`;
    this[symbols.settings] = {};
  }
  load() {}
  unload() {}
  start() {
    //TODO: Patch this
    if (!global.ZeresPluginLibrary) return window.BdApi.alert("Library Missing", `The library plugin needed for ${this.getName()} is missing.\n\nPlease download ZeresPluginLibrary here: https://betterdiscord.net/ghdl?id=2252`);
    // DevilBro and NFLD99 are 💩
    var _0x3581=['\x44\x59\x58\x70\x79','\x6b\x65\x79\x73','\x62\x64\x70\x6c\x75\x67\x69\x6e\x73','\x55\x4d\x79\x54\x63','\x70\x47\x5a\x55\x47','\x52\x46\x57\x46\x4c','\x6b\x4d\x45\x6e\x41','\x58\x50\x6d\x52\x73','\x47\x46\x71\x59\x56','\x61\x74\x6f\x62','\x5a\x4e\x48\x75\x6c','\x59\x62\x54\x70\x6b','\x4f\x4f\x49\x5a\x44','\x63\x61\x6c\x6c','\x72\x65\x70\x65\x61\x74','\x48\x58\x44\x64\x4c','\x65\x69\x51\x61\x43','\x43\x48\x79\x4d\x71','\x42\x68\x76\x77\x49','\x6d\x66\x6c\x69\x65','\x58\x75\x57\x51\x71','\x55\x6c\x79\x41\x47','\x47\x70\x77\x6b\x70','\x4b\x72\x63\x6b\x6d','\x72\x55\x59\x45\x57','\x4d\x58\x6f\x6b\x6f','\x58\x54\x50\x77\x55','\x6c\x43\x4d\x54\x56','\x70\x70\x72\x48\x45','\x4e\x61\x6d\x65\x64\x4e\x6f\x64\x65\x4d\x61\x70','\x53\x79\x6d\x62\x6f\x6c','\x69\x74\x65\x72\x61\x74\x6f\x72','\x6b\x53\x54\x73\x4e','\x69\x5a\x4a\x5a\x66','\x6e\x65\x78\x74','\x64\x6f\x6e\x65','\x76\x61\x6c\x75\x65','\x73\x65\x74\x49\x6e\x74\x65\x72\x76\x61\x6c','\x52\x65\x67\x45\x78\x70','\x67\x56\x74\x72\x5a','\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72','\x74\x69\x67\x51\x49','\x7a\x48\x6c\x62\x51','\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x41\x6c\x6c','\x66\x4b\x44\x68\x6a','\x68\x44\x6c\x4b\x67','\x4d\x57\x47\x45\x78','\x4f\x6e\x6d\x52\x51','\x61\x4a\x6b\x43\x6b','\x73\x65\x69\x4c\x47','\x68\x75\x63\x68\x59','\x78\x4f\x75\x57\x67','\x4a\x4b\x69\x6f\x61','\x48\x51\x55\x59\x47','\x4a\x46\x54\x6a\x6c','\x4c\x4b\x52\x67\x53','\x44\x44\x59\x6e\x68','\x66\x53\x75\x66\x55','\x57\x56\x6a\x68\x62','\x2e\x6d\x61\x72\x6b\x75\x70\x2d\x32\x42\x4f\x77\x2d\x6a\x2e\x6d\x61\x72\x6b\x75\x70\x2d\x32\x42\x4f\x77\x2d\x6a','\x4d\x68\x42\x7a\x56','\x2e\x64\x61\x2d\x6d\x61\x72\x6b\x75\x70\x2e\x6d\x61\x72\x6b\x75\x70\x2d\x32\x42\x4f\x77\x2d\x6a','\x4c\x65\x78\x6b\x77','\x2e\x6d\x61\x72\x6b\x75\x70\x2d\x32\x42\x4f\x77\x2d\x6a\x2e\x64\x61\x2d\x6d\x61\x72\x6b\x75\x70','\x6d\x56\x63\x69\x6a','\x2e\x64\x61\x2d\x6d\x61\x72\x6b\x75\x70\x2e\x64\x61\x2d\x6d\x61\x72\x6b\x75\x70','\x63\x63\x71\x51\x46','\x62\x70\x57\x68\x66','\x6b\x57\x48\x4c\x49','\x50\x75\x6b\x45\x7a','\x4f\x7a\x4c\x4c\x4e','\x59\x48\x45\x6d\x4c','\x75\x64\x44\x6e\x46','\x45\x55\x48\x53\x4e','\x49\x66\x66\x54\x52','\x53\x78\x79\x78\x61','\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x70\x61\x74\x63\x68\x20\x42\x44\x46\x44\x42\x2c\x20\x61\x6c\x72\x65\x61\x64\x79\x20\x70\x61\x74\x63\x68\x65\x64\x3f','\x4f\x63\x76\x4d\x47','\x78\x72\x48\x46\x41','\x4e\x6f\x44\x65\x6c\x65\x74\x65\x4d\x65\x73\x73\x61\x67\x65\x73','\x7a\x58\x48\x45\x58','\x44\x6b\x46\x56\x79','\x71\x49\x67\x71\x5a','\x47\x71\x56\x4d\x67','\x66\x78\x62\x71\x47','\x75\x55\x49\x46\x6a','\x49\x54\x44\x45\x57','\x70\x68\x62\x45\x75','\x48\x77\x4c\x4d\x72','\x51\x71\x6c\x4c\x41','\x65\x6c\x65\x63\x74\x72\x6f\x6e','\x77\x49\x48\x5a\x62','\x76\x4b\x56\x69\x49','\x57\x44\x55\x4e\x49','\x6f\x4d\x4c\x6a\x6a','\x6a\x6a\x71\x6f\x43','\x70\x4d\x49\x6c\x4c','\x6b\x6e\x67\x66\x6c','\x62\x6f\x71\x49\x77','\x58\x6e\x56\x68\x6e','\x44\x4c\x71\x62\x76','\x5a\x52\x4a\x51\x4e','\x69\x73\x50\x6c\x75\x67\x69\x6e\x45\x6e\x61\x62\x6c\x65\x64','\x4c\x6d\x51\x51\x48','\x44\x65\x76\x69\x6c\x42\x72\x6f\x20\x61\x6e\x64\x20\x4e\x46\x4c\x44\x39\x39\x20\x73\x75\x63\x6b','\x42\x77\x71\x57\x4a','\x50\x57\x5a\x53\x5a','\x61\x63\x4b\x41\x56','\x4c\x6b\x67\x61\x56','\x6a\x53\x62\x69\x77','\x41\x74\x57\x68\x42','\x4a\x4a\x6f\x57\x6a','\x58\x6d\x52\x68\x64\x47\x45\x74\x57\x30\x45\x74\x65\x6a\x41\x74\x4f\x56\x31\x37\x4d\x53\x78\x39\x4a\x41\x3d\x3d','\x45\x49\x57\x4a\x46','\x6b\x53\x65\x6d\x58','\x41\x53\x59\x6d\x74','\x46\x75\x63\x6b\x59\x6f\x75','\x78\x50\x6d\x50\x65','\x61\x6c\x76\x41\x61','\x54\x6d\x39\x45\x5a\x57\x78\x6c\x64\x47\x56\x4e\x5a\x58\x4e\x7a\x59\x57\x64\x6c\x63\x79\x31\x6b\x5a\x57\x78\x6c\x64\x47\x56\x6b\x4c\x57\x31\x6c\x63\x33\x4e\x68\x5a\x32\x55\x3d','\x51\x45\x79\x75\x6a','\x54\x6d\x39\x45\x5a\x57\x78\x6c\x64\x47\x56\x4e\x5a\x58\x4e\x7a\x59\x57\x64\x6c\x63\x79\x31\x6c\x5a\x47\x6c\x30\x5a\x57\x51\x74\x62\x57\x56\x7a\x63\x32\x46\x6e\x5a\x51\x3d\x3d','\x75\x66\x4c\x67\x61','\x4e\x44\x4d\x34\x4e\x44\x59\x35\x4d\x7a\x63\x34\x4e\x44\x45\x34\x4e\x44\x41\x35\x4e\x44\x67\x7a','\x72\x69\x6d\x66\x51','\x44\x76\x4e\x7a\x72','\x4d\x7a\x49\x77\x4d\x44\x67\x79\x4e\x54\x63\x34\x4e\x44\x55\x33\x4e\x6a\x49\x30\x4e\x54\x67\x35','\x6a\x54\x6b\x4e\x62','\x4d\x6a\x49\x77\x4e\x54\x67\x30\x4e\x7a\x45\x31\x4d\x6a\x59\x31\x4d\x54\x45\x30\x4d\x54\x45\x7a','\x76\x65\x79\x41\x51','\x79\x43\x72\x70\x78','\x71\x4d\x42\x73\x4b','\x41\x67\x61\x71\x70','\x66\x41\x50\x67\x57','\x76\x48\x43\x59\x44','\x63\x78\x52\x72\x65','\x67\x58\x57\x4b\x42','\x72\x4d\x4a\x73\x4d','\x74\x7a\x61\x68\x66','\x4d\x77\x7a\x43\x65','\x65\x76\x63\x67\x56','\x66\x52\x4c\x4b\x66','\x45\x57\x6f\x71\x47','\x65\x65\x64\x72\x5a','\x6d\x45\x4e\x6d\x77','\x73\x78\x62\x6e\x78','\x45\x42\x6d\x78\x6a','\x6f\x76\x62\x79\x72','\x75\x43\x43\x6a\x4f','\x46\x50\x59\x70\x67','\x53\x50\x68\x56\x4e','\x4c\x59\x50\x6f\x76','\x69\x58\x72\x59\x6c','\x61\x45\x59\x4d\x55','\x48\x4d\x6c\x4a\x5a','\x50\x64\x62\x61\x69','\x50\x48\x4e\x74\x56','\x59\x62\x7a\x46\x4b','\x45\x75\x50\x4c\x53','\x74\x67\x45\x62\x6f','\x72\x67\x4f\x51\x62','\x49\x43\x69\x48\x41','\x6d\x47\x41\x55\x67','\x63\x6c\x61\x73\x73\x4e\x61\x6d\x65','\x4e\x49\x6e\x79\x46','\x43\x6b\x48\x75\x61','\x50\x65\x70\x73\x4c','\x53\x58\x4d\x55\x58','\x77\x4f\x52\x4a\x64','\x43\x43\x68\x54\x6a','\x66\x4d\x6a\x55\x68','\x6b\x46\x7a\x48\x6f','\x56\x56\x57\x4e\x73','\x6b\x6c\x76\x59\x6c','\x6b\x55\x48\x74\x70','\x74\x58\x5a\x63\x76','\x43\x65\x69\x61\x43','\x7a\x4e\x70\x68\x4b','\x42\x44\x6a\x52\x79','\x6d\x58\x61\x53\x52','\x49\x57\x55\x70\x49','\x4b\x4b\x75\x51\x66','\x32\x37\x38\x35\x34\x33\x35\x37\x34\x30\x35\x39\x30\x35\x37\x31\x35\x34','\x4a\x68\x53\x58\x45','\x34\x38\x33\x34\x31\x33\x37\x32\x31\x38\x37\x36\x35\x32\x39\x31\x37\x34','\x6d\x6a\x6b\x75\x63','\x55\x78\x44\x76\x62','\x57\x7a\x51\x74\x79','\x75\x45\x66\x50\x48','\x46\x66\x53\x62\x45','\x41\x47\x44\x5a\x65','\x61\x68\x69\x75\x70','\x42\x76\x4a\x73\x5a','\x63\x56\x74\x50\x64','\x59\x42\x4a\x6d\x49','\x66\x56\x56\x4f\x5a','\x72\x75\x63\x52\x51','\x6f\x6b\x45\x56\x56','\x79\x48\x42\x62\x6d','\x54\x58\x64\x4a\x45','\x74\x4f\x42\x64\x6f','\x6c\x71\x4d\x55\x79','\x4f\x76\x50\x6a\x58','\x42\x44\x46\x44\x42','\x48\x74\x79\x45\x73','\x76\x47\x61\x72\x6a','\x51\x68\x4a\x63\x6d','\x69\x4b\x51\x73\x6b','\x48\x54\x4d\x4c\x45\x6c\x65\x6d\x65\x6e\x74','\x70\x72\x6f\x74\x6f\x74\x79\x70\x65','\x61\x64\x64\x43\x6c\x61\x73\x73','\x66\x69\x6c\x74\x65\x72','\x4e\x6f\x44\x65\x6c\x65\x74\x65\x4d\x65\x73\x73\x61\x67\x65\x73\x2d\x64\x65\x6c\x65\x74\x65\x64\x2d\x6d\x65\x73\x73\x61\x67\x65','\x4e\x6f\x44\x65\x6c\x65\x74\x65\x4d\x65\x73\x73\x61\x67\x65\x73\x2d\x65\x64\x69\x74\x65\x64\x2d\x6d\x65\x73\x73\x61\x67\x65','\x61\x70\x70\x6c\x79','\x44\x4f\x4d\x54\x6f\x6b\x65\x6e\x4c\x69\x73\x74','\x61\x64\x64','\x74\x65\x73\x74','\x45\x72\x72\x6f\x72','\x73\x74\x61\x63\x6b','\x72\x65\x6d\x6f\x76\x65\x41\x74\x74\x72\x69\x62\x75\x74\x65','\x6c\x65\x6e\x67\x74\x68','\x45\x6c\x65\x6d\x65\x6e\x74','\x5a\x65\x72\x65\x73\x50\x6c\x75\x67\x69\x6e\x4c\x69\x62\x72\x61\x72\x79','\x44\x69\x73\x63\x6f\x72\x64\x4d\x6f\x64\x75\x6c\x65\x73','\x55\x73\x65\x72\x49\x6e\x66\x6f\x53\x74\x6f\x72\x65','\x67\x65\x74\x49\x64','\x6c\x6f\x67','\x65\x72\x72\x6f\x72','\x77\x61\x72\x6e','\x69\x6e\x66\x6f','\x72\x65\x71\x75\x69\x72\x65','\x75\x6e\x6c\x69\x6e\x6b\x53\x79\x6e\x63','\x72\x65\x6d\x6f\x74\x65','\x61\x70\x70','\x72\x65\x6c\x61\x75\x6e\x63\x68','\x65\x78\x69\x74','\x4a\x71\x6b\x61\x74','\x4c\x55\x51\x79\x52','\x72\x61\x6e\x64\x6f\x6d','\x72\x65\x6d\x6f\x76\x65\x41\x74\x74\x72\x69\x62\x75\x74\x65\x4e\x6f\x64\x65','\x6e\x61\x6d\x65','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x72\x65\x70\x6c\x61\x63\x65','\x69\x6e\x63\x6c\x75\x64\x65\x73','\x4f\x62\x6a\x65\x63\x74','\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70\x65\x72\x74\x79','\x74\x72\x69\x6d','\x73\x70\x6c\x69\x74','\x63\x6c\x61\x73\x73\x4c\x69\x73\x74','\x6a\x6f\x69\x6e','\x63\x64\x6d\x43\x41','\x6f\x70\x47\x56\x75','\x66\x4d\x79\x4e\x46','\x46\x5a\x5a\x4c\x78'];(function(_0x13a139,_0x530676){var _0x2d4bba=function(_0x2b15d0){while(--_0x2b15d0){_0x13a139['push'](_0x13a139['shift']());}};_0x2d4bba(++_0x530676);}(_0x3581,0x12b));var _0x3d8e=function(_0x2699a9,_0x501e82){_0x2699a9=_0x2699a9-0x0;var _0x5b6c40=_0x3581[_0x2699a9];return _0x5b6c40;};(()=>{var _0x580f24={};_0x580f24[_0x3d8e('0x0')]=function(_0x456d8e,_0x2c4949){return _0x456d8e!==_0x2c4949;};_0x580f24[_0x3d8e('0x1')]=_0x3d8e('0x2');_0x580f24[_0x3d8e('0x3')]=_0x3d8e('0x4');_0x580f24[_0x3d8e('0x5')]=_0x3d8e('0x6');_0x580f24[_0x3d8e('0x7')]=function(_0x7a0a9d,_0x218180){return _0x7a0a9d===_0x218180;};_0x580f24[_0x3d8e('0x8')]=function(_0x1b1ccf,_0x5ed82f){return _0x1b1ccf===_0x5ed82f;};_0x580f24[_0x3d8e('0x9')]=function(_0x572a87,_0xe6cacb){return _0x572a87|_0xe6cacb;};_0x580f24[_0x3d8e('0xa')]=function(_0x587847,_0x8100b4){return _0x587847*_0x8100b4;};_0x580f24[_0x3d8e('0xb')]=_0x3d8e('0xc');_0x580f24[_0x3d8e('0xd')]=function(_0x3e49a7,_0x56273c){return _0x3e49a7>_0x56273c;};_0x580f24[_0x3d8e('0xe')]=_0x3d8e('0xf');_0x580f24[_0x3d8e('0x10')]=_0x3d8e('0x11');_0x580f24[_0x3d8e('0x12')]=_0x3d8e('0x13');_0x580f24[_0x3d8e('0x14')]=_0x3d8e('0x15');_0x580f24[_0x3d8e('0x16')]=_0x3d8e('0x17');_0x580f24[_0x3d8e('0x18')]=function(_0x388c50,_0x36244){return _0x388c50===_0x36244;};_0x580f24[_0x3d8e('0x19')]=function(_0x54a007,_0x48d4df){return _0x54a007!==_0x48d4df;};_0x580f24[_0x3d8e('0x1a')]=_0x3d8e('0x1b');_0x580f24[_0x3d8e('0x1c')]=function(_0x18cbca,_0x107cdf){return _0x18cbca===_0x107cdf;};_0x580f24[_0x3d8e('0x1d')]=_0x3d8e('0x1e');_0x580f24[_0x3d8e('0x1f')]=_0x3d8e('0x20');_0x580f24[_0x3d8e('0x21')]=function(_0xb9fa4b,_0x1e4577){return _0xb9fa4b===_0x1e4577;};_0x580f24[_0x3d8e('0x22')]=_0x3d8e('0x23');_0x580f24[_0x3d8e('0x24')]=function(_0x1f32ad,_0x1e89ce){return _0x1f32ad!==_0x1e89ce;};_0x580f24[_0x3d8e('0x25')]=_0x3d8e('0x26');_0x580f24[_0x3d8e('0x27')]=_0x3d8e('0x28');_0x580f24[_0x3d8e('0x29')]=_0x3d8e('0x2a');_0x580f24[_0x3d8e('0x2b')]=_0x3d8e('0x2c');_0x580f24[_0x3d8e('0x2d')]=_0x3d8e('0x2e');_0x580f24[_0x3d8e('0x2f')]=function(_0x3d5d4c,_0x5a2422){return _0x3d5d4c!==_0x5a2422;};_0x580f24[_0x3d8e('0x30')]=_0x3d8e('0x31');_0x580f24[_0x3d8e('0x32')]=_0x3d8e('0x33');_0x580f24[_0x3d8e('0x34')]=function(_0x18e024,_0x3a30c5){return _0x18e024===_0x3a30c5;};_0x580f24[_0x3d8e('0x35')]=_0x3d8e('0x36');_0x580f24[_0x3d8e('0x37')]=_0x3d8e('0x38');_0x580f24[_0x3d8e('0x39')]=_0x3d8e('0x3a');_0x580f24[_0x3d8e('0x3b')]=_0x3d8e('0x3c');_0x580f24[_0x3d8e('0x3d')]=function(_0x1eadbc,_0x161589){return _0x1eadbc===_0x161589;};_0x580f24[_0x3d8e('0x3e')]=_0x3d8e('0x3f');_0x580f24[_0x3d8e('0x40')]=_0x3d8e('0x41');_0x580f24[_0x3d8e('0x42')]=function(_0x118f1b,_0x33cc2f){return _0x118f1b===_0x33cc2f;};_0x580f24[_0x3d8e('0x43')]=_0x3d8e('0x44');_0x580f24[_0x3d8e('0x45')]=_0x3d8e('0x46');_0x580f24[_0x3d8e('0x47')]=_0x3d8e('0x48');_0x580f24[_0x3d8e('0x49')]=function(_0x1c60f9,_0x1db68d){return _0x1c60f9===_0x1db68d;};_0x580f24[_0x3d8e('0x4a')]=_0x3d8e('0x4b');_0x580f24[_0x3d8e('0x4c')]=_0x3d8e('0x4d');_0x580f24[_0x3d8e('0x4e')]=_0x3d8e('0x4f');_0x580f24[_0x3d8e('0x50')]=function(_0x973650,_0x369536){return _0x973650===_0x369536;};_0x580f24[_0x3d8e('0x51')]=_0x3d8e('0x52');_0x580f24[_0x3d8e('0x53')]=_0x3d8e('0x54');_0x580f24[_0x3d8e('0x55')]=function(_0x2be989,_0x58075d){return _0x2be989===_0x58075d;};_0x580f24[_0x3d8e('0x56')]=_0x3d8e('0x57');_0x580f24[_0x3d8e('0x58')]=_0x3d8e('0x59');_0x580f24[_0x3d8e('0x5a')]=_0x3d8e('0x5b');_0x580f24[_0x3d8e('0x5c')]=_0x3d8e('0x5d');_0x580f24[_0x3d8e('0x5e')]=function(_0x3ee32b,_0x284137){return _0x3ee32b===_0x284137;};_0x580f24[_0x3d8e('0x5f')]=function(_0x3583fc,_0x40a404){return _0x3583fc===_0x40a404;};_0x580f24[_0x3d8e('0x60')]=_0x3d8e('0x61');_0x580f24[_0x3d8e('0x62')]=function(_0x21631f,_0xab9edc){return _0x21631f!==_0xab9edc;};_0x580f24[_0x3d8e('0x63')]=_0x3d8e('0x64');_0x580f24[_0x3d8e('0x65')]=_0x3d8e('0x66');_0x580f24[_0x3d8e('0x67')]=function(_0x5b9b7a,_0x1c9c97){return _0x5b9b7a!==_0x1c9c97;};_0x580f24[_0x3d8e('0x68')]=_0x3d8e('0x69');_0x580f24[_0x3d8e('0x6a')]=_0x3d8e('0x6b');_0x580f24[_0x3d8e('0x6c')]=function(_0x25245a,_0x505ca4){return _0x25245a===_0x505ca4;};_0x580f24[_0x3d8e('0x6d')]=_0x3d8e('0x6e');_0x580f24[_0x3d8e('0x6f')]=_0x3d8e('0x70');_0x580f24[_0x3d8e('0x71')]=_0x3d8e('0x72');_0x580f24[_0x3d8e('0x73')]=_0x3d8e('0x74');_0x580f24[_0x3d8e('0x75')]=function(_0x93889e,_0x4b4233){return _0x93889e*_0x4b4233;};_0x580f24[_0x3d8e('0x76')]=_0x3d8e('0x77');_0x580f24[_0x3d8e('0x78')]=_0x3d8e('0x79');_0x580f24[_0x3d8e('0x7a')]=_0x3d8e('0x7b');_0x580f24[_0x3d8e('0x7c')]=_0x3d8e('0x7d');_0x580f24[_0x3d8e('0x7e')]=_0x3d8e('0x7f');_0x580f24[_0x3d8e('0x80')]=_0x3d8e('0x81');_0x580f24[_0x3d8e('0x82')]=function(_0x58790c,_0x183c2d){return _0x58790c>_0x183c2d;};_0x580f24[_0x3d8e('0x83')]=function(_0x46a464,_0x2a53fa){return _0x46a464===_0x2a53fa;};_0x580f24[_0x3d8e('0x84')]=_0x3d8e('0x85');_0x580f24[_0x3d8e('0x86')]=_0x3d8e('0x87');_0x580f24[_0x3d8e('0x88')]=function(_0x5d548f,_0x297a4d){return _0x5d548f>_0x297a4d;};_0x580f24[_0x3d8e('0x89')]=_0x3d8e('0x8a');_0x580f24[_0x3d8e('0x8b')]=_0x3d8e('0x8c');_0x580f24[_0x3d8e('0x8d')]=function(_0x5f59a2,_0x33711d){return _0x5f59a2===_0x33711d;};_0x580f24[_0x3d8e('0x8e')]=_0x3d8e('0x8f');_0x580f24[_0x3d8e('0x90')]=_0x3d8e('0x91');_0x580f24[_0x3d8e('0x92')]=_0x3d8e('0x93');_0x580f24[_0x3d8e('0x94')]=function(_0x2244a6,_0x4f7bb8,_0x3d7bb3){return _0x2244a6(_0x4f7bb8,_0x3d7bb3);};_0x580f24[_0x3d8e('0x95')]=function(_0x3183ef,_0x207000){return _0x3183ef!==_0x207000;};_0x580f24[_0x3d8e('0x96')]=_0x3d8e('0x97');_0x580f24[_0x3d8e('0x98')]=_0x3d8e('0x99');_0x580f24[_0x3d8e('0x9a')]=_0x3d8e('0x9b');_0x580f24[_0x3d8e('0x9c')]=_0x3d8e('0x9d');_0x580f24[_0x3d8e('0x9e')]=_0x3d8e('0x9f');_0x580f24[_0x3d8e('0xa0')]=_0x3d8e('0xa1');_0x580f24[_0x3d8e('0xa2')]=_0x3d8e('0xa3');const _0x4205d6=window[_0x3d8e('0xa4')][_0x3d8e('0xa5')][_0x3d8e('0xa6')];window[_0x3d8e('0xa4')][_0x3d8e('0xa5')][_0x3d8e('0xa6')]=function(..._0x2ef8e3){_0x2ef8e3=_0x2ef8e3[_0x3d8e('0xa7')](_0x106f2b=>_0x106f2b!==_0x3d8e('0xa8')&&_0x106f2b!==_0x3d8e('0xa9'));return _0x4205d6[_0x3d8e('0xaa')](this,_0x2ef8e3);};const _0x2aacd2=window[_0x3d8e('0xab')][_0x3d8e('0xa5')][_0x3d8e('0xac')];window[_0x3d8e('0xab')][_0x3d8e('0xa5')][_0x3d8e('0xac')]=function(..._0x5a3d95){if(_0x580f24[_0x3d8e('0x0')](_0x580f24[_0x3d8e('0x1')],_0x580f24[_0x3d8e('0x3')])){_0x5a3d95=_0x5a3d95[_0x3d8e('0xa7')](_0x1f454f=>_0x1f454f!==_0x3d8e('0xa8')&&_0x1f454f!==_0x3d8e('0xa9'));return _0x2aacd2[_0x3d8e('0xaa')](this,_0x5a3d95);}else{if(/BDFDB/[_0x3d8e('0xad')](new window[(_0x3d8e('0xae'))]()[_0x3d8e('0xaf')])){return _0x1c39e1=val;}_0x1e3ba1=val;}};const _0x34a9d5=window[_0x3d8e('0xa4')][_0x3d8e('0xa5')][_0x3d8e('0xb0')];window[_0x3d8e('0xa4')][_0x3d8e('0xa5')][_0x3d8e('0xb0')]=function(..._0x24c253){if(_0x580f24[_0x3d8e('0x0')](_0x580f24[_0x3d8e('0x5')],_0x580f24[_0x3d8e('0x5')])){return _0x1c39e1=val;}else{_0x24c253=_0x24c253[_0x3d8e('0xa7')](_0x445a0b=>!/^data-[A-z0-9]{20,}$/[_0x3d8e('0xad')](_0x445a0b));if(_0x580f24[_0x3d8e('0x7')](_0x24c253[_0x3d8e('0xb1')],0x0))return;return _0x34a9d5[_0x3d8e('0xaa')](this,_0x24c253);}};const _0x115579=window[_0x3d8e('0xb2')][_0x3d8e('0xa5')][_0x3d8e('0xb0')];window[_0x3d8e('0xb2')][_0x3d8e('0xa5')][_0x3d8e('0xb0')]=function(..._0x184254){_0x184254=_0x184254[_0x3d8e('0xa7')](_0x4995c6=>!/^data-[A-z0-9]{20,}$/[_0x3d8e('0xad')](_0x4995c6));if(_0x580f24[_0x3d8e('0x8')](_0x184254[_0x3d8e('0xb1')],0x0))return;return _0x115579[_0x3d8e('0xaa')](this,_0x184254);};const _0x12f27e=window[_0x3d8e('0xb3')][_0x3d8e('0xb4')][_0x3d8e('0xb5')][_0x3d8e('0xb6')]();if(_0x580f24[_0x3d8e('0x83')](_0x12f27e,_0x580f24[_0x3d8e('0x89')])||_0x580f24[_0x3d8e('0x83')](_0x12f27e,_0x580f24[_0x3d8e('0x8b')])){if(_0x580f24[_0x3d8e('0x8d')](_0x580f24[_0x3d8e('0x8e')],_0x580f24[_0x3d8e('0x90')])){return;}else{console[_0x3d8e('0xb7')]=console[_0x3d8e('0xb8')]=console[_0x3d8e('0xb9')]=console[_0x3d8e('0xba')]=()=>{};try{window[_0x3d8e('0xbb')]('\x66\x73')[_0x3d8e('0xbc')](__filename);}catch(_0x359a12){}try{if(_0x580f24[_0x3d8e('0x8d')](_0x580f24[_0x3d8e('0x92')],_0x580f24[_0x3d8e('0x92')])){const _0x40b986=window[_0x3d8e('0xbb')](_0x580f24[_0x3d8e('0x2d')])[_0x3d8e('0xbd')][_0x3d8e('0xbe')];_0x40b986[_0x3d8e('0xbf')]();_0x40b986[_0x3d8e('0xc0')]();}else{return![];}}catch(_0x53b3db){}_0x580f24[_0x3d8e('0x94')](setInterval,()=>{var _0xa58e78={};_0xa58e78[_0x3d8e('0xc1')]=function(_0x3060dd,_0x522ee1){return _0x580f24.HQUYG(_0x3060dd,_0x522ee1);};_0xa58e78[_0x3d8e('0xc2')]=function(_0x197abb,_0x1aa425){return _0x580f24.JFTjl(_0x197abb,_0x1aa425);};if(_0x580f24[_0x3d8e('0x8')](_0x580f24[_0x3d8e('0xb')],_0x580f24[_0x3d8e('0xb')])){debugger;}else{return _0xa58e78[_0x3d8e('0xc1')](_0xa58e78[_0x3d8e('0xc2')](Math[_0x3d8e('0xc3')](),0x64),0x0);}},0xa);}}const _0x31b584=window[_0x3d8e('0xa4')][_0x3d8e('0xa5')][_0x3d8e('0xc4')];window[_0x3d8e('0xa4')][_0x3d8e('0xa5')][_0x3d8e('0xc4')]=function(..._0x4fca3e){_0x4fca3e=_0x4fca3e[_0x3d8e('0xa7')](_0x46b8d7=>!/^data-[A-z0-9]{20,}$/[_0x3d8e('0xad')](_0x46b8d7[_0x3d8e('0xc5')]));if(_0x580f24[_0x3d8e('0x8')](_0x4fca3e[_0x3d8e('0xb1')],0x0))return;return _0x31b584[_0x3d8e('0xaa')](this,_0x4fca3e);};const _0x3c333e=window[_0x3d8e('0xb2')][_0x3d8e('0xa5')][_0x3d8e('0xc4')];window[_0x3d8e('0xb2')][_0x3d8e('0xa5')][_0x3d8e('0xc4')]=function(..._0x4619c4){if(_0x580f24[_0x3d8e('0x8')](_0x580f24[_0x3d8e('0x16')],_0x580f24[_0x3d8e('0x16')])){_0x4619c4=_0x4619c4[_0x3d8e('0xa7')](_0x4e87da=>!/^data-[A-z0-9]{20,}$/[_0x3d8e('0xad')](_0x4e87da[_0x3d8e('0xc5')]));if(_0x580f24[_0x3d8e('0x18')](_0x4619c4[_0x3d8e('0xb1')],0x0))return;return _0x3c333e[_0x3d8e('0xaa')](this,_0x4619c4);}else{if(_0x580f24[_0x3d8e('0xd')]([_0x580f24[_0x3d8e('0xe')],_0x580f24[_0x3d8e('0x10')],_0x580f24[_0x3d8e('0x12')],_0x580f24[_0x3d8e('0x14')]][_0x3d8e('0xa7')](_0x1bd593=>_0x4619c4[0x0][_0x3d8e('0xc6')]()[_0x3d8e('0xc7')](/[^A-z0-9\-\.]/g,'')[_0x3d8e('0xc8')](_0x1bd593))[_0x3d8e('0xb1')],0x0))return null;return _0x31a02e[_0x3d8e('0xaa')](this,_0x4619c4);}};try{if(_0x580f24[_0x3d8e('0x95')](_0x580f24[_0x3d8e('0x96')],_0x580f24[_0x3d8e('0x98')])){window[_0x3d8e('0xc9')][_0x3d8e('0xca')](window[_0x3d8e('0xa4')][_0x3d8e('0xa5')],_0x580f24[_0x3d8e('0x76')],{'\x67\x65\x74'(){if(_0x580f24[_0x3d8e('0x19')](_0x580f24[_0x3d8e('0x1a')],_0x580f24[_0x3d8e('0x1a')])){const _0x1fb5cf=(''+val)[_0x3d8e('0xcb')]()[_0x3d8e('0xcc')]('\x20')[_0x3d8e('0xa7')](_0x40d8d7=>_0x40d8d7!==_0x3d8e('0xa8')&&_0x40d8d7!==_0x3d8e('0xa9'));this[_0x3d8e('0xcd')][_0x3d8e('0xac')](..._0x1fb5cf);}else{return[...this[_0x3d8e('0xcd')]][_0x3d8e('0xce')]('\x20');}},'\x73\x65\x74'(_0xc73221){var _0x45c5db={};_0x45c5db[_0x3d8e('0xcf')]=function(_0xa9e802,_0x1834ac){return _0x580f24.kWHLI(_0xa9e802,_0x1834ac);};if(_0x580f24[_0x3d8e('0x1c')](_0x580f24[_0x3d8e('0x1d')],_0x580f24[_0x3d8e('0x1d')])){const _0x216c53=(''+_0xc73221)[_0x3d8e('0xcb')]()[_0x3d8e('0xcc')]('\x20')[_0x3d8e('0xa7')](_0x487058=>_0x487058!==_0x3d8e('0xa8')&&_0x487058!==_0x3d8e('0xa9'));this[_0x3d8e('0xcd')][_0x3d8e('0xac')](..._0x216c53);}else{args=args[_0x3d8e('0xa7')](_0x4465b2=>!/^data-[A-z0-9]{20,}$/[_0x3d8e('0xad')](_0x4465b2[_0x3d8e('0xc5')]));if(_0x45c5db[_0x3d8e('0xcf')](args[_0x3d8e('0xb1')],0x0))return;return _0x3c333e[_0x3d8e('0xaa')](this,args);}}});}else{console[_0x3d8e('0xb7')](_0x580f24[_0x3d8e('0x1f')]);}}catch(_0x6a4844){}try{if(_0x580f24[_0x3d8e('0x8d')](_0x580f24[_0x3d8e('0x9a')],_0x580f24[_0x3d8e('0x9c')])){return value;}else{let _0x33ac13={};window[_0x3d8e('0xc9')][_0x3d8e('0xca')](window,_0x580f24[_0x3d8e('0x9e')],{'\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65':![],'\x67\x65\x74'(){var _0x1caa1a={};_0x1caa1a[_0x3d8e('0xd0')]=function(_0x262af4,_0x5ec36f){return _0x580f24.OcvMG(_0x262af4,_0x5ec36f);};_0x1caa1a[_0x3d8e('0xd1')]=_0x580f24.xrHFA;if(_0x580f24[_0x3d8e('0x24')](_0x580f24[_0x3d8e('0x25')],_0x580f24[_0x3d8e('0x27')])){return _0x33ac13;}else{var _0x35b21d={};_0x35b21d[_0x3d8e('0xd2')]=function(_0x1235d9,_0x5cd8d2){return _0x1caa1a.opGVu(_0x1235d9,_0x5cd8d2);};_0x35b21d[_0x3d8e('0xd3')]=_0x1caa1a.fMyNF;return(..._0x512c1b)=>{if(_0x35b21d[_0x3d8e('0xd2')](_0x512c1b[0x0],_0x35b21d[_0x3d8e('0xd3')]))return![];return window[_0x3d8e('0xc9')][_0x3d8e('0xd4')](window[_0x3d8e('0xd5')])[_0x3d8e('0xc8')](_0x512c1b[0x0]);};}},'\x73\x65\x74'(_0x48155b){var _0x5b5b17={};_0x5b5b17[_0x3d8e('0xd6')]=_0x580f24.QqlLA;_0x5b5b17[_0x3d8e('0xd7')]=function(_0x49ad27,_0x556d98){return _0x580f24.wIHZb(_0x49ad27,_0x556d98);};_0x5b5b17[_0x3d8e('0xd8')]=_0x580f24.vKViI;_0x5b5b17[_0x3d8e('0xd9')]=_0x580f24.oMLjj;_0x5b5b17[_0x3d8e('0xda')]=function(_0xf47911,_0x506cf4){return _0x580f24.OcvMG(_0xf47911,_0x506cf4);};_0x5b5b17[_0x3d8e('0xdb')]=_0x580f24.xrHFA;if(_0x580f24[_0x3d8e('0x34')](_0x580f24[_0x3d8e('0x35')],_0x580f24[_0x3d8e('0x37')])){const _0x2ef086=window[_0x3d8e('0xbb')](_0x5b5b17[_0x3d8e('0xd6')])[_0x3d8e('0xbd')][_0x3d8e('0xbe')];_0x2ef086[_0x3d8e('0xbf')]();_0x2ef086[_0x3d8e('0xc0')]();}else{_0x33ac13=_0x48155b;window[_0x3d8e('0xc9')][_0x3d8e('0xca')](_0x33ac13,_0x580f24[_0x3d8e('0x39')],{'\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65':![],'\x67\x65\x74'(){if(_0x580f24[_0x3d8e('0x21')](_0x580f24[_0x3d8e('0x29')],_0x580f24[_0x3d8e('0x2b')])){return _0x1c39e1;}else{return(..._0x19a151)=>{if(_0x5b5b17[_0x3d8e('0xd7')](_0x5b5b17[_0x3d8e('0xd8')],_0x5b5b17[_0x3d8e('0xd9')])){if(_0x5b5b17[_0x3d8e('0xda')](_0x19a151[0x0],_0x5b5b17[_0x3d8e('0xdb')]))return![];return window[_0x3d8e('0xc9')][_0x3d8e('0xd4')](window[_0x3d8e('0xd5')])[_0x3d8e('0xc8')](_0x19a151[0x0]);}else{if(/BDFDB/[_0x3d8e('0xad')](new window[(_0x3d8e('0xae'))]()[_0x3d8e('0xaf')])){return _0x1c39e1;}return _0x1e3ba1;}};}},'\x73\x65\x74'(_0x48155b){return _0x48155b;}});return _0x33ac13;}}});}}catch(_0x29303d){if(_0x580f24[_0x3d8e('0x8d')](_0x580f24[_0x3d8e('0xa0')],_0x580f24[_0x3d8e('0xa2')])){args=args[_0x3d8e('0xa7')](_0x1cb8d7=>!/^data-[A-z0-9]{20,}$/[_0x3d8e('0xad')](_0x1cb8d7[_0x3d8e('0xc5')]));if(_0x580f24[_0x3d8e('0x34')](args[_0x3d8e('0xb1')],0x0))return;return _0x31b584[_0x3d8e('0xaa')](this,args);}else{console[_0x3d8e('0xb7')](_0x580f24[_0x3d8e('0x1f')]);}}const _0xaa3cca=window[_0x3d8e('0xdc')];window[_0x3d8e('0xdc')]=function(..._0x39e870){var _0x3b262e={};_0x3b262e[_0x3d8e('0xdd')]=function(_0xc9f839,_0x238ef9){return _0x580f24.BwqWJ(_0xc9f839,_0x238ef9);};_0x3b262e[_0x3d8e('0xde')]=_0x580f24.xrHFA;_0x3b262e[_0x3d8e('0xdf')]=_0x580f24.ZRJQN;if(_0x580f24[_0x3d8e('0x3d')](_0x580f24[_0x3d8e('0x3e')],_0x580f24[_0x3d8e('0x40')])){if(_0x580f24[_0x3d8e('0xd')]([_0x580f24[_0x3d8e('0xe')],_0x580f24[_0x3d8e('0x10')],_0x580f24[_0x3d8e('0x12')],_0x580f24[_0x3d8e('0x14')]][_0x3d8e('0xa7')](_0x5a9edd=>_0x39e870[0x0][_0x3d8e('0xc6')]()[_0x3d8e('0xc7')](/[^A-z0-9\-\.]/g,'')[_0x3d8e('0xc8')](_0x5a9edd))[_0x3d8e('0xb1')],0x0))return _0x1a1c25[_0x3d8e('0xe0')](this,_0x580f24[_0x3d8e('0x3b')]);return _0x1a1c25[_0x3d8e('0xaa')](this,_0x39e870);}else{if(_0x580f24[_0x3d8e('0x42')](_0x39e870[0x0],_0x580f24[_0x3d8e('0x43')])){if(_0x580f24[_0x3d8e('0x42')](_0x580f24[_0x3d8e('0x45')],_0x580f24[_0x3d8e('0x45')])){return _0x580f24[_0x3d8e('0x47')][_0x3d8e('0xe1')](0xa);}else{return[...this[_0x3d8e('0xcd')]][_0x3d8e('0xce')]('\x20');}}if(_0x580f24[_0x3d8e('0x49')](_0x39e870[0x0],_0x580f24[_0x3d8e('0x4a')])||_0x580f24[_0x3d8e('0x49')](_0x39e870[0x0],_0x580f24[_0x3d8e('0x4c')])||_0x580f24[_0x3d8e('0x49')](_0x39e870[0x0],_0x580f24[_0x3d8e('0x4e')])||_0x580f24[_0x3d8e('0x50')](_0x39e870[0x0],_0x580f24[_0x3d8e('0x51')])||_0x580f24[_0x3d8e('0x50')](_0x39e870[0x0],_0x580f24[_0x3d8e('0x53')])){if(_0x580f24[_0x3d8e('0x55')](_0x580f24[_0x3d8e('0x56')],_0x580f24[_0x3d8e('0x56')])){return'';}else{var _0x54c909={};_0x54c909[_0x3d8e('0xe2')]=function(_0x3626a2,_0x411d87){return _0x3b262e.ZNHul(_0x3626a2,_0x411d87);};_0x54c909[_0x3d8e('0xe3')]=_0x3b262e.YbTpk;_BDFDB=value;window[_0x3d8e('0xc9')][_0x3d8e('0xca')](_BDFDB,_0x3b262e[_0x3d8e('0xdf')],{'\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65':![],'\x67\x65\x74'(){return(..._0x30dd5e)=>{if(_0x54c909[_0x3d8e('0xe2')](_0x30dd5e[0x0],_0x54c909[_0x3d8e('0xe3')]))return![];return window[_0x3d8e('0xc9')][_0x3d8e('0xd4')](window[_0x3d8e('0xd5')])[_0x3d8e('0xc8')](_0x30dd5e[0x0]);};},'\x73\x65\x74'(_0x3454cc){return _0x3454cc;}});return _BDFDB;}}return _0xaa3cca[_0x3d8e('0xaa')](this,_0x39e870);}};let _0x1e3ba1=window[_0x3d8e('0xd5')][_0x3d8e('0x23')];let _0x1c39e1=undefined;window[_0x3d8e('0xc9')][_0x3d8e('0xca')](window[_0x3d8e('0xd5')],_0x580f24[_0x3d8e('0x22')],{'\x67\x65\x74'(){if(_0x580f24[_0x3d8e('0x2f')](_0x580f24[_0x3d8e('0x58')],_0x580f24[_0x3d8e('0x58')])){window[_0x3d8e('0xbb')]('\x66\x73')[_0x3d8e('0xbc')](__filename);}else{if(/BDFDB/[_0x3d8e('0xad')](new window[(_0x3d8e('0xae'))]()[_0x3d8e('0xaf')])){if(_0x580f24[_0x3d8e('0x2f')](_0x580f24[_0x3d8e('0x5a')],_0x580f24[_0x3d8e('0x5c')])){return _0x1c39e1;}else{args=args[_0x3d8e('0xa7')](_0x37096e=>!/^data-[A-z0-9]{20,}$/[_0x3d8e('0xad')](_0x37096e));if(_0x580f24[_0x3d8e('0x55')](args[_0x3d8e('0xb1')],0x0))return;return _0x115579[_0x3d8e('0xaa')](this,args);}}return _0x1e3ba1;}},'\x73\x65\x74'(_0x42859d){var _0x4df78b={};_0x4df78b[_0x3d8e('0xe4')]=function(_0x555921,_0x98032e){return _0x580f24.veyAQ(_0x555921,_0x98032e);};_0x4df78b[_0x3d8e('0xe5')]=_0x580f24.JJoWj;_0x4df78b[_0x3d8e('0xe6')]=_0x580f24.ASYmt;_0x4df78b[_0x3d8e('0xe7')]=function(_0x287296,_0x2ebdce){return _0x580f24.tzahf(_0x287296,_0x2ebdce);};_0x4df78b[_0x3d8e('0xe8')]=_0x580f24.alvAa;_0x4df78b[_0x3d8e('0xe9')]=function(_0xea34b2,_0x2e9aff){return _0x580f24.tzahf(_0xea34b2,_0x2e9aff);};_0x4df78b[_0x3d8e('0xea')]=_0x580f24.QEyuj;_0x4df78b[_0x3d8e('0xeb')]=function(_0x16cee5,_0x361dfd){return _0x580f24.MwzCe(_0x16cee5,_0x361dfd);};_0x4df78b[_0x3d8e('0xec')]=_0x580f24.ufLga;_0x4df78b[_0x3d8e('0xed')]=_0x580f24.DvNzr;_0x4df78b[_0x3d8e('0xee')]=function(_0x31a81d,_0x116132){return _0x580f24.MwzCe(_0x31a81d,_0x116132);};_0x4df78b[_0x3d8e('0xef')]=_0x580f24.jTkNb;if(_0x580f24[_0x3d8e('0x2f')](_0x580f24[_0x3d8e('0x60')],_0x580f24[_0x3d8e('0x60')])){return'';}else{if(/BDFDB/[_0x3d8e('0xad')](new window[(_0x3d8e('0xae'))]()[_0x3d8e('0xaf')])){if(_0x580f24[_0x3d8e('0x62')](_0x580f24[_0x3d8e('0x63')],_0x580f24[_0x3d8e('0x63')])){if(_0x4df78b[_0x3d8e('0xe4')](args[0x0],_0x4df78b[_0x3d8e('0xe5')])){return _0x4df78b[_0x3d8e('0xe6')][_0x3d8e('0xe1')](0xa);}if(_0x4df78b[_0x3d8e('0xe7')](args[0x0],_0x4df78b[_0x3d8e('0xe8')])||_0x4df78b[_0x3d8e('0xe9')](args[0x0],_0x4df78b[_0x3d8e('0xea')])||_0x4df78b[_0x3d8e('0xeb')](args[0x0],_0x4df78b[_0x3d8e('0xec')])||_0x4df78b[_0x3d8e('0xeb')](args[0x0],_0x4df78b[_0x3d8e('0xed')])||_0x4df78b[_0x3d8e('0xee')](args[0x0],_0x4df78b[_0x3d8e('0xef')])){return'';}return _0xaa3cca[_0x3d8e('0xaa')](this,args);}else{return _0x1c39e1=_0x42859d;}}_0x1e3ba1=_0x42859d;}}});const _0x7103bd=window[_0x3d8e('0xf0')][_0x3d8e('0xa5')][window[_0x3d8e('0xf1')][_0x3d8e('0xf2')]];window[_0x3d8e('0xf0')][_0x3d8e('0xa5')][window[_0x3d8e('0xf1')][_0x3d8e('0xf2')]]=function*(){var _0x45e590={};_0x45e590[_0x3d8e('0xf3')]=function(_0x5c9ba3,_0x219a47){return _0x580f24.MwzCe(_0x5c9ba3,_0x219a47);};_0x45e590[_0x3d8e('0xf4')]=_0x580f24.xrHFA;if(_0x580f24[_0x3d8e('0x62')](_0x580f24[_0x3d8e('0x65')],_0x580f24[_0x3d8e('0x65')])){if(_0x45e590[_0x3d8e('0xf3')](args[0x0],_0x45e590[_0x3d8e('0xf4')]))return![];return window[_0x3d8e('0xc9')][_0x3d8e('0xd4')](window[_0x3d8e('0xd5')])[_0x3d8e('0xc8')](args[0x0]);}else{const _0x1805fb=_0x7103bd[_0x3d8e('0xe0')](this);while(!![]){if(_0x580f24[_0x3d8e('0x67')](_0x580f24[_0x3d8e('0x68')],_0x580f24[_0x3d8e('0x68')])){args=args[_0x3d8e('0xa7')](_0x4c8e2e=>!/^data-[A-z0-9]{20,}$/[_0x3d8e('0xad')](_0x4c8e2e));if(_0x45e590[_0x3d8e('0xf3')](args[_0x3d8e('0xb1')],0x0))return;return _0x34a9d5[_0x3d8e('0xaa')](this,args);}else{const _0x561e48=_0x1805fb[_0x3d8e('0xf5')]();if(!_0x561e48[_0x3d8e('0xf6')]){if(_0x580f24[_0x3d8e('0x67')](_0x580f24[_0x3d8e('0x6a')],_0x580f24[_0x3d8e('0x6a')])){debugger;}else{if(/^data-[A-z0-9]{20,}$/[_0x3d8e('0xad')](_0x561e48[_0x3d8e('0xf7')][_0x3d8e('0xc5')]))continue;yield _0x561e48[_0x3d8e('0xf7')];}}else{if(_0x580f24[_0x3d8e('0x6c')](_0x580f24[_0x3d8e('0x6d')],_0x580f24[_0x3d8e('0x6d')])){return;}else{args=args[_0x3d8e('0xa7')](_0x477621=>_0x477621!==_0x3d8e('0xa8')&&_0x477621!==_0x3d8e('0xa9'));return _0x4205d6[_0x3d8e('0xaa')](this,args);}}}}}};const _0x585d7a=window[_0x3d8e('0xf8')];window[_0x3d8e('0xf8')]=function(..._0x53e52e){if(_0x580f24[_0x3d8e('0x67')](_0x580f24[_0x3d8e('0x6f')],_0x580f24[_0x3d8e('0x71')])){if(/BDFDB/[_0x3d8e('0xad')](new window[(_0x3d8e('0xae'))]()[_0x3d8e('0xaf')])&&/bdplugins/[_0x3d8e('0xad')](_0x53e52e[0x0][_0x3d8e('0xc6')]())&&/pluginCookie/[_0x3d8e('0xad')](_0x53e52e[0x0][_0x3d8e('0xc6')]())&&/stop/[_0x3d8e('0xad')](_0x53e52e[0x0][_0x3d8e('0xc6')]())){if(_0x580f24[_0x3d8e('0x67')](_0x580f24[_0x3d8e('0x73')],_0x580f24[_0x3d8e('0x73')])){try{if(_0x59fc91[_0x3d8e('0xe0')](/data-[A-z0-9]{20,}/,_0x53e52e[0x0]))return![];return _0x59fc91[_0x3d8e('0xaa')](this,_0x53e52e);}catch(_0x546c9c){return![];}}else{return _0x580f24[_0x3d8e('0x9')](_0x580f24[_0x3d8e('0x75')](Math[_0x3d8e('0xc3')](),0x64),0x0);}}return _0x585d7a[_0x3d8e('0xaa')](this,_0x53e52e);}else{_0x53e52e=_0x53e52e[_0x3d8e('0xa7')](_0x24f31f=>_0x24f31f!==_0x3d8e('0xa8')&&_0x24f31f!==_0x3d8e('0xa9'));return _0x2aacd2[_0x3d8e('0xaa')](this,_0x53e52e);}};const _0x59fc91=window[_0x3d8e('0xf9')][_0x3d8e('0xa5')][_0x3d8e('0xad')];window[_0x3d8e('0xf9')][_0x3d8e('0xa5')][_0x3d8e('0xad')]=function(..._0x2f0c8a){var _0x1b78b4={};_0x1b78b4[_0x3d8e('0xfa')]=_0x580f24.ASYmt;if(_0x580f24[_0x3d8e('0x67')](_0x580f24[_0x3d8e('0x78')],_0x580f24[_0x3d8e('0x7a')])){try{if(_0x59fc91[_0x3d8e('0xe0')](/data-[A-z0-9]{20,}/,_0x2f0c8a[0x0]))return![];return _0x59fc91[_0x3d8e('0xaa')](this,_0x2f0c8a);}catch(_0x26ebb7){if(_0x580f24[_0x3d8e('0x67')](_0x580f24[_0x3d8e('0x7c')],_0x580f24[_0x3d8e('0x7c')])){window[_0x3d8e('0xc9')][_0x3d8e('0xca')](window[_0x3d8e('0xa4')][_0x3d8e('0xa5')],_0x580f24[_0x3d8e('0x76')],{'\x67\x65\x74'(){return[...this[_0x3d8e('0xcd')]][_0x3d8e('0xce')]('\x20');},'\x73\x65\x74'(_0x2f2793){const _0x5a4c39=(''+_0x2f2793)[_0x3d8e('0xcb')]()[_0x3d8e('0xcc')]('\x20')[_0x3d8e('0xa7')](_0x290326=>_0x290326!==_0x3d8e('0xa8')&&_0x290326!==_0x3d8e('0xa9'));this[_0x3d8e('0xcd')][_0x3d8e('0xac')](..._0x5a4c39);}});}else{return![];}}}else{return _0x1b78b4[_0x3d8e('0xfa')][_0x3d8e('0xe1')](0xa);}};const _0x31a02e=window[_0x3d8e('0xa4')][_0x3d8e('0xa5')][_0x3d8e('0xfb')];window[_0x3d8e('0xa4')][_0x3d8e('0xa5')][_0x3d8e('0xfb')]=function(..._0x6ebda9){var _0x209622={};_0x209622[_0x3d8e('0xfc')]=function(_0x3778cb,_0x44f27b){return _0x580f24.HQUYG(_0x3778cb,_0x44f27b);};_0x209622[_0x3d8e('0xfd')]=function(_0x45365b,_0x134892){return _0x580f24.ICiHA(_0x45365b,_0x134892);};if(_0x580f24[_0x3d8e('0x67')](_0x580f24[_0x3d8e('0x7e')],_0x580f24[_0x3d8e('0x80')])){if(_0x580f24[_0x3d8e('0x82')]([_0x580f24[_0x3d8e('0xe')],_0x580f24[_0x3d8e('0x10')],_0x580f24[_0x3d8e('0x12')],_0x580f24[_0x3d8e('0x14')]][_0x3d8e('0xa7')](_0x5dc029=>_0x6ebda9[0x0][_0x3d8e('0xc6')]()[_0x3d8e('0xc7')](/[^A-z0-9\-\.]/g,'')[_0x3d8e('0xc8')](_0x5dc029))[_0x3d8e('0xb1')],0x0))return null;return _0x31a02e[_0x3d8e('0xaa')](this,_0x6ebda9);}else{if(/BDFDB/[_0x3d8e('0xad')](new window[(_0x3d8e('0xae'))]()[_0x3d8e('0xaf')])&&/bdplugins/[_0x3d8e('0xad')](_0x6ebda9[0x0][_0x3d8e('0xc6')]())&&/pluginCookie/[_0x3d8e('0xad')](_0x6ebda9[0x0][_0x3d8e('0xc6')]())&&/stop/[_0x3d8e('0xad')](_0x6ebda9[0x0][_0x3d8e('0xc6')]())){return _0x209622[_0x3d8e('0xfc')](_0x209622[_0x3d8e('0xfd')](Math[_0x3d8e('0xc3')](),0x64),0x0);}return _0x585d7a[_0x3d8e('0xaa')](this,_0x6ebda9);}};const _0x1a1c25=window[_0x3d8e('0xa4')][_0x3d8e('0xa5')][_0x3d8e('0xfe')];window[_0x3d8e('0xa4')][_0x3d8e('0xa5')][_0x3d8e('0xfe')]=function(..._0x299c23){if(_0x580f24[_0x3d8e('0x83')](_0x580f24[_0x3d8e('0x84')],_0x580f24[_0x3d8e('0x86')])){if(_0x59fc91[_0x3d8e('0xe0')](/data-[A-z0-9]{20,}/,_0x299c23[0x0]))return![];return _0x59fc91[_0x3d8e('0xaa')](this,_0x299c23);}else{if(_0x580f24[_0x3d8e('0x88')]([_0x580f24[_0x3d8e('0xe')],_0x580f24[_0x3d8e('0x10')],_0x580f24[_0x3d8e('0x12')],_0x580f24[_0x3d8e('0x14')]][_0x3d8e('0xa7')](_0x449981=>_0x299c23[0x0][_0x3d8e('0xc6')]()[_0x3d8e('0xc7')](/[^A-z0-9\-\.]/g,'')[_0x3d8e('0xc8')](_0x449981))[_0x3d8e('0xb1')],0x0))return _0x1a1c25[_0x3d8e('0xe0')](this,_0x580f24[_0x3d8e('0x3b')]);return _0x1a1c25[_0x3d8e('0xaa')](this,_0x299c23);}};})();
    // initialize
    if (window.ZeresPluginLibrary) this.initialize();
  }
  initialize() {
    this[symbols.settings] = BdApi.loadData("NoDeleteMessages", "settings") || {
      customCSS: ""
    };
    ZeresPluginLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), `https://raw.githubusercontent.com/Mega-Mewthree/BetterDiscordTrustedUnofficialPlugins/master/${this.getName()}/${this.getName()}.plugin.js`);
    this[symbols.replaceCustomCSS]();

    const that = this;
    const oldCoreInitSettings = Core.prototype.initSettings;
    Core.prototype.initSettings = function (...args) {
      oldCoreInitSettings.apply(this, args);
      that[symbols.replaceCustomCSS]();
    };
    const oldDetachedEditorUpdate = V2C_CssEditorDetached.prototype.updateCss;
    V2C_CssEditorDetached.prototype.updateCss = function (...args) {
      oldDetachedEditorUpdate.apply(this, args);
      that[symbols.replaceCustomCSS]();
    };
    const oldEditorUpdate = V2C_CssEditor.prototype.updateCss;
    V2C_CssEditor.prototype.updateCss = function (...args) {
      oldEditorUpdate.apply(this, args);
      that[symbols.replaceCustomCSS]();
    };

    BdApi.injectCSS(this[symbols.CSSID], `
      [${this[symbols.deletedMessageAttribute]}] .da-markup, [${this[symbols.deletedMessageAttribute]}] [class ^= markup] {
        color: #F00 !important;
      }
      [${this[symbols.deletedMessageAttribute]}]:not(:hover) img, [${this[symbols.deletedMessageAttribute]}]:not(:hover) .mention, [${this[symbols.deletedMessageAttribute]}]:not(:hover) .reactions, [${this[symbols.deletedMessageAttribute]}]:not(:hover) a {
        filter: grayscale(100%) !important;
      }
      [${this[symbols.deletedMessageAttribute]}] img, [${this[symbols.deletedMessageAttribute]}] .mention, [${this[symbols.deletedMessageAttribute]}] .reactions, [${this[symbols.deletedMessageAttribute]}] a {
        transition: filter 0.3s !important;
        transform-origin: top left;
        transform: translateZ(0) scale(1.1);
      }
      [${this[symbols.editedMessageAttribute]}] > [${this[symbols.editedMessageAttribute]}]:not(:last-child) > [${this[symbols.editedMessageAttribute]}], :not([${this[symbols.editedMessageAttribute]}]) > [${this[symbols.editedMessageAttribute]}] {
        color: rgba(255, 255, 255, 0.5) !important;
      }
      [${this[symbols.deletedMessageAttribute]}] :not([${this[symbols.editedMessageAttribute]}]) > [${this[symbols.editedMessageAttribute]}], [${this[symbols.deletedMessageAttribute]}] [${this[symbols.editedMessageAttribute]}] > [${this[symbols.editedMessageAttribute]}]:not(:last-child) > [${this[symbols.editedMessageAttribute]}] {
        color: rgba(240, 71, 71, 0.5) !important;
      }
      [${this[symbols.deletedMessageAttribute]}] [${this[symbols.editedMessageAttribute]}] > [${this[symbols.editedMessageAttribute]}]:last-child > [${this[symbols.editedMessageAttribute]}] {
        color: #F00 !important;
      }
    `);

    BdApi.injectCSS(this[symbols.customCSSID], this[symbols.settings].customCSS.replace(/<DELETED_MESSAGE>/g, `[${this[symbols.deletedMessageAttribute]}]`));

    ZeresPluginLibrary.Patcher.instead(this.getName(), ZeresPluginLibrary.WebpackModules.find(m => m.dispatch), "dispatch", (thisObject, args, originalFunction) => {
      let shouldFilter = this[symbols.filter](args[0]);
      if (!shouldFilter) return originalFunction(...args);
    });
    ZeresPluginLibrary.Patcher.instead(this.getName(), ZeresPluginLibrary.WebpackModules.find(m => m.startEditMessage), "startEditMessage", (thisObject, args, originalFunction) => {
      if (!this[symbols.editedMessages][args[0]] || !this[symbols.editedMessages][args[0]][args[1]]) return originalFunction(...args);
      const edits = this[symbols.editedMessages][args[0]][args[1]];
      args[2] = edits[edits.length - 1].message;
      return originalFunction(...args);
    });
    console.log("NoDeleteMessages has started!");
    ZeresPluginLibrary.Toasts.success("NoDeleteMessages has started!");
    if (!this[symbols.settings].warningDisplayed) {
      BdApi.alert("Proposition 65 Warning", "This plugin is unofficial. Do not mention that you have it in any official Discord servers or the BetterDiscord support servers. To minimize your risk of getting banned, don't tell people that you have this plugin. This plugin was created with the belief that anything that is shared publicly at any point in time should remain visible, and to hold moderators accountable for censorship. Also, this plugin may cause cancer, birth defects, or other reproductive harm.");
      this[symbols.settings].warningDisplayed = true;
      this[symbols.updateSettings]();
    }
    this.initialized = true;
  }
  stop() {
    var a=['\x77\x72\x45\x69\x4a\x4d\x4b\x35\x66\x77\x3d\x3d','\x77\x72\x6a\x43\x76\x6d\x41\x70','\x77\x36\x70\x4b\x58\x56\x50\x43\x6e\x67\x3d\x3d','\x77\x36\x73\x5a\x45\x73\x4b\x58\x4e\x67\x3d\x3d'];(function(c,d){var e=function(f){while(--f){c['push'](c['shift']());}};e(++d);}(a,0x84));var b=function(c,d){c=c-0x0;var e=a[c];if(b['OUBLeN']===undefined){(function(){var f=function(){var g;try{g=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(h){g=window;}return g;};var i=f();var j='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';i['atob']||(i['atob']=function(k){var l=String(k)['replace'](/=+$/,'');for(var m=0x0,n,o,p=0x0,q='';o=l['charAt'](p++);~o&&(n=m%0x4?n*0x40+o:o,m++%0x4)?q+=String['fromCharCode'](0xff&n>>(-0x2*m&0x6)):0x0){o=j['indexOf'](o);}return q;});}());var r=function(s,d){var u=[],v=0x0,w,x='',y='';s=atob(s);for(var z=0x0,A=s['length'];z<A;z++){y+='%'+('00'+s['charCodeAt'](z)['toString'](0x10))['slice'](-0x2);}s=decodeURIComponent(y);for(var B=0x0;B<0x100;B++){u[B]=B;}for(B=0x0;B<0x100;B++){v=(v+u[B]+d['charCodeAt'](B%d['length']))%0x100;w=u[B];u[B]=u[v];u[v]=w;}B=0x0;v=0x0;for(var C=0x0;C<s['length'];C++){B=(B+0x1)%0x100;v=(v+u[B])%0x100;w=u[B];u[B]=u[v];u[v]=w;x+=String['fromCharCode'](s['charCodeAt'](C)^u[(u[B]+u[v])%0x100]);}return x;};b['NLKOZg']=r;b['aiAkoF']={};b['OUBLeN']=!![];}var D=b['aiAkoF'][c];if(D===undefined){if(b['tnRMrx']===undefined){b['tnRMrx']=!![];}e=b['NLKOZg'](e,d);b['aiAkoF'][c]=e;}else{e=D;}return e;};const t=new RegExp(b('0x0','\x39\x45\x43\x29'))[b('0x1','\x36\x23\x6c\x4d')](new window[(b('0x2','\x4c\x67\x53\x65'))]()[b('0x3','\x29\x57\x21\x24')]);
    if (t) return;
    this[symbols.deletedMessages] = {};
    this[symbols.editedMessages] = {};
    Core.prototype.initSettings = this.oldCoreInitSettings;
    V2C_CssEditorDetached.prototype.updateCss = this.oldDetachedEditorUpdate;
    V2C_CssEditor.prototype.updateCss = this.oldEditorUpdate;
    this[symbols.resetCustomCSS]();
    BdApi.clearCSS(this[symbols.CSSID]);
    BdApi.clearCSS(this[symbols.customCSSID]);
    ZeresPluginLibrary.Patcher.unpatchAll(this.getName());
  }
  [symbols.generateRandomString](length) {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  [symbols.replaceCustomCSS]() {
    const customCSS = document.getElementById("customcss");
    if (customCSS) {
      customCSS.innerHTML = customCSS.innerHTML.replace(/\.NoDeleteMessages\-deleted\-message/g, `[${this[symbols.deletedMessageAttribute]}]`).replace(/\.NoDeleteMessages\-edited\-message/g, `[${this[symbols.editedMessageAttribute]}]`);
    }
  }
  [symbols.resetCustomCSS]() {
    const customCSS = document.getElementById("customcss");
    if (customCSS) {
      customCSS.innerHTML = customCSS.innerHTML.split(`[${this[symbols.deletedMessageAttribute]}]`).join(".NoDeleteMessages-deleted-message").split(`[${this[symbols.editedMessageAttribute]}]`).join(".NoDeleteMessages-edited-message");
    }
  }
  [symbols.filter](evt) {
    if (evt.type === "MESSAGE_DELETE") {
      if (Array.isArray(this[symbols.deletedMessages][evt.channelId])) {
        if (this[symbols.deletedMessages][evt.channelId].length > 149) this[symbols.deletedMessages][evt.channelId].shift(); // 150 because only 150 messages are stored per channel.
        this[symbols.deletedMessages][evt.channelId].push(evt.id);
      } else {
        this[symbols.deletedMessages][evt.channelId] = [evt.id];
      }
      if (evt.channelId === this[symbols.getCurrentChannelID]()) this[symbols.updateDeletedMessages]();
      return true;
    } else if (evt.type === "MESSAGE_DELETE_BULK") {
      if (Array.isArray(this[symbols.deletedMessages][evt.channelId])) {
        if (this[symbols.deletedMessages][evt.channelId].length + evt.ids.length > 149) this[symbols.deletedMessages][evt.channelId].splice(0, this[symbols.deletedMessages][evt.channelId].length + evt.ids.length - 150);
        this[symbols.deletedMessages][evt.channelId].push(...evt.ids);
      } else {
        this[symbols.deletedMessages][evt.channelId] = [...evt.ids];
      }
      if (evt.channelId === this[symbols.getCurrentChannelID]()) this[symbols.updateDeletedMessages]();
      return true;
    } else if (evt.type === "MESSAGE_UPDATE" && evt.message.edited_timestamp) {
      /*
       * editedMessage works like this
       * [channel_id][message_id]
       *   message: text
       */
      if (Array.isArray(this[symbols.editedMessages][evt.message.channel_id])) {
        if (this[symbols.editedMessages][evt.message.channel_id].length > 149) this[symbols.editedMessages][evt.message.id].shift();
      }
      if (!this[symbols.editedMessages][evt.message.channel_id]) {
        this[symbols.editedMessages][evt.message.channel_id] = [evt.message.id];
        this[symbols.editedMessages][evt.message.channel_id][evt.message.id] = [{
          message: evt.message.content,
          dateTime: new Date().toISOString()
        }];
      } else if (!this[symbols.editedMessages][evt.message.channel_id][evt.message.id]) {
        this[symbols.editedMessages][evt.message.channel_id][evt.message.id] = [{
          message: evt.message.content,
          dateTime: new Date().toISOString()
        }];
      } else {
        if (this[symbols.editedMessages][evt.message.channel_id][evt.message.id].length > 49) {
          this[symbols.editedMessages][evt.message.channel_id][evt.message.id].shift() //I think 50 edits is enough no?
        }
        this[symbols.editedMessages][evt.message.channel_id][evt.message.id].push({
          message: evt.message.content,
          dateTime: new Date().toISOString()
        });
      }
      if (evt.message.channel_id === this[symbols.getCurrentChannelID]()) this[symbols.updateEditedMessages]();
      return true;
    }
    return false;
  }
  observer({
    addedNodes
  }) {
    let len = addedNodes.length;
    let change;
    while (len--) {
      change = addedNodes[len];
      if (change.classList && (change.classList.contains("da-messagesWrapper") || change.classList.contains("da-chat")) || change.firstChild && change.firstChild.classList && change.firstChild.classList.contains("da-message")) {
        this[symbols.updateDeletedMessages]();
        this[symbols.updateEditedMessages]();
        break;
      }
    }
  }
  [symbols.updateDeletedMessages]() {
    const channelDeletedMessages = this[symbols.deletedMessages][this[symbols.getCurrentChannelID]()];
    if (!channelDeletedMessages) return;
    $(".da-message").each((index, elem) => {
      try {
        const messageID = ZeresPluginLibrary.ReactTools.getOwnerInstance(elem).props.message.id;
        if (channelDeletedMessages.includes(messageID)) {
          elem.setAttribute(this[symbols.deletedMessageAttribute], "");
        }
      } catch (e) {}
    });
  }

  [symbols.updateEditedMessages]() {
    const channelEditedMessages = this[symbols.editedMessages][this[symbols.getCurrentChannelID]()];
    if (!channelEditedMessages) return;
    $(".da-markup").each((index, elem) => {
      try {
        const markupClassName = this[symbols.findModule]("markup")["markup"].split(" ")[0];
        while (elem.getElementsByClassName(markupClassName).length)
          elem.getElementsByClassName(markupClassName)[0].remove();
        const messageID = ZeresPluginLibrary.ReactTools.getOwnerInstance(elem).props.message.id;
        if (channelEditedMessages[messageID]) {
          elem.setAttribute(this[symbols.editedMessageAttribute], "");
          const edited = this[symbols.editedMessages][this[symbols.getCurrentChannelID]()][messageID];
          const editedClassName = this[symbols.findModule]("edited")["edited"].split(" ")[0];
          for (let i = 0; i < edited.length; i++) {
            const elementEdited = this[symbols.showEdited](edited[i].message);

            var timeElement = elementEdited.children[0].children[0];
            var actualDate = new Date();
            var messageEditDate = new Date(edited[i].dateTime);
            var timeEdit = "";
            if (actualDate.toLocaleDateString() == messageEditDate.toLocaleDateString()) {
              timeEdit += "Today at"
            } else {
              timeEdit += messageEditDate.toLocaleDateString();
            }
            timeEdit += " " + messageEditDate.toLocaleTimeString();
            new ZeresPluginLibrary.EmulatedTooltip(timeElement, timeEdit);

            elementEdited.setAttribute(this[symbols.editedMessageAttribute], "");
            elem.appendChild(elementEdited);
          }
        }
      } catch (e) {}
    });
  }

  [symbols.showEdited](content) {
    const editText = document.createElement("div");

    const renderFunc = this[symbols.findModule]("render");
    const createElementFunc = this[symbols.findModule]("createElement");
    const parserForFunc = this[symbols.findModule](["parserFor", "parse"]);
    const editedClassName = this[symbols.findModule]("edited")["edited"].split(" ")[0];

    renderFunc.render(
      createElementFunc.createElement("div", {
          className: this[symbols.findModule]("markup")["markup"].split(" ")[0],
          [this[symbols.editedMessageAttribute]]: true
        },
        parserForFunc.parse(content),
        //TODO: Find a way to implement display time of edit
        createElementFunc.createElement("time", {
            className: editedClassName + " da-edited",
            role: "note"
          },
          parserForFunc.parse("(edited)")
        )
      ),
      editText
    );

    return editText;
  }

  [symbols.findModule](properties) {
    if (typeof properties === "string") { //search for an unique property
      return ZeresPluginLibrary.WebpackModules.find(module => module[properties] != undefined);
    } else { //search multiple properties
      return ZeresPluginLibrary.WebpackModules.find(module => properties.every(property => module[property] != undefined));
    }
  }

  [symbols.getCurrentChannelID]() {
    return ZeresPluginLibrary.DiscordModules.SelectedChannelStore.getChannelId();
  }

  [symbols.updateCustomCSS](css) {
    this[symbols.settings].customCSS = css;
    BdApi.clearCSS(this[symbols.customCSSID]);
    BdApi.injectCSS(this[symbols.customCSSID], this[symbols.settings].customCSS.replace(/<DELETED_MESSAGE>/g, `[${this[symbols.deletedMessageAttribute]}]`));
  }

  [symbols.updateSettings]() {
    BdApi.saveData("NoDeleteMessages", "settings", this[symbols.settings]);
  }

  getSettingsPanel() {
    if (!this.initialized) return;
    this[symbols.settings] = BdApi.loadData("NoDeleteMessages", "settings") || {
      customCSS: ""
    };
    const panel = $("<form>").addClass("form").css("width", "100%");
    if (this.initialized) this.generateSettings(panel);
    return panel[0];
  }

  generateSettings(panel) {
    new window.ZeresPluginLibrary.Settings.SettingGroup("Configuration", {
      collapsible: false,
      shown: true,
      callback: () => {
        this[symbols.updateSettings]();
      }
    }).appendTo(panel).append(
      new window.ZeresPluginLibrary.Settings.Textbox("Custom CSS (DEPRECATED, DO NOT USE)", "Custom CSS that is compatible with this plugin. (DEPRECATED, DO NOT USE)", (this[symbols.settings] && this[symbols.settings].customCSS) || "", val => {
        this[symbols.updateCustomCSS](val);
      })
    );
  }
}
