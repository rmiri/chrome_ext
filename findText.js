var word = ["Coronavirus","coronavirus","corona"],
    queue = [document.body],
    curr
;

   
while (curr = queue.pop()) {
    for(var j = 0; j < word.length; j++) {
        if (!curr.textContent.match(word[j])) continue;
        for (var i = 0; i < curr.childNodes.length; ++i) {
            switch (curr.childNodes[i].nodeType) {
                case Node.TEXT_NODE : // 3
                   
                    if (curr.childNodes[i].textContent.match(word[j])) {
                    
                        var str = curr.childNodes[i].textContent;

                     curr.childNodes[i].textContent = str.replace(word[j],'Flowers')
                        // you might want to end your search here.
                    }
                    break;
                case Node.ELEMENT_NODE : // 1
                    queue.push(curr.childNodes[i]);
                    break;

            }}
        }
    }