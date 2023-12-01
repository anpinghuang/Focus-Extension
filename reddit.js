function changeContent() {
    // logged in
    try {
        //remove content feed
        const content = document.querySelector('div._3ozFtOe6WpJEMUtxDOIvtU');
        const background = document.querySelector('#AppRouter-main-content._1nxEQl5D2Bx2jxDILRHemb');
        content.style.display = 'none';
        background.style.display = 'none';
        // apply styles to search bar
        const nav = document.querySelector('div._2vkeRJojnV7cb9pMlPHy7d.a35Fm2MurU14xdNybLiZp');
        nav.style.height = '100vh';
        nav.style.marginTop = 'auto';
        nav.style.marginBottom = 'auto';
    } catch (error) {
        console.log(error.message);
    }

    // logged out reddit
    try {
        // remove content feed
        content = document.querySelector('body > shreddit-app > div');
        content.style.display = 'none';
        // apply styles to search bar
        const nav = document.querySelector('body > shreddit-app > reddit-header-large > reddit-header-action-items > header > nav');
        nav.style.height = '100vh';
    } catch (error) {
        console.log(error.message);
    }
}

function reverseElementModifications() {
    // reverse search bar on logged in 
    try {
        const navLoggedIn = document.querySelector('div._2vkeRJojnV7cb9pMlPHy7d.a35Fm2MurU14xdNybLiZp');
        navLoggedIn.style.height = 'initial';
        navLoggedIn.style.marginTop = 'initial';
        navLoggedIn.style.marginBottom = 'initial';

    } catch (error) {
        console.log(error.message);
    }

    //reverse search bar on logged out
    try {
        const nav = document.querySelector('body > shreddit-app > reddit-header-large > reddit-header-action-items > header > nav');
        nav.style.height = 'initial';
    } catch (error) {
        console.log(error.message);
    }
}


function isRedditHomepage() {
    return window.location.href === 'https://www.reddit.com/';
}

// Function to handle DOM changes
function handleDOMChanges(mutations) {
    // functions to add on homepage
    changeContent();
}

// Observe changes to the DOM on initial load only if it's the homepage
if (isRedditHomepage()) {
    const observer = new MutationObserver(handleDOMChanges);
    observer.observe(document.body, { childList: true, subtree: true });

    // Apply styles and remove recommended videos when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', () => {
        changeContent();
    });

    // Listen for the 'yt-navigate-finish' event to handle navigation without page reload
    document.addEventListener('popstate', () => {
        // Remove the previous observer to avoid multiple observers
        observer.disconnect();

        // Reverse element modifications if not on the homepage
        if (!isRedditHomepage()) {
            reverseElementModifications();
        }

        // Observe changes to the DOM on new page load only if it's the homepage
        if (isRedditHomepage()) {
            observer.observe(document.body, { childList: true, subtree: true });

            // Apply styles and remove recommended videos when the DOM is fully loaded
            document.addEventListener('DOMContentLoaded', () => {
                changeContent();
            });
        }
    });
} else {
    // Reverse element modifications if not on the homepage
    reverseElementModifications();
}