'use strict';

// Create a floating panel to contain buttons
const buttonPanel = document.createElement('div');
buttonPanel.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    display: flex;
    gap: 10px;
`;

// Create and style the copy button
const copyButton = document.createElement('button');
copyButton.textContent = 'Copy AC';
copyButton.style.cssText = `
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    display: none;
    font-size: 12px;
`;

// Create and style the start button
const startButton = document.createElement('button');
startButton.textContent = 'Start';
startButton.style.cssText = `
    padding: 5px 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 12px;
`;

// Create and style the exchange button
const exchangeButton = document.createElement('button');
exchangeButton.textContent = 'Exchange';
exchangeButton.style.cssText = `
    padding: 5px 10px;
    background-color: #ffc107;
    color: black;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 12px;
`;

// Add buttons to panel and panel to page
buttonPanel.appendChild(startButton);
buttonPanel.appendChild(exchangeButton);
buttonPanel.appendChild(copyButton);
document.body.appendChild(buttonPanel);

// Function to check response and show/hide buttons
function checkResponse() {
    const responseElement = document.querySelector('#exchangeResponse > div');
    if (responseElement) {
        try {
            const response = JSON.parse(responseElement.innerText);
            if (response.error === 'invalid_grant') {
                exchangeButton.style.display = 'none';
                copyButton.style.display = 'none';
                return;
            }
            if (response.access_token) {
                copyButton.style.display = 'block';
                return;
            }
        } catch (e) {
            // Not a valid JSON
        }
    }
    copyButton.style.display = 'none';
}

// Add click event for start button
startButton.addEventListener('click', function() {
    const targetButton = document.querySelector("#content > div > div:nth-child(2) > main > div > div.playground-content > div:nth-child(1) > div > div > div > button");
    if (targetButton) {
        targetButton.click();
        // Show exchange button after authorization
        exchangeButton.style.display = 'block';
    }
});

// Add click event for exchange button
exchangeButton.addEventListener('click', function() {
    const targetButton = document.querySelector("#content > div > div:nth-child(2) > main > div > div.playground-content > div:nth-child(2) > div > div.code-box > div.code-box-content > button");
    if (targetButton) {
        targetButton.click();
    }
});

// Add click event listener to copy access token
copyButton.addEventListener('click', function() {
    const responseElement = document.querySelector('#exchangeResponse > div');
    if (responseElement) {
        try {
            const response = JSON.parse(responseElement.innerText);
            if (response.access_token) {
                navigator.clipboard.writeText(response.access_token);
                
                // Visual feedback
                const originalText = copyButton.textContent;
                copyButton.textContent = 'Copied!';
                copyButton.style.backgroundColor = '#28a745';
                
                setTimeout(() => {
                    copyButton.textContent = originalText;
                    copyButton.style.backgroundColor = '#007bff';
                }, 2000);
            }
        } catch (e) {
            console.error('Failed to parse response:', e);
        }
    }
});

// Watch for changes in the response element
const observer = new MutationObserver(() => {
    const targetNode = document.querySelector('#exchangeResponse');
    if (targetNode) {
        // Start observing the response element if found
        observer.disconnect(); // Stop observing body
        observer.observe(targetNode, { childList: true, subtree: true, characterData: true });
        checkResponse();
    }
});

// Start by observing the body for the response element to appear
observer.observe(document.body, { childList: true, subtree: true });

// Initial check
checkResponse();

// Initialize exchange button display
exchangeButton.style.display = 'block'; 