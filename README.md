# Wedding Invitation Website

Digital wedding invitation website for Văn Khánh & Hoàng Anh's wedding.

## Features

- Countdown to the wedding date
- Event details and location
- RSVP form
- Digital gift options
- Photo gallery
- Responsive design for all devices

## Setup

1. Clone this repository
2. Open `index.html` in your browser
3. Customize the content for your own event

## Deployment

The website can be easily deployed using GitHub Pages:

1. Push your changes to the GitHub repository
2. Go to repository Settings > Pages
3. Select the branch to deploy (main/master)
4. Your site will be published at `https://khanhchel99.github.io/thiepcuoi`

## GitHub SSH Key Setup

To push code to GitHub using SSH:

1. **Generate a new SSH key:**
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   (Use `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"` for older systems)

2. **Start SSH agent:**
   ```bash
   eval "$(ssh-agent -s)"
   ```

3. **Add key to SSH agent:**
   ```bash
   ssh-add ~/.ssh/id_ed25519
   ```

4. **Copy public key to clipboard:**
   ```bash
   pbcopy < ~/.ssh/id_ed25519.pub
   ```

5. **Add key to GitHub:**
   - Go to GitHub → Settings → SSH and GPG keys
   - Click "New SSH key"
   - Paste your public key and save

See [GitHub's official documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) for more details.

## RSVP with Google Sheets Integration

This website uses Google Sheets to store RSVP submissions:

1. **Create a Google Sheet:**
   - Create a new Google Sheet
   - Name the columns to match your form fields (Name, Phone, Guests, Companions)

2. **Set up Google Apps Script:**
   - In your Google Sheet, go to Extensions > Apps Script
   - Replace the code with the script in `google-sheets-script.gs`
   - Save the project and deploy as a web app
   - Set access to "Anyone, even anonymous" 
   - Copy the deployment URL

3. **Update the form action:**
   - In `index.html`, find the RSVP form
   - Update the form submission code with your deployment URL

Your RSVP submissions will now be automatically saved to your Google Sheet.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts
