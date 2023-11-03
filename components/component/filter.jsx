import React from 'react'
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react";

function Filter() {
    const [categories, setCategories] = useState([])
    const [glasses, setGlasses] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [alcoholFilter, setAlcoholFilter] = useState([])
  
    useEffect(() => {
      if (categories.length < 1) {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
          .then((response) => response.json())
          .then((data) => setCategories(data.drinks))
          .catch((error) => console.error('Error:', error));
      }
      if (glasses.length < 1) {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list')
          .then((response) => response.json())
          .then((data) => setGlasses(data.drinks))
          .catch((error) => console.error('Error:', error));
      }
      if (ingredients.length < 1) {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
          .then((response) => response.json())
          .then((data) => setIngredients(data.drinks))
          .catch((error) => console.error('Error:', error));
  
      }
      if (alcoholFilter.length < 1) {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list')
          .then((response) => response.json())
          .then((data) => setAlcoholFilter(data.drinks))
          .catch((error) => console.error('Error:', error));
  
      }
    }, [categories, glasses, ingredients, alcoholFilter])
  
  return (
    <Accordion className="w-full" collapsible type="single">
        <AccordionItem value="categories">
            <AccordionTrigger className="text-base text-white">Categories</AccordionTrigger>
            <AccordionContent>
            <div className="grid gap-2">
                {categories.map((item, index) => {
                return (
                    <Label key={index} className="flex items-center gap-2 font-normal text-white">
                    <Checkbox id="category-cocktail" />
                    {item.strCategory}
                    </Label>
                )
                })}
            </div>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="ingredients">
            <AccordionTrigger className="text-base text-white">Ingredients</AccordionTrigger>
            <AccordionContent>
            <div className="grid gap-2">
                {ingredients.map((item, index) => {
                return (
                    <Label key={index} className="flex items-center gap-2 font-normal text-white">
                    <Checkbox id="category-cocktail" />
                    {item.strIngredient1}
                    </Label>
                )
                })}
            </div>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Glasses">
            <AccordionTrigger className="text-base text-white">Glasses</AccordionTrigger>
            <AccordionContent>
            <div className="grid gap-2">
                {glasses.map((item, index) => {
                return (
                    <Label key={index} className="flex items-center gap-2 font-normal text-white">
                    <Checkbox id="category-cocktail" />
                    {item.strGlass}
                    </Label>
                )
                })}
            </div>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Alcohol">
            <AccordionTrigger className="text-base text-white">Alcohol</AccordionTrigger>
            <AccordionContent>
            <div className="grid gap-2">
                {alcoholFilter.map((item, index) => {
                return (
                    <Label key={index} className="flex items-center gap-2 font-normal text-white">
                    <Checkbox id="category-cocktail" />
                    {item.strAlcoholic}
                    </Label>
                )
                })}
            </div>
            </AccordionContent>
        </AccordionItem>
        </Accordion>
  )
}

export default Filter