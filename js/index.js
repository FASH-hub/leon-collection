function accesToCard() {

    let div = document.querySelector('div');
    let nav = document.createElement('nav');
    //loops on object "sport" containing sport celebreties.
    for (const elt of sport) {

        let cardToLink = document.createElement('a');
        let linkVal = document.createTextNode('');

        //loops on object "links" containing differents links.
        for (const alink of links) {
            linkVal = alink.cardLink;
        }

        cardToLink.href = linkVal;
        console.log(cardToLink);
        cardToLink.innerHTML = elt.picture;
        nav.appendChild(cardToLink);

    }
    div.appendChild(nav);
    document.body.appendChild(div);
}
accesToCard();