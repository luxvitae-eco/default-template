# Lux Vitae Eco -  Content Ops Starter

![Content Ops Starter](https://assets.stackbit.com/docs/content-ops-starter-thumb.png)

Netlify starter that's made for customization with a flexible content model, component library, [visual editing](https://docs.netlify.com/visual-editor/overview/) and [Git Content Source](https://docs.netlify.com/create/content-sources/git/).

**⚡ View demo:** [https://content-ops-starter.netlify.app/](https://content-ops-starter.netlify.app/)

## Table of Contents

- [Overview](#overview)
- [Deploying to Netlify](#deploying-to-netlify)
- [Develop with Netlify Visual Editor Locally](#develop-with-netlify-visual-editor-locally)
- [Local Development](#local-development)
- [Building for production](#building-for-production)
- [Setting Up Algolia Search](#setting-up-algolia-search)
- [Next Steps](#next-steps)
- [Support](#support)


## Overview

This is a Netlify starter site built with the ContentOps workflow in mind for Lux Vitae Eco.  
It includes a flexible content model, component library, Lux Vitae Team, Eco-friendly Designs,  
customized navigation, (header and footer), articles and blog posts, and more.

> [!TIP]
> Custom anchors are edited in the source code. This can be helpful since the editor does not  
always allow for doing things better or more easily.


## Deploying to Netlify

If you click "Deploy to Netlify" button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/content-ops-starter)

> [!IMPORTANT]
> Best practices for naming Git repository:  
> The Name should reflect a specific project's purpose or design plan.

### Project Name

1. **Name-Model**    
   A new type of home being offered to clients.  
   Refers to a distinct, and marketable product e.g. a specific house type,  
   Model A or Model B, that is added to our catalog, and portfolio.  
2. **Name-Plan**    
   A new technical drawing package, not the marketing term.  
   The blueprint or technical drawings for a single construction project,  
   which may not be intended for replication or sale as a standard product.

## Develop with Netlify Visual Editor Locally

The typical development process is to begin by working locally.   
Clone this repository, then run `npm install` in its root directory.  

> [!CAUTION]
> Create a branch before making any changes. Netlify's visual editor is still under development  
> and may delete your changes and files without warning. Avoid potential problems by backing up your work.  
> Make sure to regularly commit your changes and push them to your repository.


## Local Development

To start the local development server, follow these steps.

Run the Next.js development server:

```txt
cd content-ops-starter
npm run dev  

or

pnpm run dev
```

Install the [Netlify Visual Editor CLI](https://www.npmjs.com/package/@stackbit/cli). Then open a new terminal window in the same project directory and run the Netlify visual editor dev server:

```txt
npm install -g @stackbit/cli  

stackbit dev
```

Open the visual editor localhost URL, such as http://localhost:8090/_stackbit


This outputs your own Netlify visual editor URL. Open this, register, or sign in, and you will be directed to Netlify's visual editor for your new project.

![Next.js Dev + Visual Editor Dev](https://assets.stackbit.com/docs/next-dev-stackbit-dev.png)

## Building for production

To build a static site for production, run the following command

```shell
npm run build
```

## Setting Up Algolia Search

This starter includes Algolia search integration. To set it up:

1. Create an [Algolia](https://www.algolia.com/) account
2. Create a new application and index
3. Set the following environment variables:
   - `NEXT_PUBLIC_ALGOLIA_APP_ID` - Your Algolia application ID
   - `NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY` - Your Algolia search-only API key
   - `NEXT_PUBLIC_ALGOLIA_INDEX_NAME` - Your index name

## Next Steps

Here are a few suggestions on what to do next if you're new to Netlify visual editor:

- Learn [Netlify visual editor overview](https://docs.netlify.com/visual-editor/visual-editing/)
- Check [Netlify visual editor reference documentation](https://visual-editor-reference.netlify.com/)

## Support

If you get stuck along the way, get help in Netlify [support forums](https://answers.netlify.com/).
