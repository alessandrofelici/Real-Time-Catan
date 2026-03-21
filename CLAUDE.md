# Real-Time-Catan

Next.js 14 app router project for playing Catan in real time.

## Stack
- Next.js, TypeScript, Tailwind
- `npm run dev` to start project

## App Description
- 2 pages only, `/` and `/game`
- `/` Shows a single modal
- The modal has text fields, radio buttons, and switches
- Each option represents customization to be carried into the `/game` route
- Routing: `/` (options saved, game start) -> `/game` (game end) -> `/`
- Game has a timer, randomized die roll, and randomized robber assignment

## Conventions
- Use server components by default
- Client components go in `components/`

## Role
- Develop a 2 page website which is easy to navigate and use

## Style Guide
See style-guide.md