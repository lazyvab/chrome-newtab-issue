# chrome-newtab-issue
An example Chrome extension to showcase an issue where content script does not work as expected for the first time when navigated from chrome://newtab.

## Install

1. Download the repo zip from: https://github.com/lazyvab/chrome-newtab-issue/archive/refs/heads/master.zip
2. Extract the zip.
3. Go to [chrome://extensions](chrome://extensions) page.
4. Enable `Developer mode` from the top right corner of the page.
5. Click `Load unpacked` and select the extracted folder.

## Expectation
When a website is opened, it should change the page's background to yellow.

## Reproduce issue

1. Open https://example.com in a new tab.
2. The background of the page is not yellow.
3. Reload the page and see that the page's background changes to yellow.
