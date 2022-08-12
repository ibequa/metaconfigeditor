// class Section {
//     constructor(schema) {
//         this.schema = schema;
//     }
//
//     addChild(...sections) {
//         sections.forEach(section => {
//             this.children.push(section);
//         })
//         return this;
//     }
//
//     setArg(argname, argValue) {
//         let index = this.args.findIndex(arg => arg[0] === argname);
//         this.args[index] = argValue;
//     }
//
//     getArg(argname) {
//         let index = this.args.findIndex(arg => arg[0] === argname);
//         return this.args[index];
//     }
//
//     getValue() {
//         return this.value;
//     }
//
//     getSection(title) {
//         let index = this.children.findIndex(child => child.title === title);
//         return this.children[index];
//     }
//
//     dump() {
//         let sectionArgs = ``;
//         this.args.forEach(arg => {
//             sectionArgs += `${arg[0]}="${arg[1]}" `;
//         });
//         sectionArgs = sectionArgs.slice(0, -1);
//
//         let sectionStart = ``;
//         if (sectionArgs.length > 0) {
//             sectionStart = `<${this.title} ${sectionArgs}>`;
//         } else {
//             sectionStart = `<${this.title}>`;
//         }
//
//         let sectionBody = ``;
//         if (this.children.length === 0) {
//             sectionBody = this.value !== undefined ? `${this.value}` : ``;
//         } else {
//             sectionStart += `\n`;
//             this.children.forEach(child => {
//                 let childDump = child.dump();
//                 childDump = childDump
//                     .split(`\n`)
//                     .reduce((prev, cur) => prev + `\n` + `\t` + cur);
//                 sectionBody += `\t${childDump}\n`;
//             });
//         }
//
//         let sectionEnd = `</${this.title}>`;
//
//         return sectionStart + sectionBody + sectionEnd;
//     }
// }
