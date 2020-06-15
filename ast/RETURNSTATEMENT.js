
module.exports = class RETURNSTATEMENT{
    parse(node){
        this.loc = node.loc;
        this.argument = null;
        if(node.argument != null){
            this.argument = new EXPRESSION();
            this.argument.parse(node.argument);
        }
    }
}

const EXPRESSION = require("./EXPRESSION");
