
## Key Features

### Performance Optimizations

- **React Server Components**: Leverages Next.js 14's RSC for reduced client-side JavaScript
- **Image Optimization**: Uses Next.js Image component with proper sizing and lazy loading
- **Code Splitting**: Automatic code splitting via Next.js module system
- **Prefetching**: Strategic prefetching for improved navigation experience
- **Responsive Images**: Serves appropriately sized images based on viewport

### Animation System

The animation system uses Framer Motion with a consistent approach:

- Scroll-triggered animations via `whileInView` for section entrances
- Staggered animations for list items with calculated delays
- Hardware-accelerated animations with `translateX/Y` transforms
- Reduced motion preferences respected via Framer Motion's accessibility features

### Theming

- **Dark/Light Mode**: System-preference detection with manual override
- **Theme Persistence**: Saves user preference in localStorage
- **CSS Variables**: Theme colors defined as CSS variables for consistent application
- **Tailwind Integration**: Custom theme extends Tailwind's color system

### Responsive Design

- Mobile-first approach with strategic breakpoints
- Fluid typography using responsive font sizes
- Optimized layouts for various device sizes
- Touch-friendly interactions for mobile users

## Development

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
pnpm install

# Start the development server
pnpm dev
