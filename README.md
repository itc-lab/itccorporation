# Corporate Website Powered by Next.js

![itccorporation](https://user-images.githubusercontent.com/76575923/124353217-2adbd600-dc40-11eb-9cd0-3d346b1c5ae4.jpg)

Corporate Website on the Jamstack Powered by [Next.js](https://nextjs.org) and [Strapi](https://strapi.io/).

## Demo

Access the following demo site:

[https://itccorporation.jp](https://itccorporation.jp)

## Features

- [Next.js](https://nextjs.org) : used for static site generation
  - Integrate with [Tailwind CSS](https://tailwindcss.com)
  - [PostCSS](https://postcss.org) for processing [Tailwind CSS](https://tailwindcss.com)
  - Support [TypeScript](https://www.typescriptlang.org)
- Headless CMS : built with [Strapi](https://strapi.io/)
- SEO : [Next SEO](https://github.com/garmeeh/next-seo) supports openGraph and JSON-LD
- Lint : Linter with [ESLint](https://eslint.org)
- Formatter : Code formatted by [Prettier](https://prettier.io)
- Form : Form component built with [Formik](https://formik.org/)
  - protected by Google reCAPTCHA v3
- Chat : embedding Gitter with a simple JavaScript snippet [Sidecar](https://sidecar.gitter.im/)
- API : using [Apollo](https://www.apollographql.com/) Client to fetch data via [GraphQL](https://graphql.org/)

## Requirements

- Node.js and npm

## Headless CMS (Strapi) Data Schema

### Available

type: Collection

| field name  | type   |
| ----------- | ------ |
| name        | Text   |
| logo        | Media  |
| description | Text   |
| priority    | Number |

### Content

type: Collection

| field name | type      |
| ---------- | --------- |
| slug       | Text      |
| title      | Text      |
| image      | Media     |
| image_sp   | Media     |
| whats_new  | Rich text |
| content    | Rich text |

### Seo-image

type: Collection

| field name | type  |
| ---------- | ----- |
| image      | Media |
| alt        | Text  |

### OpenGraph

type: Collection

| field name  | type                    |
| ----------- | ----------------------- |
| slug        | Text                    |
| type        | Text                    |
| url         | Text                    |
| title       | Text                    |
| description | Text                    |
| seo_images  | Relation with Seo-image |

### BreadcrumbJsonLd

type: Collection

| field name | type   |
| ---------- | ------ |
| position   | Number |
| name       | Text   |
| item       | Text   |

## Getting started

You will need to deploy the `frontend` and `backend` projects separately. Here are the docs to deploy each one:

- [Deploy Strapi](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment.html#hosting-provider-guides)
- [Deploy Next](https://nextjs.org/docs/deployment)

### backend

```
npm run develop
```

The Strapi backend server will run here => [http://localhost:1337](http://localhost:1337)

### frontend

Create a .env.local file similar to .env.example:

```
GRAPHQL_API=http://localhost:1337/graphql
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/itc-lab/itccorporation.git my-project-name
cd my-project-name
npm install
```

Create a symbolic link to Strapi's uploads directory:

```
ln -s [Strapi's uploads directory] public/uploads
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

The Next frontend server will run here => [http://localhost:3000](http://localhost:3000)

## License

MIT
