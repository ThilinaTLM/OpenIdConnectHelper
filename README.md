# OpenID Connect Helper

A browser extension designed to automate and simplify interactions with the OpenID Connect playground at [openidconnect.net](https://openidconnect.net/).

![image](https://github.com/user-attachments/assets/e35abfc2-55cc-4a7c-b590-ee494d72b660)


## Features

- **Quick Authorization**: One-click authorization initiation
- **Token Exchange**: Streamlined token exchange process
- **Access Token Copy**: Easy access token copying to clipboard
- **Visual Feedback**: Clear button states and copy confirmations
- **Floating Controls**: Convenient, non-intrusive floating button panel

## Installation

1. Clone this repository or download the source code
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

## Usage

After installation, visit [openidconnect.net](https://openidconnect.net/). You'll see a floating panel in the top right corner with the following controls:

- **Start Button**: Initiates the authorization process
- **Exchange Button**: Performs the token exchange
- **Copy AC Button**: Appears after successful token exchange to copy the access token

## Technical Details

The extension consists of:
- `manifest.json`: Extension configuration and permissions
- `content.js`: Core functionality implementation
- Icons in multiple sizes (48px, 128px)

### Permissions
- `clipboardWrite`: Required for copying access tokens

### Content Script
The extension injects into `https://openidconnect.net/*` and provides automated interaction with the OpenID Connect playground interface.

## Development

To modify the extension:
1. Make your changes to the source files
2. Reload the extension in `chrome://extensions/`
3. Refresh the playground page to see your changes

## Privacy Policy

This extension is committed to protecting your privacy. We want to be clear about our data practices:

- **No Data Collection**: We do not collect, store, or transmit any user data
- **Local Processing**: All operations are performed locally in your browser
- **No External Communication**: The extension only interacts with the OpenID Connect playground website
- **Permissions**: The only permission required is `clipboardWrite` which is used solely for copying access tokens to your clipboard
- **Open Source**: Our code is open source and can be audited on GitHub

## License

MIT License

Copyright (c) 2024 tlm

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 
