<script>
import RecipeCard from '$lib/components/RecipeCard.svelte';
import { base } from '$app/paths';

 /** @type {import('./$types').PageData} */
 export let data
</script>

<div>Liste de recettes : </div>
<div class="grid grid-cols-2 gap-4">
    {#each data.posts as post}
        <a href={`${base}/${post.slug}`}><RecipeCard {post}/></a>
    {/each}
</div>