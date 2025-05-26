# Memorizer

**Demo:** [https://memory-game-eta-puce.vercel.app/](https://memory-game-eta-puce.vercel.app/)

**Memorizer** is a memory game built with **React** and **TypeScript**. It challenges users to memorize image positions and test their memory skills.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Build and Deploy](#build-and-deploy)
- [Compatibility](#compatibility)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Possible Improvements](#possible-improvements)

### Features

- Integration with the [Pexels API](https://www.pexels.com/api/) to fetch curated images
- Persistent player and game state using browser storage
- Mobile-friendly responsive design
- High score tracking using local storage

## Getting Started

1. Get a Pexels API key:

   [https://www.pexels.com/api/](https://www.pexels.com/api/)

2. Copy the environment template:

   ```bash
   cp .env.example .env
   ```

3. Add your Pexels API key in the `.env` file:

   ```env
   PEXELS_KEY=your_api_key_here
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build and Deploy

To build the project for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

> [!NOTE]  
> This project doesn’t rely on dynamic routes and works well with static hosting platforms. It’s best deployed on platforms that support ISR (Incremental Static Regeneration), such as Vercel, which is used to refresh images from the Pexels API every 24 hours.

## Compatibility

The application is built to work in modern browsers using the default [Next.js browser support](https://nextjs.org/docs/architecture/supported-browsers).

It mainly uses [Baseline: Widely available](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility#baseline_badges) HTML/CSS/JS features with a few exceptions:

- [`color-mix`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix)
- [`Intl.DurationFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) (with a simple polyfill fallback)

> [!IMPORTANT]  
> To support older browsers, additional work such as adding polyfills or fallback logic is needed.

## File Structure

This project uses a domain-based file organization approach for better maintainability. Each domain has its own folder with widgets, hooks, models, utils, etc. The structure resembles [Feature-Sliced Design](https://feature-sliced.github.io/documentation/) in some aspects, though it doesn’t follow the methodology.

### Project Structure

```
src
├── api        - External API logic (e.g., Pexels)
├── app        - Next.js page routes directory
├── components - Reusable components without business logic
├── domains    - Domain-specific logic
├── hooks      - Shared React hooks
├── utils      - Shared utility functions
├── widgets    - UI components with business logic
├── constants  - Shared constants
```

### Domain Structure

```
domain
├── api        - API calls
├── hooks      - React hooks
├── store      - State management
├── model      - Schemas and types
├── utils      - Utility functions
├── widgets    - UI components with business logic
├── constants  - Constants
```

As the project grows, domains can be divided into more granular hierarchical slices.

## Technologies Used

**TypeScript** — Enables static typing and better developer experience. Widely adopted in modern React projects and critical for scalable apps.

**React** — The most popular library for building user interfaces with reusable components.

**Next.js** — A fullstack React meta-framework supporting static and dynamic rendering. It provides built-in optimizations, pre-configured bundling, and a good developer experience. Makes it easy to move logic between client and server.

**CSS Modules** — Scoped, modular styles written in plain CSS. A newer alternative is **TailwindCSS**, which emphasizes development speed, but CSS Modules remain a solid, and provides better readability.

**zustand** — A lightweight state management library for React. Supports persistence and selectors to minimize re-renders.

**zod** — Schema declaration and validation library. Used for validating API responses in server-side code only, it’s excluded from the client bundle.

**classnames** — Utility for conditionally joining class names. Clean, small, and widely used.

**lucide** — A modern collection of open-source SVG icons.

## Possible Improvements

- Record game duration with millisecond precision
- Use **IndexedDB** for scalable state persistence. It’s asynchronous, supports object storage, and allows indexing
- Limit high score display to top 10 and the current player’s rank
- Refactor more UI into reusable components (e.g., buttons)
- Integrate **Storybook** for isolated component development
- Add testing:
  - **Jest** for unit tests
  - **React Testing Library** for component integration tests
  - **Playwright** for end-to-end testing
  - Visual regression testing (e.g., Chromatic with Storybook)
- Turn the app into a **PWA** (offline support + installable)
- Add animations and transitions for better UX
- Track performance and user behavior with telemetry/analytics
