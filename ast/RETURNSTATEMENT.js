import EXPRESSION from "./EXPRESSION";

export default class RETURNSTATEMENT{
    parse(node){
        this.argument = null;
        if(node.argument != null){
            this.argument = new EXPRESSION();
            this.argument.parse(node.argument);
        }
    }
}