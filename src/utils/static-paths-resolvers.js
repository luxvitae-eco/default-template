import { getAllNonFeaturedPostsSorted, getAllCategoryPostsSorted, generatePagedPathsForPage, isPublished } from './data-utils';

export function resolveStaticPaths({ pages, objects }) {
    return pages.reduce((paths, page) => {
        if (!process.env.stackbitPreview && page.isDraft) {
            return paths;
        }
        
        // Skip pages without proper metadata
        if (!page.__metadata) {
            return paths;
        }
        
        const objectType = page.__metadata?.modelName;
        const pageUrlPath = page.__metadata?.urlPath;
        
        // Skip invalid paths (like webpack hot update files)
        if (!pageUrlPath || pageUrlPath.includes('.hot-update.') || pageUrlPath.includes('/_next/')) {
            return paths;
        }
        
        if (objectType && StaticPathsResolvers[objectType]) {
            const resolver = StaticPathsResolvers[objectType];
            return paths.concat(resolver(page, objects));
        }
        
        // Only add valid paths that don't start with underscore (reserved for Next.js)
        if (pageUrlPath && !pageUrlPath.startsWith('/_')) {
            return paths.concat(pageUrlPath);
        }
        
        return paths;
    }, []);
}

const StaticPathsResolvers = {
    PostFeedLayout: (page, objects) => {
        let posts = getAllNonFeaturedPostsSorted(objects);
        if (!process.env.stackbitPreview) {
            posts = posts.filter(isPublished);
        }
        const numOfPostsPerPage = page.numOfPostsPerPage ?? 10;
        return generatePagedPathsForPage(page, posts, numOfPostsPerPage);
    },
    PostFeedCategoryLayout: (page, objects) => {
        const categoryId = page.__metadata?.id;
        const numOfPostsPerPage = page.numOfPostsPerPage ?? 10;
        let categoryPosts = getAllCategoryPostsSorted(objects, categoryId);
        if (!process.env.stackbitPreview) {
            categoryPosts = categoryPosts.filter(isPublished);
        }
        return generatePagedPathsForPage(page, categoryPosts, numOfPostsPerPage);
    }
};