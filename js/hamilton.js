function translate() {

    let parent = document.querySelector('section');

    for (let elt of sport) {

        let title = document.createTextNode(elt.name);
        let date = document.createTextNode(elt.birthDate);
        let place = document.createTextNode(elt.birthPlace);
        let country = document.createTextNode(elt.country);
        let partner = document.createTextNode(elt.spouse);
        let kids = document.createTextNode(elt.children);
        let league = document.createTextNode(elt.competitionLeague);
        let team = document.createTextNode(elt.Team);
        let palmares = document.createTextNode(elt.championships);
        let paras = document.createElement('p');
        parent.appendChild(title);
        paras.appendChild(date);
        paras.appendChild(place);
        paras.appendChild(country);
        paras.appendChild(partner);
        paras.appendChild(kids);
        paras.appendChild(team);
        paras.appendChild(league);
        paras.appendChild(palmares);
        parent.appendChild(paras);

    }
}
translate();