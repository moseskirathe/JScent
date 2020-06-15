const EXPRESSION = require("./EXPRESSION");
const STATEMENT = require("./STATEMENT");
export default class WITHSTATEMENT {
    parse(node) {
        this.object = new EXPRESSION();
        this.object.parse(node.test);
        this.body = new STATEMENT();
        this.body.parse(node.body);
    }
}