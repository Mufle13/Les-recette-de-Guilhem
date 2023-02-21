<script>
  export let post;
</script>

<div class="group border rounded-md flex">
  <img
    class="w-[150px] h-[150px] object-cover"
    src={post.coverimage}
    alt={`Image de ${post.title}`}
  />
  <div class="flex flex-col p-2 justify-between">
    <div class="text-2xl font-semibold ">{post.title}</div>
    <div>
        <div>
        {post.pays}
        </div>
        <div class="flex items-center gap-2 text-sm">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-4 h-4"
                ><circle cx="12" cy="12" r="10" /><polyline
                points="12 6 12 12 16 14"
                />
            </svg>
            <span>Prep. {post.tempsPreparation} min.</span>       
        </div>
        <div>
            {post.difficulty}
          </div>
    </div>
   
  </div>
</div>
