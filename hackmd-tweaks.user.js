function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

// Right-Margin fix
addStyleString('.markdown-body { margin-right: auto!important}');
// Disable Comments Button
addStyleString('.ui-open-comments { display:none; }')
// Colorful buttons
addStyleString('.ui-delete-note:hover { background-color: #c9302c!important; color: white!important; }')
addStyleString('.ui-share-copy:hover { background-color: #5cb85c!important; color: white!important; }')
// Disable Changelogs + Announcements + Ads
addStyleString('.announcement-area, .announcement-label-area { display: none!important; }')
// Disable tooltips
addStyleString('.tooltip-inner, .tooltip-arrow { display: none!important; }')
