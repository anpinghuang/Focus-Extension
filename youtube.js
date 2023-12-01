
// Function to apply styles to the search bar
function applyStylesToSearchBar() {
    const searchBar = document.querySelector('#center.style-scope.ytd-masthead');

    if (searchBar !== null) {
        searchBar.style.position = 'relative';
        searchBar.style.left = '7vw';
        searchBar.style.top = '30vh';
    }
}


function homepageModify() {
    console.log("HOMEPAGE MODIFY CALLED");
    applyStylesToSearchBar();
    removeRecommendedVideos();
    modifyLogo();
}

function modifyLogo() {
    console.log("MODIFY LOGO CALLED")
    const original = document.querySelector('#logo');

    if (original) {
        original.remove();
    }
}

function blockShorts() { // gets called numerous times
    console.log("BLOCK SHORTS CALLED");
    // shorts mini icon
    const minishorts = document.querySelector('#items > ytd-mini-guide-entry-renderer:nth-child(2)');
    const shorts = document.querySelector('#items > ytd-guide-entry-renderer:nth-child(2)');
    if (minishorts !== null) { 
        minishorts.remove();
    }
    if (shorts !== null) { 
        shorts.remove();
    }
}

function insertImage() {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Check if the target element has been added or modified
          const bar = document.querySelector('#center.style-scope.ytd-masthead');
          if (bar) {
  
            const imageSrc = 'https://freelogopng.com/images/all_img/1656504144youtube-logo-png-white.png';
            const altText = 'Alternative Text for the Image';
  
            const fragment = document.createDocumentFragment();
  
            const image = document.createElement('img');
            image.src = imageSrc;
            image.alt = altText;
            image.style.display = 'block';
            image.style.marginLeft = 'auto';
            image.style.marginRight = 'auto';
            image.style.width = '400px';
            image.style.position = 'absolute';
            image.style.marginTop = '0';
            image.style.right = '12vw';
            image.style.bottom = '150%';
  
            fragment.appendChild(image);
  
            bar.appendChild(fragment);
  
            // Disconnect the observer once modifications are made
            observer.disconnect();
          }
        }
      }
    });
  
    // Start observing changes in the DOM
    observer.observe(document.body, { childList: true, subtree: true });
  }

// Function to remove recommended videos
function removeRecommendedVideos() {
    console.log("REMOVE VIDEOS CALLED");
    const recommendedVideos = document.querySelectorAll('ytd-rich-grid-renderer');
    recommendedVideos.forEach(video => {
        video.remove();
    });
}

// Function to handle DOM changes
function handleDOMChanges(mutations) {
    homepageModify();
    blockShorts();
}

// Function to reverse element modifications
function reverseElementModifications() {
    const searchBar = document.querySelector('#center.style-scope.ytd-masthead');

    if (searchBar) {
        searchBar.style.position = 'initial';
        searchBar.style.left = 'initial';
        searchBar.style.top = 'initial';
    }
}

// Check if the current page is the YouTube homepage
function isYouTubeHomepage() {
    return window.location.href === 'https://www.youtube.com/';
}

// Observe changes to the DOM on initial load only if it's the homepage
if (isYouTubeHomepage()) {
    const observer = new MutationObserver(handleDOMChanges);
    observer.observe(document.body, { childList: true, subtree: true });

    // Apply styles and remove recommended videos when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', () => {
        homepageModify();
        ///blockShorts(); /// REMOVE???
    });

    // Listen for the 'yt-navigate-finish' event to handle navigation without page reload
    document.addEventListener('yt-navigate-finish', () => {
        // Remove the previous observer to avoid multiple observers
        observer.disconnect();

        // Reverse element modifications if not on the homepage
        if (!isYouTubeHomepage()) {
            reverseElementModifications();
        }

        ////Observe changes to the DOM on new page load only if it's the homepage
        if (isYouTubeHomepage()) {
            observer.observe(document.body, { childList: true, subtree: true });

            // Apply styles and remove recommended videos when the DOM is fully loaded
            document.addEventListener('DOMContentLoaded', () => {
                homepageModify();
                blockShorts(); 
            });
        }
    });
} else {
    // Reverse element modifications if not on the homepage
    reverseElementModifications();
    blockShorts();
}

insertImage();
