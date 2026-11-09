// ---------------------------------------------------------------------------
// GRAPHIC DESIGN GALLERY DATA
//
// To add a new design later:
//   1. Put the image file in  public/images/designs/
//   2. Add one new object to the array below (copy an existing one).
//   3. Save. The gallery updates itself. No other file needs changing.
//
// category must be one of the names in `galleryCategories` below
// (or "All" is added automatically).
// ---------------------------------------------------------------------------

export const galleryCategories = [
  'Logo Design',
  'Brand Identity',
  'Poster & Promotional',
  'Social Media'
];

export const designs = [
  {
    id: 'kingtech-edu',
    title: 'KINGTECH EDU',
    category: 'Logo Design',
    tag: 'Education & technology branding',
    description: 'Logo for an education-technology brand: a graduation cap and open book combined with circuit nodes, in deep navy and gold with the tagline "Learn · Grow · Excel".',
    image: '/images/designs/kingtech-edu-logo.png',
    alt: 'KINGTECH EDU logo featuring a graduation cap, open book and circuit nodes with the tagline Learn, Grow, Excel'
  },
  {
    id: 'kingtech-cyber',
    title: 'KINGTECH Cyber Online Services',
    category: 'Logo Design',
    tag: 'Cybersecurity & technology branding',
    description: 'Logo for a cyber and online services business: a crowned shield with circuit lines that signals security, technology and trust, in blue and gold.',
    image: '/images/designs/kingtech-cyber-online-services-logo.png',
    alt: 'KINGTECH Cyber Online Services logo featuring a crowned blue shield with circuit lines'
  },
  {
    id: 'must-got-talent',
    title: 'MUST Got Talent 2026',
    category: 'Brand Identity',
    tag: 'Event branding',
    description: 'Event identity for the MUST Got Talent university talent show, combining a golden microphone, monogram lettering and a star in green and gold.',
    image: '/images/designs/must-got-talent-logo.png',
    alt: 'MUST Got Talent 2026 logo with a golden microphone and star in green and gold'
  }

  // -------------------------------------------------------------------------
  // These two files were also in your project's images folder. They are
  // switched off because I could not confirm they are your own work (the
  // poster carries another creator's handle). If they ARE yours, delete the
  // two "//" comment markers on each block and add a comma after the item above.
  // -------------------------------------------------------------------------
  // {
  //   id: 'hammad-foundation',
  //   title: 'Hammad Foundation',
  //   category: 'Logo Design',
  //   tag: 'Non-profit branding',
  //   description: 'Anniversary logo for an education-focused foundation.',
  //   image: '/images/designs/hammad-foundation-logo.png',
  //   alt: 'Hammad Foundation 11 years of service logo'
  // },
  // {
  //   id: 'my-prayer-poster',
  //   title: 'My Prayer — Release Poster',
  //   category: 'Poster & Promotional',
  //   tag: 'Music release poster',
  //   description: 'Promotional poster for a gospel single release.',
  //   image: '/images/designs/my-prayer-poster.jpeg',
  //   alt: 'My Prayer single release poster'
  // }
];
