// Gebruik een IIFE om de applicatie te omsluiten
(() => {

const projects = [
     {
        title: 'TRUNGNGUYENCOFFEE',
        synopsis: 'Opdracht: ontwikkel de rebranding van een streekproduct. Studente Graphic Design Emily Schmitz ontwikkelde \n \t\t een nieuwe look voor koffiemerk Trung Nguyen.',
        thumbnailUrl: 'https://dl.airtable.com/.attachments/d15b181fab6021b6cbc4be4cc4d05626/66f7b004/image_SchmitzEmily_BEURSWAND_015.jpg',
        // Random genereren van aantal likes
        likes: Math.floor(Math.random() * 100),
        // Random genereren van aantal views
        views: Math.floor(Math.random() * 200 + 100),
        created: new Date(1593512447000).toUTCString(),
        modified: new Date(1593516747000).toUTCString(),
            // Assets = array van objecten
            assets: [   
            {
                title: 'TRUNGNGUYENCOFFEE | Image 001',
                type: 'image',
                thumbnailUrl: 'https://dl.airtable.com/.attachments/8622bcea0f6aa6e99f191882725fdd6f/96f89297/image_SchmitzEmily_ADVERTENTIE_013.jpg',
            },
            {
                title: 'TRUNGNGUYENCOFFEE | Image 002',
                type: 'image',
                thumbnailUrl: 'https://dl.airtable.com/.attachments/7ed727040dc3f753c3c39c5967bf6527/ce185d47/image_SchmitzEmily_AUTOMAAT_014.jpg',
            },
            {
                title: 'TRUNGNGUYENCOFFEE | Image 003',
                type: 'image',
                thumbnailUrl: 'https://dl.airtable.com/.attachments/79cc5ce3c9e194bbd4345023f2b11b71/2ceb36e3/image_SchmitzEmily_BEURSWAND_015.jpg',
            }]
    },
    {
        title: 'EVENTAPP GHENT',
        synopsis: 'Hoe kunnen we promotie maken voor evenementen in Gent.',
        thumbnailUrl: 'https://dl.airtable.com/.attachments/481f4c3a1b28866a5d31d3dbf43d94ee/d9c96374/mockup.jpg',
        // Random genereren van aantal likes
        likes: Math.floor(Math.random() * 100),
        // Random genereren van aantal views
        views: Math.floor(Math.random() * 200 + 100),
        created: new Date(1591195234000).toUTCString(),
        modified: new Date(1591519157000).toUTCString(),
            // Assets = array van objecten
            assets: [   
            {
                title: 'EVENTAPP GHENT | Video 001',
                type: 'video',
                thumbnailUrl: 'https://youtu.be/37RftxZzauU',
            },
            {
                title: 'EVENTAPP GHENT | Image 001',
                type: 'image',
                thumbnailUrl: 'https://dl.airtable.com/.attachments/5454f511c27548ec3418590ebee4fe04/ade0fdee/EventApp.png',
            }]
    },
]

// Doorloop array van projecten
function showProjectsInConsole(projects)
{
    let tempstr = '';
    projects.forEach((p, index) => {
    tempstr += 
`=====================================================================================================================================
project ${index + 1}: \t ${p.title} 
=====================================================================================================================================
synopsis: \t ${p.synopsis}
thumbnail: \t ${p.thumbnailUrl}
Likes: \t \t ${p.likes}
Views: \t \t ${p.views}
Created at: \t ${p.created}
Modified at: \t ${p.modified}
------------------------------------------------------------------------------------------------------------------------------------
ASSETS
------------------------------------------------------------------------------------------------------------------------------------
${getStringForAssets(p.assets) }
`
    });
    return tempstr;
}

// Create a function to show assets in the message
function getStringForAssets (assets){
    let tempstr = '';
    assets.forEach((a, index) => {  
        tempstr += `Asset ${index + 1}: \t ${a.title} (type: ${a.type}) \n \t\t ${a.thumbnailUrl} 
`;  
    });
    return tempstr;
}


// Create a message
const mes = `
=====================================================================================================================================
|                                                       PORTFOLIO                                                                   |
${showProjectsInConsole(projects)}
`
// Gebruik slechts 1 console.log!
console.log(mes)

// Sluiten van IIFE
})();