<script>
import RecipeCard from '$lib/components/RecipeCard.svelte';

 /** @type {import('./$types').PageData} */
 export let data
</script>

<div>Liste de recettes : </div>
<div class="grid grid-cols-2 gap-4">
    {#each data.posts as post}
        <a href={`/${post.slug}`}><RecipeCard {post}/></a>
    {/each}
</div>