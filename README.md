# Michael Musyoka Kilonzo — Portfolio

Software Developer | Graphic Designer | Creative Problem Solver.
React + Vite portfolio with a dark navy / green theme.

## Run locally (Windows PowerShell)
```powershell
cd C:\path\to\portfolio-work
npm install
npm run dev
```
Open the address Vite prints (usually http://localhost:5173).

## Production build
```powershell
npm run build
npm run preview
```

## Where to edit things
| What | File |
|---|---|
| Email, WhatsApp number/message, Formspree endpoint | top of `src/App.jsx` (`CONTACT_EMAIL`, `WHATSAPP_NUMBER`, `WHATSAPP_MESSAGE`, `FORMSPREE_ENDPOINT`) |
| Projects, skills, experience | `src/App.jsx` |
| **Graphic design gallery** | `src/data/gallery.js` + images in `public/images/designs/` |
| Styling | `src/index.css` |
| CV | `public/Michael-Musyoka-Kilonzo-CV.pdf` |

## Adding a new design to the gallery
1. Copy the image into `public/images/designs/` (e.g. `my-poster.jpg`).
2. Open `src/data/gallery.js` and add an entry to the `designs` array:
```js
{
  id: 'my-poster',
  title: 'My Poster',
  category: 'Poster & Promotional',   // Logo Design | Brand Identity | Poster & Promotional | Social Media
  tag: 'Event poster',
  description: 'One or two sentences about the design.',
  image: '/images/designs/my-poster.jpg',
  alt: 'Describe the image for screen readers'
}
```
3. Save. Filter buttons and the full-size viewer update automatically.

## Contact form (Formspree)
The form posts to `https://formspree.io/f/mjgwwvva` using `fetch`. It shows
"sending", "success" and "error" states and only shows success after Formspree
confirms the submission. No API keys are stored in the code; the endpoint URL is
public by design.

The recipient is set **inside your Formspree account**, not in the code:
1. Log in at https://formspree.io and open the form with ID `mjgwwvva`.
2. Under the form's settings, confirm the notification email is `kingsson128@gmail.com`
   and that the address is verified (check that inbox for Formspree's confirmation email).
3. Submit a test message from the live site and check your inbox and spam folder.
4. If the site is on a custom domain, make sure that domain is allowed in the form's settings.

## Deploy (GitHub + Vercel)
```powershell
git add .
git commit -m "Add graphic design section, WhatsApp, Formspree contact form"
git push
```
Vercel redeploys automatically on push. Settings: Framework = Vite, build command
`npm run build`, output directory `dist`. No environment variables are required.
