var src_event = null,
dragthis = null;

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
    src_event = e;
    
}
function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}
/*

var source;

function isbefore(a, b) {
    if (a.parentNode == b.parentNode) {
        for (var cur = a; cur; cur = cur.previousSibling) {
            if (cur === b) { 
                return true;
            }
        }
    }
    return false;
} 

function dragenter(e) {
    if (isbefore(source, e.target)) {
        e.target.parentNode.insertBefore(source, e.target);
    }
    else {
        e.target.parentNode.insertBefore(source, e.target.nextSibling);
    }
}

function dragstart(e) {
    source = e.target;
    e.dataTransfer.effectAllowed = 'move';
}*/