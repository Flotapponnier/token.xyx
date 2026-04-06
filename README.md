# Tokens.xyz Clone - Powered by Mobula

Open-source alternative to tokens.xyz for Solana token exploration, powered by Mobula API.

## Features

- 🔍 Search Solana tokens
- 📊 Real-time market data
- 💰 Price, volume, and liquidity info
- 📈 Token metrics and analytics
- 🚀 Fast and responsive UI

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **API**: Mobula API

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_MOBULA_API_KEY=your_mobula_api_key_here
```

Get your API key at [https://admin.mobula.fi](https://admin.mobula.fi)

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm run start
```

## API Integration

This project uses Mobula API for:
- Token search and discovery
- Market data (price, volume, liquidity)
- Token metadata
- Historical data

## License

MIT

## Credits

- Inspired by [tokens.xyz](https://tokens.xyz)
- Powered by [Mobula API](https://mobula.io)
- Built by [@Flotapponnier](https://github.com/Flotapponnier)
