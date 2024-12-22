<form action="#" method="post">
    <label for="imgURL">image URL:</label>
    <input type="url" id="imgURL" />
    <label for="pageURL">page URL:</label>
    <input type="url" id="pageURL" />
    <button id="imgAdd">add image</button>
</form>
And the following JavaScript:

// a simple check to *try* and ensure valid URIs are used:
function protocolCheck(link) {
    var proto = ['http:', 'https:'];

    for (var i = 0, len = proto.length; i < len; i++) {
        // if the link begins with a valid protocol, return the link
        if (link.indexOf(proto[i]) === 0) {
            return link;
        }
    }

    // otherwise assume it doesn't, prepend a valid protocol, and return that:
    return document.location.protocol + '//' + link;
}

function createImage(e) {
    // stop the default event from happening:
    e.preventDefault();
    var parent = this.parentNode;

    /* checking the protocol (calling the previous function),
       of the URIs provided in the text input elements: */
    src = protocolCheck(document.getElementById('imgURL').value);
    href = protocolCheck(document.getElementById('pageURL').value);

    // creating an 'img' element, and an 'a' element
    var img = document.createElement('img'),
        a = document.createElement('a');

    // setting the src attribute to the (hopefully) valid URI from above
    img.src = src;

    // setting the href attribute to the (hopefully) valid URI from above
    a.href = href;
    // appending the 'img' to the 'a'
    a.appendChild(img);
    // inserting the 'a' element *after* the 'form' element
    parent.parentNode.insertBefore(a, parent.nextSibling);
}

var addButton = document.getElementById('imgAdd');

addButton.onclick = createImage;
