
module.exports = class PROPERTY {
    parse(node) {
        this.key = new EXPRESSION();
        this.key.parse(node.key);
        this.computed = node.computed;
        if(node.value != null) {
            this.value = new EXPRESSION();
            this.value.parse(node.value);
        } else {
            this.value = null;
        }
        this.kind = node.kind;
        this.method = node.method;
        this.shorthand = node.shorthand;

    }
}

const EXPRESSION = require("./EXPRESSION");
