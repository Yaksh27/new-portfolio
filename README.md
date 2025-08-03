# Modern Portfolio Website

A clean and modern portfolio website built with Next.js 15, Tailwind CSS, and shadcn/ui. Features a responsive design with dark/light mode, smooth animations, and integration with LeetCode and GitHub APIs.

## 🚀 Features

- **Modern Design**: Clean, minimal design inspired by modern UI trends
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Navigation Bar**: Rounded, minimal navigation with social links and theme toggle
- **Sections**: About, Education, Skills, Projects, LeetCode Profile, and GitHub Contributions
- **Interactive Components**: Hover effects, smooth transitions, and modern UI components
- **Fast Performance**: Optimized for speed with Next.js 15 and modern build tools

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **TypeScript**: Full type safety
- **Deployment**: Vercel ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/about-section.tsx` - Personal details and contact info
- `src/components/education-section.tsx` - Education history
- `src/components/skills-section.tsx` - Skills and technologies
- `src/components/projects-section.tsx` - Project showcase

### Styling
- Colors and themes can be customized in `src/app/globals.css`
- Component styles are in their respective files
- Tailwind classes can be modified for different visual effects

### Navigation Links
Update the navigation bar in `src/components/navbar.tsx` with your social media links:
- GitHub
- LinkedIn
- Twitter/X
- YouTube
- Personal website

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── about-section.tsx
│   ├── education-section.tsx
│   ├── github-contributions.tsx
│   ├── leetcode-profile.tsx
│   ├── navbar.tsx
│   ├── projects-section.tsx
│   ├── skills-section.tsx
│   └── theme-provider.tsx
└── lib/
    └── utils.ts
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any API keys or configuration:

```env
NEXT_PUBLIC_GITHUB_USERNAME=your-github-username
NEXT_PUBLIC_LEETCODE_USERNAME=your-leetcode-username
```

### SEO Optimization
Update metadata in `src/app/layout.tsx`:
- Title
- Description
- Open Graph tags
- Twitter cards

## 🎯 Features in Detail

### Navigation Bar
- Rounded, minimal design inspired by modern UI
- Social media links with icons
- Theme toggle with smooth transitions
- Fixed positioning with backdrop blur

### About Section
- Personal information with avatar
- Contact details
- Professional summary
- Key skills badges

### Education Section
- Academic background
- Achievements and honors
- Timeline layout with visual indicators

### Skills Section
- Organized by categories (Frontend, Backend, Database, etc.)
- Skill levels (Beginner, Intermediate, Advanced, Expert)
- Color-coded badges for easy identification

### Projects Section
- Featured projects with detailed descriptions
- Technology stack for each project
- Links to live demos and source code
- Responsive grid layout

### LeetCode Profile
- Statistics display (problems solved, ranking, acceptance rate)
- Recent problems with difficulty levels
- Mock data (replace with actual API integration)

### GitHub Contributions
- Contribution calendar visualization
- Statistics (total contributions, active days, current streak)
- Recent activity feed
- Mock data (replace with actual API integration)

## 🎨 Design System

### Colors
- Primary: Blue tones for links and highlights
- Secondary: Gray tones for text and backgrounds
- Accent: Green for success states, red for errors
- Dark mode: Inverted color scheme

### Typography
- Font: Geist Sans (modern, clean)
- Monospace: Geist Mono for code snippets
- Responsive text sizes

### Components
- Cards with subtle shadows and borders
- Buttons with hover effects
- Badges for tags and status
- Smooth transitions and animations

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔄 Future Enhancements

- [ ] Real LeetCode API integration
- [ ] Real GitHub API integration
- [ ] Blog section
- [ ] Contact form
- [ ] Analytics integration
- [ ] Performance optimizations
- [ ] PWA capabilities
- [ ] Internationalization (i18n)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using Next.js 15, Tailwind CSS, and shadcn/ui
