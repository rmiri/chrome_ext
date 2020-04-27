const button = document.getElementById('change')
var word = "Bolsonaro",
    queue = [document.body],
    curr
;

const change = false;

   
    while (curr = queue.pop()) {
        if (!curr.textContent.match(word)) continue;
        for (var i = 0; i < curr.childNodes.length; ++i) {
            switch (curr.childNodes[i].nodeType) {
                case Node.TEXT_NODE : // 3
                    if (curr.childNodes[i].textContent.match(word)) {

                        var str = curr.childNodes[i].textContent;

    curr.childNodes[i].textContent = str.replace(word,'Bostanaro')
                        // you might want to end your search here.
                    }
                    break;
                case Node.ELEMENT_NODE : // 1
                    queue.push(curr.childNodes[i]);
                    break;
            }
        }
    }
