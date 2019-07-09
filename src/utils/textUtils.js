
module.exports = {
    calculateHeightWidth (text, fontname, fontsize, padding) {
        // Create dummy span
        let elem = document.createElement('span');
        elem.style.visibility = 'hidden';
        // Set font-size
        elem.style.fontSize = fontsize + 'px';
        // Set font-face / font-family
        elem.style.fontFamily = fontname;
        // Set padding
        if (padding) {
            elem.style.paddingTop = padding.top + 'px';
            elem.style.paddingRight = padding.right + 'px';
            elem.style.paddingBottom = padding.bottom + 'px';
            elem.style.paddingLeft = padding.left + 'px';
        }
        // Set text
        elem.innerHTML = text;
        document.body.appendChild(elem);
        // Get width NOW, since the dummy span is about to be removed from the document
        let w = elem.offsetWidth;
        let h = elem.offsetHeight;
        // Cleanup
        document.body.removeChild(elem);
        // All right, we're done
        return [h, ((text.length === 0) ? 0 : w)];
    }
};
