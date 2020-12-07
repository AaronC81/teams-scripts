class ScriptUtils {
    static htmlToNode(str) {
        const template = document.createElement("template");
        template.innerHTML = str.trim();
        return template.content.firstChild;
    }    
}