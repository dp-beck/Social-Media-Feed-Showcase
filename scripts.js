// NOTES
/*
1. Programatically load partner info from a Google Sheet - May need to manually construct a list of social media pages
2. Could set up a Google Apps Script to periodically change which partners are featured

So, I would need the same library I used for the Submissions Page to load data from Google Sheets. SheetRock JS
Then I would iterate over that list to create the iframes for each partner dynamically
*/
// 0, 1, 2, 3, 4, 5 --   0, 1, 2 OR 4, 0, 1 OR 3, 4, 0

// Carousel Controls
let centerIndex = 1;
showItems(centerIndex);

// Next/Previous controls
function plusSlides(n) {
    showItems(centerIndex += n);
}

function showItems(n) {
    let carouselItems = document.getElementsByClassName("carousel-item");
    if (n === carouselItems.length) { centerIndex = 0 }
    if (n < 0) { centerIndex = carouselItems.length - 1 }
    for (let i = 0; i < carouselItems.length; i++) {
        carouselItems[i].style.display = "none";
        carouselItems[i].classList.remove("active-left", "active-center", "active-right");  
    }
    carouselItems[centerIndex].style.display = "block";
    carouselItems[centerIndex].classList.add("active-center");
    
    if (centerIndex === 0) {
        carouselItems[carouselItems.length - 1].style.display = "block";
        carouselItems[carouselItems.length - 1].classList.add("active-left");
    } else {
        carouselItems[centerIndex - 1].style.display = "block";
        carouselItems[centerIndex - 1].classList.add("active-left");
    }

    if (centerIndex === carouselItems.length - 1) {
        carouselItems[0].style.display = "block";
        carouselItems[0].classList.add("active-right");
    } else {
        carouselItems[centerIndex+1].style.display = "block";
        carouselItems[centerIndex+1].classList.add("active-right");
    }
}


// IFRAME CREATION
const urls = ["https://www.facebook.com/profile.php?id=100063727233053",
"https://www.facebook.com/GLECardinals",
"https://www.facebook.com/campbellridgeES"
];

function createIframe(url) {
        const base = `https://www.facebook.com/plugins/page.php?href=${url}&tabs=timeline&width=275&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="275" height="800" style="border:none;overflow:hidden" scrolling="yes" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share`;
        const iframe = document.createElement('iframe');
        iframe.src = base;
        return iframe;
}

function addIframe() {
    const container= document.getElementById('showcase');
    urls.forEach(url => {
        const iframe = createIframe(url);
        const listItem = document.createElement('li');
        listItem.appendChild(iframe);
        container.appendChild(listItem);
    });

}

// addIframe();
