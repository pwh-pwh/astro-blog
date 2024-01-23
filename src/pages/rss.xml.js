import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function GET(context) {
    const posts = await getCollection("posts");
    return rss({
        title: 'Coderpwh | Blog',
        description: 'My journey learning everything ',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/posts/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}