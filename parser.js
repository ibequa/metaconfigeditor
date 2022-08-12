function readSingleFile(e) {
    let file = e.target.files[0];
    if (!file) {
        return;
    }
    let reader = new FileReader();
    reader.onload = function(e) {
        let contents = e.target.result;
        onFileContents(contents);
    };
    reader.readAsText(file);
}

function onFileContents(contents) {
    new Parser(contents);
}

document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);


simpleTypes = {};

nodes = [];

function parse(contents) {
}

class Utils {
    getHeader(str) {
        const re = /(\w+)\s*=\s*"(\w+)"\s*/g;
        const result = {};
        let match;
        while ((match = re.exec(str)) !== null) {
            result[match[1]] = match[2];
        }
        return result;
    }

    getXsdType(str) {

    }
}


parserSimpleType = (contents) => {

}

parserComplexType = (node) => {
}
