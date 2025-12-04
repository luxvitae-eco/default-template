function cssClassesFromUrlPath(urlPath) {
    const parts = urlPath
        .replace(/^\/|\/$/g, '')
        .split('/')
        .filter(Boolean);

    let css = 'page';
    return parts.map((part) => {
        css += `-${part}`;
        return css;
    });
}

function getPageUrl(page) {
    if (!page || !page.slug) {
        return null;
    }

    // Check if this is an article post based on file path
    if (['PostLayout'].includes(page?.__metadata.modelName)) {
        // If the page is in the article directory, use /article/ prefix instead of /blog/
        if (page.__metadata.id && page.__metadata.id.includes('content/pages/article/')) {
            return `/article${page.slug.startsWith('/') ? page.slug : `/${page.slug}`}`;
        }
        // Otherwise use the default /blog/ prefix
        return `/blog${page.slug.startsWith('/') ? page.slug : `/${page.slug}`}`;
    }

    return page.slug.startsWith('/') ? page.slug : `/${page.slug}`;
}

function setEnvironmentVariables() {
  return {
    ...(process?.env?.URL && { URL: process.env.URL }),
  }
}


module.exports = {
    cssClassesFromUrlPath,
    getPageUrl,
    setEnvironmentVariables
};