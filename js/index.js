function accesToCard() {

    let div = document.querySelector('div');
    let main = document.createElement('main');

    //loops on object "sport" containing sport celebreties.
    for (const elt of sport) {


        let section = document.createElement('section');
        let image = document.createElement('img');
        image.src = elt.picture;
        section.appendChild(image);

        let title = document.createElement('h1');
        title.innerText = elt.name;
        section.appendChild(title);

        let para = document.createElement('p');
        let birthDetails = document.createTextNode(' Was born on ' + elt.birthDate + ' in ' +
            elt.birthPlace + ' , ' + elt.country + '. ');
        let family = document.createTextNode(elt.name + ' is ' + elt.spouse +
            'and has' + elt.children + '. ');
        let profession = document.createTextNode(elt.name + ' competes in ' +
            elt.competitionLeague + ' for ' + elt.Team + ' and has ' + elt.championships);
        para.append(birthDetails, family, profession);
        section.appendChild(para);

        let aside = document.createElement('aside');
        let asideLink = document.createElement('a');
        asideLink.setAttribute("href", elt.biography);
        asideLink.innerHTML = 'Full biography';
        aside.appendChild(asideLink);
        section.appendChild(aside);

        main.appendChild(section);
    }
    div.appendChild(main);

}
accesToCard();