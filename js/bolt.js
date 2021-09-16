function boltCard() {

    let header = document.createElement('header');
    let title = document.createElement('h1');
    let titleContent = document.createTextNode(sport[5].name);
    let articletag = document.createElement('article');
    let privacy = document.createElement('section');
    privacy.classList.add('privacy');
    let pPrivacy = document.createElement('p');
    let birthDetails = document.createTextNode('He was born on' + sport[5].birthDatePlace);
    let family = document.createTextNode('He has a partner named ' + sport[5].spouse +
        '. He is father of ' + sport[5].children);

    let aside = document.createElement('aside');
    let pAside = document.createElement('p');
    let asideContent = document.createTextNode('He is retired and he is ' + sport[5].championships);
    let bio = document.createElement('section');

    let linkTag = document.createElement('a');
    linkTag.setAttribute("href", 'https://en.wikipedia.org/wiki/Usain_Bolt');
    bio.appendChild(linkTag);
    let car = document.createElement('section');
    car.classList.add('car');
    let img = document.createElement('img');
    img.setAttribute('src', sport[5].picture);

    let home = document.createElement('section');
    home.setAttribute('class', 'home');
    let homeLink = document.createElement('a');
    homeLink.setAttribute("href", '../index.html');

    title.appendChild(titleContent);
    header.appendChild(title);
    pPrivacy.appendChild(birthDetails, family);
    privacy.appendChild(pPrivacy);
    bio.appendChild(linkTag);
    articletag.appendChild(privacy);

}
console.log(boltCard());