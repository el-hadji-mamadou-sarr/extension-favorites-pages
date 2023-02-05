const TopSitesList = document.getElementById("top-sites-list");

chrome.topSites.get().then((data)=>{
    data.map(({title, url}, index)=>{
        const newli = document.createElement('li');
        newli.setAttribute('id', 'li-'+index.toString())
        newli.innerHTML = `
                            <p> <strong> ${title}</strong></p>
                            <span> url: ${url}</span>
        `;

        TopSitesList.appendChild(newli);
        newli.addEventListener('click',()=>{
            chrome.tabs.create({url:url});
        })
    });
});




