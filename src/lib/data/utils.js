export const importPost = (render = false) => {
    const blogImports = import.meta.glob("$routes/*/*/*.md", {eager: true})
    const imports = {...blogImports}
    const posts = []
    for (const path in imports) {
        const post = imports[path]
        if (post) {
            posts.push({
                ...post.metadata,
                html: render ? post.default.render()?.html : undefined
            })

        }
    }
    return posts
}