// Array of award data
const awards = [
    {
        image: './images/awards/mos-2017-ppt-award.jpg',
        icon: 'fa-solid fa-file-powerpoint',
        title: 'Microsoft Office Specialist for Office Powerpoint 2013 - Certification',
        year: 'September 19, 2017',
    },
    {
        image: './images/awards/magis-award.jpg',
        icon: 'fa-solid fa-computer',
        title: 'Quarterly Magis Olympiad in Computer (3rd Place) - Award',
        year: 'November 16, 2018',
    },
    {
        image: './images/awards/mos-2019-word-award.jpg',
        icon: 'fa-solid fa-file-word',
        title: 'Microsoft Office Specialist for Office Word 2013 - Certification',
        year: 'February 20, 2019',
    },
    {
        image: './images/awards/sysad-award.png',
        icon: 'devicon-linux-plain',
        title: 'System Administration - Certification',
        year: 'June 25, 2022',
    },
    {
        image: './images/awards/java-award.png',
        icon: 'devicon-java-plain',
        title: 'Java Foundations - Certification',
        year: 'June 25, 2022',
    },
    {
        image: './images/awards/dastral-award.png',
        icon: 'fas fa-diagram-project',
        title: 'Data Structures and Algorithm - Award',
        year: 'January 31, 2023',
    },
    {
        image: './images/awards/oop-award.png',
        icon: 'fa fa-code',
        title: 'Object-Oriented Programming - Award',
        year: 'January 31, 2023',
    },
    {
        image: './images/awards/ccdt-award.png',
        icon: 'fa fa-code',
        title: 'CCDT Certified Programmer Level 2 - Certification',
        year: 'January 31, 2023',
    },
    {
        image: './images/awards/csharp-award.png',
        icon: 'devicon-csharp-plain',
        title: 'Foundational C# with Microsoft - Certification',
        year: 'February 8, 2024',
    },
    {
        image: './images/awards/fit-acad-sap-one-award.png',
        icon: 'devicon-googlecloud-plain',
        title: 'SAP Business One - SAP Advance - Certification',
        year: 'February 29, 2024',
    },
    {
        image: './images/awards/codefest-award.jpg',
        icon: 'fa-solid fa-code',
        title: 'CodeFest Mobile App Hackathon (1st Runner Up) - Award',
        year: 'March 13, 2024',
    }
];

// Function to dynamically generate the timeline items
function generateTimeline() {

    const awardsCount = awards.filter(award => award.title.includes('Award')).length;
    const certificatesCount = awards.filter(award => award.title.includes('Certification')).length;

    const container = document.getElementsByClassName('timeline-container')[0];
    const awardSpan = document.getElementById('awardSpan');
    const certSpan = document.getElementById('certSpan');
    
    awardSpan.innerHTML = awardSpan.innerHTML.replace('%aw', awardsCount + " Award" + (awardsCount == 1 ? "" : "s"));
    certSpan.innerHTML = certSpan.innerHTML.replace('%cert',  certificatesCount + " Certification" + (certificatesCount == 1 ? "" : "s"));
    // Loop through the awards array to create timeline items
    awards.forEach(award => {
        const timelineItem = document.createElement('div');
        timelineItem.classList.add('timeline-item');
        timelineItem.setAttribute('onclick', `showImage('${award.image}')`);

        const timelineIcon = document.createElement('div');
        timelineIcon.classList.add('timeline-icon');
        const icon = document.createElement('i');
        const iconClasses = award.icon.split(' ');
    
        iconClasses.forEach(iconClass => {
            icon.classList.add(iconClass);
        });
        timelineIcon.appendChild(icon);

        const awardTitle = document.createElement('div');
        awardTitle.classList.add('award-title');
        awardTitle.innerText = award.title;

        const awardYear = document.createElement('div');
        awardYear.classList.add('award-year');
        awardYear.innerText = award.year;

        timelineItem.appendChild(timelineIcon);
        timelineItem.appendChild(awardTitle);
        timelineItem.appendChild(awardYear);

        container.appendChild(timelineItem);
    });
}


document.addEventListener("DOMContentLoaded", function () {


    generateTimeline();

    const timelineItems = document.querySelectorAll(".timeline-item");
    const modal = document.getElementById("imageModal");
    const closeButton = modal.querySelector(".close");
    var modalTitle = document.getElementById("modalTitle");
    var modalYear = document.getElementById("modalYear");

    // Handle click on timeline items


    // Close modal
    closeButton.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Close modal on outside click
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });
    timelineItems.forEach((item) => {
        item.addEventListener("click", () => {
            modalTitle.innerText = item.getElementsByClassName("award-title")[0].innerText;
            modalYear.innerText = item.getElementsByClassName("award-year")[0].innerText;
            modal.classList.add("show");
        });
    });
});