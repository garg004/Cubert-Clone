Thought for 1 second### Cuberto Galaxy - Interactive Website Clone

## Sections Implemented

1. **Hero Section**

1. Animated text reveal with word-by-word staggered animations
2. Custom cursor that changes size on hover over interactive elements
3. Dynamic star field background with parallax effect



2. **Projects Section**

1. Interactive project cards with hover animations
2. Modal popup with animated transitions
3. Staggered reveal animations on scroll



3. **Services Section**

1. Animated service cards with hover effects
2. Icon animations and gradient backgrounds
3. Staggered reveal on scroll



4. **Contact Section**

1. Animated text reveal
2. Button with hover animations
3. Scroll-triggered animations



5. **Navigation & Footer**

1. Minimal navigation with animated elements
2. Responsive footer with hover states





## Challenges Faced & Solutions

### 1. Cubic-Bezier Easing Function Error

**Challenge:** The initial implementation used cubic-bezier easing functions in the format `[0.6, 0.05, -0.01, 0.9]` which caused the error: "Failed to execute 'animate' on 'Element': 'cubic-bezier(0.6, 0.05, -0.01, 0.9)' is not a valid value for easing".

**Solution:** Replaced all array-based easing functions with Framer Motion's built-in spring physics system using the `type: "spring"` property with configurable `damping` and `stiffness` values. This not only fixed the error but also resulted in more natural-looking animations.

### 2. Performant Star Animation

**Challenge:** Creating a performant star field animation that wouldn't impact page performance while still looking dynamic and responsive to user interaction.

**Solution:** Implemented a canvas-based solution instead of DOM elements for the stars. This approach is significantly more performant as it handles all star rendering in a single canvas element rather than creating hundreds of DOM nodes. Added mouse-based parallax effect to enhance the immersive feeling.

### 3. Text Animation Timing

**Challenge:** Getting the timing right for text reveal animations to create a smooth, professional effect without feeling too slow or too fast.

**Solution:** Created a custom `TextReveal` component that splits text into individual words and applies staggered animations with configurable delays. This allowed for fine-tuning the animation timing and created a more polished effect than animating entire text blocks at once.

### 4. Responsive Animations

**Challenge:** Ensuring animations looked good and performed well across different screen sizes.

**Solution:** Used relative units and viewport-based calculations for animation distances. Implemented conditional logic to adjust animation parameters based on screen size, ensuring the experience remained smooth on mobile devices.

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **Framer Motion**: Animation library for React
- **Tailwind CSS**: Utility-first CSS framework for styling
- **HTML Canvas API**: For the star field animation
- **TypeScript**: For type safety and better developer experience


### Animation Techniques

- **Spring Physics**: Natural-feeling animations with configurable physics parameters
- **Staggered Animations**: Creating visual hierarchy with delayed animations
- **Scroll-Triggered Animations**: Using `whileInView` to trigger animations as elements enter the viewport
- **Hover Animations**: Interactive elements that respond to user interaction
- **Parallax Effects**: Creating depth with elements that move at different speeds


## Key Features

- **Custom Cursor**: A custom cursor that follows mouse movement with smooth spring physics
- **Dynamic Star Field**: Canvas-based star animation with parallax effect
- **Text Reveal Animations**: Word-by-word text animations with staggered timing
- **Interactive Project Cards**: Cards with hover effects and modal popups
- **Responsive Design**: Fully responsive layout with maintained animations across all devices


This project demonstrates advanced animation techniques while maintaining performance and accessibility, creating an engaging user experience inspired by Cuberto's design aesthetic with a unique galaxy theme.
