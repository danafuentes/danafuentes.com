# Dana Fuentes - Makeup Artist Portfolio

A beautiful, fully responsive static website for a professional makeup artist featuring portfolio showcase, booking system, and service information.

## Features

✨ **Professional Design**
- Modern, elegant aesthetic with makeup artist color scheme
- Fully responsive for mobile, tablet, and desktop
- Smooth animations and transitions
- Fast loading performance

📸 **Portfolio Section**
- Filterable gallery of makeup work
- Categories: Bridal, Events, Photo Makeup
- Hover effects and image overlays

💇 **Services**
- Detailed service descriptions
- Bridal makeup with trials
- Event and party makeup
- Photo/video makeup services
- Bridesmaid coordinated makeup
- Professional consultations

💰 **Pricing**
- Clear, transparent pricing
- 6 service options displayed
- Pricing notes and policies
- Group discount information

📅 **Booking System**
- Easy appointment booking form
- Date and time selection
- Service selection
- Client information collection
- Special requests notes

💬 **Client Testimonials**
- 5-star reviews section
- Build trust with potential clients

📞 **Contact & FAQ**
- Contact information and form
- FAQ section with common questions
- Social media links
- Multiple contact methods

## File Structure

```
├── index.html          # Home page
├── portfolio.html      # Portfolio/gallery
├── services.html       # Services offered
├── pricing.html        # Pricing information
├── booking.html        # Appointment booking
├── contact.html        # Contact & FAQ
├── css/
│   └── styles.css     # Main stylesheet
└── js/
    └── main.js        # JavaScript functionality
```

## Getting Started

### Option 1: GitHub Pages (Recommended)

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source branch to `main`
4. Your site will be available at `https://danafuentes.github.io/danafuentes.com/`

### Option 2: Local Testing

1. Clone the repository:
```bash
git clone https://github.com/danafuentes/danafuentes.com.git
```

2. Open `index.html` in your web browser, or

3. Run a local server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server
```

4. Visit `http://localhost:8000` in your browser

## Customization

### Update Contact Information
Edit the contact details in:
- `booking.html` - Phone and email
- `contact.html` - Contact information

### Add Portfolio Images
1. Create an `images` folder in the repository
2. Replace placeholder images with your own
3. Update image paths in `portfolio.html`

Example:
```html
<img src="images/your-image.jpg" alt="Makeup work">
```

### Update Services and Pricing
- Edit service descriptions in `services.html`
- Update pricing in `pricing.html`
- Modify service options in `booking.html` select dropdown

### Change Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #d4a574;      /* Gold - main color */
    --secondary-color: #2c3e50;    /* Dark blue */
    --accent-color: #e8d5c4;       /* Light beige */
    --text-color: #333;            /* Text */
    --light-bg: #f8f7f3;          /* Background */
}
```

### Update Social Media Links
Find and update social media links in:
- Footer (all pages)
- Contact page

## Form Handling

Currently, forms are set up to:
- Display a confirmation message
- Log data to browser console
- Reset after submission

For production, you can integrate with:
- **Email service**: Formspree, EmailJS, Nodemailer
- **Calendar API**: Calendly, Google Calendar
- **Payment**: Stripe, PayPal (for deposits)
- **CRM**: Zapier, Airtable

## Mobile Responsiveness

The site is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: Below 768px

All pages automatically adjust layout for smaller screens.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- No external frameworks (pure HTML/CSS/JS)
- Optimized CSS with variables
- Smooth animations using CSS transforms
- Fast page load times
- SEO-friendly HTML structure

## Tips for Success

1. **Add Your Photos**: Replace placeholder images with high-quality portfolio photos
2. **Update Contact Info**: Ensure all contact information is correct and up-to-date
3. **Social Media**: Add links to your Instagram, TikTok, and Facebook
4. **Client Testimonials**: Add real reviews from satisfied clients
5. **Booking Integration**: Set up email or calendar integration for bookings
6. **Domain**: Consider using a custom domain for a more professional look

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions about the website, please create an issue in the GitHub repository.

---

**Created:** 2026-03-14
**Version:** 1.0.0

Enjoy your beautiful new makeup artist portfolio website! 💄✨