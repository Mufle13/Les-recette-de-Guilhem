import {importPost} from "$lib/data/utils"
import { base } from "$app/paths"
/** @type {import('./$types').LayoutLoad} */
export async function load({url}) {
    const { pathname } = url
    const slug = pathname.replace(`${base}/`, "")
    const post = importPost().find(x => x.slug === slug)
    console.log(post.coverimage)
    return {
        post
    };
}