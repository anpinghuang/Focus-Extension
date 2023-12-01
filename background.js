import { ublockBackground } from './js/background.js';
ublockBackground();

chrome.runtime.onInstalled.addListener(() => {
  // Set default blocked websites
  schedulePeriodicTask();
  chrome.storage.sync.set({ blockedSites: ["example.com", "tiktok.com", "instagram.com", "facebook.com", "reddit.com"] });
});

function schedulePeriodicTask() {
  setInterval(() => {
    console.log('Background script is alive!');
    // Add any periodic tasks you need to perform
  }, 1000); // Adjust the interval as needed (e.g., every 1 minute)
}

function getBlockedSites() {
  return new Promise((resolve) => {
    try {
      chrome.storage.sync.get(["blockedSites"], (result) => {
        const blockedSites = result.blockedSites || [];
        resolve(blockedSites);
      });
    } catch (error) {
      console.error("Error fetching blocked sites:", error);
      resolve([]); // Return an empty array or handle the error accordingly
    }
  });
}

/* the extension marks the tab for potential blocking. 
When the page finishes loading (onCompleted event), 
it checks if the tab was marked for blocking recently (within 5 seconds) 
and redirects to "blocked.html" if necessary. 
This way, the extension waits until the user presses enter before redirecting to "blocked.html".
*/
let pendingBlock = {}; // Keep track of pending blocks

chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
  const blockedSites = await getBlockedSites();
  const url = new URL(details.url);
  const hostname = url.hostname;

  const isBlocked = blockedSites.some((blockedSite) => {
    // Check if the hostname is equal to or includes the blocked site
    return (
      hostname === blockedSite ||
      hostname.endsWith(`.${blockedSite}`) ||
      hostname.includes(`.${blockedSite}`)
    );
  });

  if (isBlocked) {
    pendingBlock[details.tabId] = { url: details.url, timestamp: Date.now() };
  }
});

chrome.webNavigation.onCompleted.addListener((details) => {
  const blockInfo = pendingBlock[details.tabId];

  if (blockInfo && Date.now() - blockInfo.timestamp < 30000) {
    // Redirect to blocked.html only if the tab was marked for blocking recently
    const blockedUrl = chrome.runtime.getURL("blocked.html");
    const redirectUrl = `${blockedUrl}?originalUrl=${encodeURIComponent(blockInfo.url)}`;
    chrome.tabs.update(details.tabId, { url: redirectUrl });
  }

  // Cleanup pending block info
  delete pendingBlock[details.tabId];
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "closeTab") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, { code: "window.close();" });
    });
  }
});
