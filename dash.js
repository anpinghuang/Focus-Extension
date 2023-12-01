// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners or other initialization code here
    document.getElementById('homeTab').addEventListener('click', function () {
        showTab('homeContent');
    });

    document.getElementById('aboutTab').addEventListener('click', function () {
        showTab('aboutContent');
    });

    document.getElementById('adTab').addEventListener('click', function () {
        showTab('adContent');
    });

    // Show the home tab by default
    showTab('homeContent');

    chrome.runtime.onInstalled.addListener(function (details) {
        if (details.reason === 'install') {
            // Extension was just installed
            displayWelcomeMessage();
        }
    });
});

function showTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.content').forEach(tab => {
        tab.style.display = 'none';
    });

    // Show the selected tab
    document.getElementById(tabId).style.display = 'block';
}

/* ========================= Block Websites ======================== */

document.addEventListener('DOMContentLoaded', function () {
    // Load blocked sites from storage
    chrome.storage.sync.get(["blockedSites"], function (result) {
        // Debugging: Log the initially loaded blockedSites
        result.blockedSites.forEach(function (site) {
            console.log("adding",site,"to list" );
            addItemToList(site, result.blockedSites);
        });
        console.log('Initially loaded blockedSites:', result.blockedSites);

        // Display the initially loaded blockedSites
        

        // Add event listener for the button
        document.getElementById('addButton').addEventListener('click', function () {
            // Debugging: Log the blockedSites before adding an item
            console.log('BlockedSites before adding:', result.blockedSites);
            addInputItem(result.blockedSites);
        });

        // Add event listener for the input field
        document.getElementById('inputText').addEventListener('keypress', function (event) {
            // Check if Enter key is pressed
            if (event.key === 'Enter') {
                // Debugging: Log the blockedSites before adding an item
                console.log('BlockedSites before adding:', result.blockedSites);
                addInputItem(result.blockedSites);
            }
        });
        //displayBlockedSites(result.blockedSites);
    });



    // Function to add item to the list and storage
    function addInputItem(blockedSites) {
        var inputText = document.getElementById('inputText').value;
        addItemToList(inputText, blockedSites);
        document.getElementById('inputText').value = ''; // Clear the input field
    }

    // Function to add item to the list and storage
    function addItemToList(item, blockedSites) {
        if (!Array.isArray(blockedSites)) {
            blockedSites = []; // Initialize as an empty array if not already an array
        }
        console.log("ITEM IS",item);
        if (item !== '') {
            // Add item to the list on the page
            const list = document.getElementById('inputList');
            const listItem = document.createElement('li');
            const bigdiv = document.createElement('div');
            bigdiv.className = 'websites';
            const trash = document.createElement('div');
            trash.className = 'trash';
            const trashSymbol = document.createElement('img');
            trashSymbol.src='images/trash-can-solid.svg';
            trashSymbol.alt='delete';

            listItem.textContent = item;
            bigdiv.appendChild(listItem);
            bigdiv.appendChild(trash);
            trash.appendChild(trashSymbol);
            inputList.appendChild(bigdiv);


            console.log("CREATED LIST ELEMNT??");

            trash.addEventListener('click', function () {
                // Remove the specific big div
                list.removeChild(bigdiv);

                // Remove the item from the blockedSites array
                const index = blockedSites.indexOf(item);
                if (index !== -1) {
                    blockedSites.splice(index, 1);

                    // Save the updated list to storage
                    chrome.storage.sync.set({ blockedSites: blockedSites }, function () {
                        // Debugging: Log the updated blockedSites
                        console.log('BlockedSites after removing:', blockedSites);
                    });
                }
            });
            

            if (!blockedSites.includes(item)) {
                // Save the updated list to storage
                blockedSites.push(item);
                chrome.storage.sync.set({ blockedSites: blockedSites }, function () {
                    // Debugging: Log the updated blockedSites
                    console.log('BlockedSites after adding:', blockedSites);
                });
            }
        }
    }

});




