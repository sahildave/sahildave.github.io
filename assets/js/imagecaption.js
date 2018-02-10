$(document).ready(function() {
    var images= document.querySelectorAll("#autocaption img"), L = images.length,
    fig = document.createElement('figure'), 
    who, temp
    while(L){
        temp = fig.cloneNode(false);
        who = images[--L];
        alt = who.getAttribute("alt"); 
        // alt = alt.substring(14);
        who.parentNode.insertBefore(temp, who);
        content = document.createElement('figcaption')
        content.innerHTML = alt;
        temp.appendChild(who);  
        temp.appendChild(content);
    }
})