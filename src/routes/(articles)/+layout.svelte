<script>
    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<article class="prose my-10">
    <img src="{data.post.coverimage}" alt={`image de ${data.post.coverimage}`}>
    <slot/>
</article>