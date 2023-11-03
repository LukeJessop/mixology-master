import React from 'react'
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react";

const FilterItem = ({ item }) => {
    return (
        <Label className="flex items-center gap-2 font-normal ">
            <Checkbox id="filter-item" />
            <p className=" text-[#F64740] " >{item}</p>
        </Label>
    )
}

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
                <AccordionTrigger className="text-base">Categories</AccordionTrigger>
                <AccordionContent>
                    <div className="grid gap-2">
                        {categories.map((item, index) => {
                            return (
                                <FilterItem key={index} item={item.strCategory} />
                            )
                        })}
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ingredients">
                <AccordionTrigger className="text-base ">Ingredients</AccordionTrigger>
                <AccordionContent>
                    <div className="grid gap-2">
                        {ingredients.map((item, index) => {
                            return (
                                <FilterItem key={index} item={item.strIngredient1} />
                            )
                        })}
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Glasses">
                <AccordionTrigger className="text-base ">Glasses</AccordionTrigger>
                <AccordionContent>
                    <div className="grid gap-2">
                        {glasses.map((item, index) => {
                            return (
                                <FilterItem key={index} item={item.strGlass} />
                            )
                        })}
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Alcohol">
                <AccordionTrigger className="text-base ">Alcohol</AccordionTrigger>
                <AccordionContent>
                    <div className="grid gap-2">
                        {alcoholFilter.map((item, index) => {
                            return (
                                <FilterItem key={index} item={item.strAlcoholic} />
                            )
                        })}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default Filter