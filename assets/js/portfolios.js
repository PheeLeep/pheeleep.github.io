const portfolios = [
    {
        image: './images/projects/gasera.png',
        icon: 'devicon-csharp-plain',
        title: 'Gasera',
        type: [
            { text: 'Personal', icon: 'fa-solid fa-user' },
            { text: 'Proof of Concept', icon: 'fa-solid fa-flask' },
        ],
        link: 'https://github.com/PheeLeep/Gasera-Project',
        description: `Gasera is a program that acquires hash and GUID used for password control in Shadow Defender, for password recovery.`,
    },
    {
        image: './images/projects/libcheck.png',
        icon: 'devicon-csharp-plain devicon-sqlite-plain',
        title: 'LibCheck',
        type: [
            { text: 'Project', icon: 'fa-solid fa-project-diagram' },
            { text: 'Open Source', icon: 'fa-solid fa-code-branch' },
        ],
        link: 'https://github.com/PheeLeep/LibCheck',
        description: 'An open source library book borrowing and returning software that gives a librarian an ease of use and manage of books and records.',
    },
    {
        image: './images/projects/padetect.png',
        icon: 'devicon-csharp-plain',
        title: 'PaDetect',
        type: [
            { text: 'Personal', icon: 'fa-solid fa-user' },
            { text: 'Proof of Concept', icon: 'fa-solid fa-flask' },
        ],
        link: 'https://github.com/PheeLeep/PaDetect',
        description: 'PaDetect (Pad Detect) is a utility program that checks objects for possible binary padding.',
    }, 
    {
        image: './images/projects/eris.png',
        icon: 'devicon-visualbasic-plain',
        title: 'Eris',
        type: [
            { text: 'Personal', icon: 'fa-solid fa-user' },
            { text: 'Proof of Concept', icon: 'fa-solid fa-flask' },
        ],
        link: 'https://github.com/PheeLeep/Eris',
        description: 'A PoC (Proof of Concept) .NET-based file padding program used to manipulate file\'s size by enlarging with random garbage data, or padding, without affecting its functionality.',
    }
];


function generatePortfolio(containerSelector, typeFilter, numberOfItems) {
    const container = document.querySelector(containerSelector);

    const portfolioSlice = typeFilter === 'all' ? portfolios : portfolios.filter((s) => 
        s.type.some(tag => tag.text === typeFilter)
    );
    const itemsToRender = portfolioSlice.slice(0, numberOfItems);

    itemsToRender.forEach((portfolio) => {
        const card = document.createElement('div');
        card.classList.add('custom-card');

        const link = document.createElement('a');
        link.classList.add('custom-card-link');
        link.href = portfolio.link;
        link.target = '_blank';

        const imageDiv = document.createElement('div');
        imageDiv.classList.add('custom-card-image');
        const img = document.createElement('img');
        img.src = portfolio.image;
        img.alt = portfolio.title;
        imageDiv.appendChild(img);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('custom-card-content');

        const titleIconsDiv = document.createElement('div');
        titleIconsDiv.classList.add('custom-card-title-icons');

        const title = document.createElement('h3');
        title.classList.add('custom-card-title');
        title.innerText = portfolio.title;

        const iconContainer = document.createElement('div');
        iconContainer.classList.add('custom-card-icons');
        
        portfolio.icon.split(' ').forEach((iconClass) => {
            const icon = document.createElement('i');
            icon.classList.add(iconClass);
            iconContainer.appendChild(icon); 
        });
        
        titleIconsDiv.appendChild(title);
        titleIconsDiv.appendChild(iconContainer);
        

        const tagsDiv = document.createElement('div');
        tagsDiv.classList.add('custom-card-tags');

        portfolio.type.forEach((tag) => {
            const tagElement = document.createElement('span');
            tagElement.classList.add('custom-card-tag');

            const tagIcon = document.createElement('i');
            tag.icon.split(' ').forEach((iconClass) => {
                tagIcon.classList.add(iconClass);
            });

            const tagText = document.createTextNode(` ${tag.text}`);
            tagElement.appendChild(tagIcon);
            tagElement.appendChild(tagText);

            tagsDiv.appendChild(tagElement);
        });

        const description = document.createElement('p');
        description.classList.add('custom-card-text');
        description.innerText = portfolio.description;

        contentDiv.appendChild(titleIconsDiv);
        contentDiv.appendChild(tagsDiv);
        contentDiv.appendChild(description);

        link.appendChild(imageDiv);
        link.appendChild(contentDiv);
        card.appendChild(link);
        container.appendChild(card);
    });
}

function getCount(typeFilter) {
    return portfolios.filter((f) => f.type.some(tag => tag.text == typeFilter)).length;
}