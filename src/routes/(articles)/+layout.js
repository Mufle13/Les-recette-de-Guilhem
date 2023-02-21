import {importPost} from "$lib/data/utils"
/** @type {import('./$types').LayoutLoad} */
export async function load({url}) {
    const { pathname } = url
    const slug = pathname.replace("/", "")
    const post = importPost().find(x => x.slug === slug)
    return {
        post
    };
}