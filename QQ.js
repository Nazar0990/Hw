//Task1
class Circle {
    constructor(radius) { this._radius = radius; }
    get radius() { return this._radius; }
    set radius(value) { this._radius = value; }
    get diameter() { return this._radius * 2; }
    getArea() { return Math.PI * this._radius ** 2; }
    getLength() { return 2 * Math.PI * this._radius; }
}

const c = new Circle(10);
console.log(c.radius, c.diameter, c.getArea(), c.getLength());

//Task2
class HtmlElement {
    constructor(tagName, isSelfClosing = false, text = "") {
        this.tagName = tagName;
        this.isSelfClosing = isSelfClosing;
        this.text = text;
        this.attributes = [];
        this.styles = [];
        this.children = [];
    }
    setAttr(name, value) { this.attributes.push({name,value}); }
    setStyle(name, value) { this.styles.push({name,value}); }
    addChild(elem) { this.children.push(elem); }
    addChildStart(elem) { this.children.unshift(elem); }

    getHtml() {
        let attrs = this.attributes.length ? " " + this.attributes.map(a=>${a.name}="${a.value}").join(" ") : "";
        let styles = this.styles.length ?  style="${this.styles.map(s=>${s.name}: ${s.value};).join(" ")}" : "";
        let open = <${this.tagName}${attrs}${styles}>;
        if(this.isSelfClosing) return open;
        let inner = this.text;
        for(let child of this.children) inner += child.getHtml();
        return ${open}${inner}</${this.tagName}>;
    }
}

let wrapper = new HtmlElement("div");
wrapper.setAttr("id","wrapper");
wrapper.setStyle("display","flex");

function createBlock() {
    let block = new HtmlElement("div");
    block.setStyle("width","300px");
    block.setStyle("margin","10px");

    let h3 = new HtmlElement("h3", false, "What is Lorem Ipsum?");
    let img = new HtmlElement("img", true);
    img.setStyle("width","100%");
    img.setAttr("src","lipsum.jpg");
    img.setAttr("alt","Lorem Ipsum");

    let p = new HtmlElement("p");
    p.setStyle("text-align","justify");
    p.text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

    let a = new HtmlElement("a", false, " More...");
    a.setAttr("href","https://www.lipsum.com/");
    a.setAttr("target","_blank");
    p.addChild(a);

    block.addChild(h3);
    block.addChild(img);
    block.addChild(p);

    return block;
}

wrapper.addChild(createBlock());
wrapper.addChild(createBlock());
document.write(wrapper.getHtml());

//Task3
class CssClass {
    constructor(name){ this.name=name; this.styles=[]; }
    setStyle(name,value){ this.styles.push({name,value}); }
    removeStyle(name){ this.styles=this.styles.filter(s=>s.name!==name); }
    getCss(){ return .${this.name} { ${this.styles.map(s=>${s.name}: ${s.value};).join(" ")} }; }
}

// Task4
class HtmlBlock {
    constructor(root){ this.root=root; this.css=[]; }
    addCssClass(cssClass){ this.css.push(cssClass); }
    getCode(){
        let styles = "<style>";
        for(let c of this.css) styles += c.getCss();
        styles += "</style>";
        return styles + this.root.getHtml();
    }
}

let wrapClass = new CssClass("wrap"); wrapClass.setStyle("display","flex");
let blockClass = new CssClass("block"); blockClass.setStyle("width","300px"); blockClass.setStyle("margin","10px");
let imgClass = new CssClass("img"); imgClass.setStyle("width","100%");
let textClass = new CssClass("text"); textClass.setStyle("text-align","justify");

let root = new HtmlElement("div");
root.setAttr("id","wrapper");
root.setAttr("class","wrap");
function makeBlock2(){
    let b = new HtmlElement("div"); b.setAttr("class","block");
    let h3 = new HtmlElement("h3",false,"What is Lorem Ipsum?");
    let img = new HtmlElement("img",true); img.setAttr("class","img"); img.setAttr("src","lipsum.jpg"); img.setAttr("alt","Lorem Ipsum");
    let p = new HtmlElement("p"); p.setAttr("class","text");
    p.text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    let a = new HtmlElement("a",false," More..."); a.setAttr("href","https://www.lipsum.com/"); a.setAttr("target","_blank");
    p.addChild(a);
    b.addChild(h3); b.addChild(img); b.addChild(p);
    return b;
}

root.addChild(makeBlock2());
root.addChild(makeBlock2());

let htmlBlock = new HtmlBlock(root);
htmlBlock.addCssClass(wrapClass);
htmlBlock.addCssClass(blockClass);
htmlBlock.addCssClass(imgClass);
htmlBlock.addCssClass(textClass);

document.write(htmlBlock.getCode());