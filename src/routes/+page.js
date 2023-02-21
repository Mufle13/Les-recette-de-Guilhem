import {importPost} from "$lib/data/utils"

/** @type {import('./$types').PageLoad} */
export async function load() {
    const posts = importPost()
    return {
        posts
    };
};