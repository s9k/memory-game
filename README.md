# Memorizer

**Demo:** [https://memory-game-eta-puce.vercel.app/](https://memory-game-eta-puce.vercel.app/)

**Memorizer** is a memory game built with **Next.js** and **TypeScript**. It challenges users to memorize image positions and test their memory skills.
Created for educational purposes.

### Features

- Integration with the [Pexels API](https://www.pexels.com/api/) to fetch curated images
- Persistent player and game state using browser storage
- Mobile-friendly responsive design
- High score tracking with local storage saving

## Getting Started

1. Get a Pexels API key:

   [https://www.pexels.com/api/](https://www.pexels.com/api/)

2. Copy the environment template:

   ```bash
   cp .env.example .env
   ```

3. Set your Pexels API key in the `.env` file:

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

You can deploy the project using platforms like **Vercel**.

## Possible Improvements

- Save more accurate game duration in high scores
- Store game state using **IndexedDB** for better scalability and performance
- Limit the number of shown high scores
- Add more animations and visual effects
