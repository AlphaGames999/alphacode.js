function startPage(func){
    window.addEventListener('load', func);
}

function DOM_CL(func){
    document.addEventListener('DOMContentLoaded', func);
}

function createNode(n,tn=''){
    var m  = document.createElement(n),
        tm = document.createTextNode(tn);

    m.appendChild(tm);
    return m;
}

function renameHtmlTextNode(n, tn=''){
    n.innerHTML = tn;
}

function renameTextNode(n,tn=''){
    n.innerText = tn;
}

function renameValueTextNode(n,tn=''){
    n.value = tn;
}

function deleteNode(n,a=document.body){
    a.removeChild(n);
}

function appendNode(n,a=document.body){
    a.appendChild(n);
}

function selectNode(a){
    document.querySelector(a);
}

function selectAllNodes(a){
    document.querySelectorAll(a);
}

function addClassName(n,c){
    n.className = c;
}

function addAtt(n,a,v_a){
    n.setAttribute(a, v_a);
}

function addEvent(n,e,func){
    n.addEventListener(e, func);
}

function click(n, func) {
    addEvent(n, 'click', () => {
      func();
    });
}

function searchArray(a, p) {
    return a.indexOf(p);
}

startPage(() => {
    console.log('The page has been loaded successfully');
});
