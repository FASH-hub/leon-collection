function cardProvider() {

    let header = document.createElement('header');
    let title = document.createElement('h1');
    let titleContent = document.createTextNode(sport[1].name);
    title.appendChild(titleContent);
    header.appendChild(title);

    let articletag = document.createElement('article');

    let privacy = document.createElement('section');
    privacy.classList.add('privacy');
    let pPrivacy = document.createElement('p');
    let birthDetails = document.createTextNode('He was born on ' + sport[1].birthDate + ' in ' +
        sport[1].birthPlace + ' , ' + [sport[1].country] + ' . ' + ' He passed away on 26/01/2020 ');
    let family = document.createTextNode(' He was maried with ' + sport[1].spouse +
        'and was a father of' + sport[1].children);

    pPrivacy.append(birthDetails, family);
    privacy.appendChild(pPrivacy);


    let aside = document.createElement('aside');
    let pAside = document.createElement('p');
    pAside.innerText = ' He played for ' + sport[1].Team + ' in ' +
        sport[1].competitionLeague + ' and has ' + sport[1].championships;
    aside.appendChild(pAside);


    let bio = document.createElement('section');
    bio.classList.add('bio');
    let linkTag = document.createElement('a');
    linkTag.setAttribute("href", 'https://en.wikipedia.org/wiki/Kobe_Bryant');
    linkTag.innerHTML = 'Full biography';
    bio.appendChild(linkTag);


    let car = document.createElement('section');
    car.classList.add('car');
    let img = document.createElement('img');
    img.setAttribute('src', sport[1].picture);
    car.appendChild(img);


    let menu = document.createElement('section');
    menu.classList.add('class', 'menu');
    let homeLink = document.createElement('a');
    homeLink.setAttribute("href", '../index.html');
    homeLink.innerHTML = 'Home Page';
    menu.appendChild(homeLink);
    let lewisLink = document.createElement('a');
    lewisLink.href = '../html/hamilton.html';
    lewisLink.innerHTML = 'Lewis Hamilton';
    menu.appendChild(lewisLink);
    let kobeLink = document.createElement('a');
    kobeLink.href = '../html/kobe.html';
    kobeLink.innerHTML = 'Kobe Bryant';
    menu.appendChild(kobeLink);
    let federLink = document.createElement('a');
    federLink.href = '../html/federer.html';
    federLink.innerHTML = 'Roger Federer';
    menu.appendChild(federLink);
    let lebronLink = document.createElement('a');
    lebronLink.href = '../html/lebron.html';
    lebronLink.innerHTML = 'Lebron James';
    menu.appendChild(lebronLink);
    let serenaLink = document.createElement('a');
    serenaLink.href = '../html/serena.html';
    serenaLink.innerHTML = 'Serena Williams';
    menu.appendChild(serenaLink);
    let boltLink = document.createElement('a');
    boltLink.href = '../html/bolt.html';
    boltLink.innerHTML = 'Usain Bolt';
    menu.appendChild(boltLink);
    let nadalLink = document.createElement('a');
    nadalLink.href = '../html/nadal.html';
    nadalLink.innerHTML = 'Rafael Nadal';
    menu.appendChild(nadalLink);
    let messiLink = document.createElement('a');
    messiLink.href = '../html/messi.html';
    messiLink.innerHTML = 'Lionel Messi';
    menu.appendChild(messiLink);
    let cr7Link = document.createElement('a');
    cr7Link.href = '../html/cristiano.html';
    cr7Link.innerHTML = 'Cristiano Ronaldo';
    menu.appendChild(cr7Link);
    let ronniLink = document.createElement('a');
    ronniLink.href = '../html/ronaldinho.html';
    ronniLink.innerHTML = 'Ronaldinho';
    menu.appendChild(ronniLink);



    document.body.appendChild(header);
    articletag.appendChild(privacy);
    articletag.appendChild(aside);
    articletag.appendChild(bio);
    articletag.appendChild(car);
    articletag.appendChild(menu);
    document.body.appendChild(articletag);


}
cardProvider();