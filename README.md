# Auction Platform

A modern auction platform built with Next.js.

## Prerequisites

- Node.js (version 14.x or higher recommended)
- npm or yarn or pnpm

## Setup Instructions

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd auction-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Example environment variables (replace with your actual values)
NEXT_PUBLIC_API_URL=http://localhost:3000/api
# Add other required environment variables here
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Starting Production Server

```bash
npm run start
# or
yarn start
# or
pnpm start
```

### Running Tests

```bash
npm run test
# or
yarn test
# or
pnpm test
```

## Project Structure

```
auction-platform/
├── public/            # Static files
├── src/
│   ├── components/    # React components
│   ├── pages/         # Next.js pages
│   ├── styles/        # CSS/SCSS styles
│   ├── lib/           # Utility functions
│   ├── hooks/         # Custom React hooks
│   ├── context/       # React context
│   └── api/           # API routes
├── .env.local         # Environment variables (create this)
└── package.json       # Project dependencies and scripts
```

## Features

- User authentication and authorization
- Creating and managing auction listings
- Bidding system
- Real-time updates
- Payment processing
- User dashboard

## License

This project is licensed under the [MIT License](LICENSE).