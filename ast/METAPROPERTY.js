export default class METAPROPERTY{
    parse(node){
        this.meta = new IDENTIFIER();
        this.meta.parse(node.meta);
        this.property = new IDENTIFIER();
        this.property.parse(node.property);
    }
}