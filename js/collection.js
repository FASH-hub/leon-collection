const sport = [{
        name: "Lewis Hamilton",
        picture: 'images/Lewis.jpg',
        birthDate: '07/01/1985',
        birthPlace: 'Stevenage, England',
        country: 'England',
        spouse: "none",
        children: "none",
        competitionLeague: 'Formula1',
        Team: 'Merceds',
        championships: '7',
    },
    {
        name: "Kobe Bryant",
        picture: 'images/Kobe_Bryant.jpg',
        birthDate: '23/08/1978',
        birthPlace: 'Philadelphie, Pennsylvanie',
        country: 'United States of America',
        spouse: "Vanessa Bryant",
        children: [' Gianna Maria-Onore Bryant', 'Natalia Diamante Bryant',
            'Bianka Bella Bryant', 'Capri Kobe Bryant'
        ],
        competitionLeague: 'Premier League, football',
        Team: 'Manchester United',
        championships: '5',

    },
    {
        name: 'Cristiano Ronaldo',
        picture: 'images/Cristiano-Ronaldo.jpg',
        birthDate: '05/02/1985',
        birthPlace: 'Hospital Dr. Nélio Mendonça, Funchal',
        country: 'Portugal',
        spouse: 'Georgina Rodriguez',
        children: [' Cristiano Jr', ' Alana Martina dos Santos Aveiro', 'Eva Maria Dos Santos', 'Mateo Ronaldo'],
        competitionLeague: 'NBA',
        Team: 'Los Angeles Lakers',
        championships: ['5x golden ball', '6x championships', '5x uefa cl', '1x european champion', '1x european nations league champion'],
    },
    {
        name: 'Serena Williams',
        picture: 'images/serena.jpeg',
        birthDate: '26/09/1981',
        birthPlace: 'Saginaw, Michigan',
        country: 'United States of America',
        spouse: ' Alexis Ohanian',
        children: ' Alexis Olympia Ohanian Jr',
        competitionLeague: 'Tennis',
        Team: 'solo',
        championships: '23 Grand Chelem',

    },
    {
        name: 'Lionel Messi',
        picture: 'images/messi.jpg',
        birthDate: '24/06/1987',
        birthPlace: 'Rosario',
        country: 'Argentina',
        spouse: '  Antonella Roccuzzo',
        children: [' Mateo Messi Roccuzzo', 'Ciro Messi Roccuzzo', 'Thiago Messi'],
        competitionLeague: 'Ligue 1, football',
        Team: 'Paris Saint Germain',
        championships: ['6x golden ball', '10x championships', '4x uefa cl', '1x South American champion'],

    },
    {
        name: 'Usain Bolt',
        picture: 'images/Usain.jpg',
        birthDate: '21/08/1986',
        birthPlace: 'Sherwood Content',
        country: 'Jamaïque',
        spouse: ' Kasi Bennett',
        children: ['Olympia Lightning Bolt', 'Thunder Bolt', 'Saint Leo Bolt'],
        competitionLeague: 'Athletism, sprinter',
        Team: 'solo',
        championships: '8x gold olympic medals',

    },
    {
        name: 'Roger Federer',
        picture: 'images/federer.jpg',
        birthDate: '21/08/1981',
        birthPlace: 'Bâle',
        country: 'Switzeland',
        spouse: 'Miroslava Vavrinec',
        children: ['Myla Rose Federer', 'Lennart Federer', 'Leo Federer', ' Charlene Riva Federer'],
        competitionLeague: 'Tennis',
        Team: 'solo',
        championships: '20 Grand Chelem',

    },
    {
        name: "Lebron James",
        picture: 'images/lebron.jpg',
        birthDate: '30/12/1984',
        birthPlace: ' Akron, Ohio',
        country: 'United States of America',
        spouse: "Savannah James ",
        children: [' LeBron James Jr.', 'Bryce Maximus James', 'Zhuri James'],
        competitionLeague: 'NBA',
        Team: 'Los Angeles Lakers',
        championships: '4',

    },
    {
        name: 'Ronaldinho',
        picture: 'images/ronaldinho.jpg',
        birthDate: '21/03/1980',
        birthPlace: 'Porto Alegre, Rio Grande do Sul',
        country: 'Brazil',
        spouse: 'none',
        children: ' João de Assis Moreira',
        competitionLeague: 'Ligua, football',
        Team: 'Fc Barcelona',
        championships: ['1x golden ball', '2x championships', '2x uefa cl', '1x South American champion', '1x world cup champion'],

    },
    {
        name: 'Rafael Nadal',
        picture: 'images/nadal.jpg',
        birthDate: '03/06/1986',
        birthPlace: 'Manacor',
        country: 'Spain',
        spouse: 'Xisca Perello',
        children: 'none',
        competitionLeague: 'Tennis',
        Team: 'solo',
        championships: '20 Grand Chelem',

    },
];

function display() {
    let info = "";
    let date = "";
    for (let i = 0; i < sport.length; i++) {
        info = sport[i].name;
        date = sport[i].birthDate;
        console.log(info + " was born " + date);
    }

}
display();