# How to Filter deeply nested results in Strapi

![cover](cover.jpg)

## Description

This repository contains the source code for the article: [How to Filter Results on Deeply-Nested fields in Strapi](https://strapi.io/blog/deep-filtering-alpha-26), written for [Strapi's Blog](https://strapi.io/blog)

## Prerequisites

To test out the source code you will need the following installed:
- [Node.js LTS v18 or v20](https://nodejs.org)

## Getting Started

Clone the repository.
```bash
git clone https://github.com/Marktawa/supreme-disco.git
```

Install dependencies.
```bash
cd supreme-disco/my-strapi-project
```

```bash
npm install
```

## Test out code

Run the following command to launch the Strapi Admin
```bash
npm run develop
```

Visit http://localhost:1337/admin in your browser to register a new admin and login to your Strapi Dashboard.

Enable public access to your APIs

In your terminal, run:
```bash
curl localhost:1337/api/dance-books
```

You should get the following response
```json
[
    {
        "id": 5,
        "documentId": "mfnvnveobtf4fzporv9k2z3x",
        "title": "How to Dance",
        "createdAt": "2025-01-16T05:49:27.517Z",
        "updatedAt": "2025-01-16T05:49:27.517Z",
        "publishedAt": null,
        "locale": null
    },
    {
        "id": 7,
        "documentId": "kte9yxf6oami3680br3gapfl",
        "title": "How to be Flexible",
        "createdAt": "2025-01-16T05:49:53.037Z",
        "updatedAt": "2025-01-16T06:06:43.838Z",
        "publishedAt": null,
        "locale": null
    }
]
```

## Author

Mark Munyaka  
dev.to/markmunyaka


