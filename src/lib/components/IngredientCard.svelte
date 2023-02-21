<script>
  export let ingredients = [];
  export let number;
  export let numberType
  let changedIngredients = [...ingredients];
  let changedNumber = number;
  function addPerson() {
    changedNumber++;
    calculate();
  }

  function removePerson() {
    if (changedNumber === 1) return;
    changedNumber--;
    calculate();
  }

  function calculate() {
    const ratio = changedNumber / number;
    changedIngredients = ingredients.map((x) => {
      return {
        ...x,
        quantity: parseFloat((x.quantity * ratio).toFixed(2)),
      };
    });
  }
</script>

<h2>INGREDIENTS</h2>

<div>
  <div>
    <p class="flex items-center">
      <button
        on:click={removePerson}
        class="select-none rounded-full w-6 h-6 border border-blue-200 bg-blue-100 p-1 text-lg inline-flex items-center justify-center mx-2"
        >-</button
      ><span class="select-none">Pour {changedNumber} {numberType}{changedNumber > 1 ? "s":""}</span
      ><button
        on:click={addPerson}
        class="select-none rounded-full w-6 h-6 border border-blue-200 bg-blue-100 p-1 text-lg inline-flex items-center justify-center mx-2"
        >+</button
      >
    </p>
  </div>
  <ul class="not-prose">
    {#each changedIngredients as ingredient}
      <li>{ingredient.name} - {ingredient.quantity}{ingredient.unit}</li>
    {/each}
  </ul>
</div>
