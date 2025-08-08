# JustKaaj

JustKaaj is a modern service marketplace platform built with [Next.js](https://nextjs.org) and React. It connects users with trusted service providers for a wide range of needs, including home maintenance, cleaning, beauty, childcare, tutoring, and more.

## Project Structure

- **Backend/**: Node.js/TypeScript API, Prisma ORM, and database migrations.
- **FrontEnd/**: Next.js 15 app with React 19, Tailwind CSS, and Swiper integration.

---

## Frontend

The frontend is built using Next.js and React, styled with Tailwind CSS, and includes features such as:

- Service browsing and booking
- Provider profiles with ratings and availability
- Admin dashboard for management
- JWT authentication
- Chart.js for analytics
- Form handling with React Hook Form
- Swiper integration for carousels

### Getting Started (Frontend)

```sh
cd FrontEnd
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Backend

The backend is a Node.js/TypeScript API using Prisma ORM for database management.

### Features

- RESTful API for service management
- JWT authentication for users and providers
- Prisma ORM for database operations
- Admin endpoints for provider and application management

### Getting Started (Backend)

```sh
cd Backend
npm install
npx prisma migrate dev
npm run dev
```

---

## Scripts

- `dev`: Start development server
- `build`: Build for production
- `start`: Start production server
- `lint`: Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Prisma Documentation](https://www.prisma.io/docs)

## Deployment

The Website is deloyed in Hostinger vps