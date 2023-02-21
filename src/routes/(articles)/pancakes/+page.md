---
title: Fluffy pancakes
readingTime: 5
slug: pancakes
categories: 
- Dessert
- Brunch
- Petit déjeuner
pays: Etats-Unis
difficulty: Facile
tempsPreparation: 15
---

<script context="module">
    import IngredientCard from "$lib/components/IngredientCard.svelte"
    import coverImage from "./cover.png"
    metadata.coverimage = coverImage
    metadata.number = 12
    metadata.numberType = "pancake"
    const ingredients = [
        {
            name: "Flour",
            quantity: 290,
            unit: "g"
        },
         {
            name: "Caster sugar",
            quantity: 60,
            unit: "g"
        },
         {
            name: "Baking powder",
            quantity: 4,
            unit: "tsp"
        },
         {
            name: "Baking soda",
            quantity: 0.25,
            unit: "tsp"
        },
         {
            name: "Salt",
            quantity: 0.5,
            unit: "tsp"
        },
         {
            name: "Milk",
            quantity: 440,
            unit: "ml"
        },
        {
            name: "Unsalted butter",
            quantity: 60,
            unit: "g"
        },
        {
            name: "Vanilla extract",
            quantity: 2,
            unit: "tsp"
        },{
            name: "Egg",
            quantity: 1,
            unit: ""
        },
    ]
</script>

# Pancakes

<IngredientCard {ingredients} number={metadata.number} numberType={metadata.numberType}></IngredientCard>

## INSTRUCTIONS
