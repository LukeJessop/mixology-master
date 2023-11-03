/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/mB7P8JWYMmX
 */
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { useEffect, useState } from "react";

export function Modal({ data, closeModal }) {
  const [ingredientsAndMeasures, setIngredientsAndMeasures] = useState([])

  useEffect(() => {
    const concatenatedIngredients = [];

    for (let i = 1; i <= 15; i++) {
      const ingredient = data[`strIngredient${i}`];
      const measure = data[`strMeasure${i}`];

      if (ingredient && measure) {
        const concatenated = `${measure.trim()} ${ingredient.trim()}`;
        concatenatedIngredients.push(concatenated);
      }
    }

    setIngredientsAndMeasures(concatenatedIngredients);


  }, [data])


  return (
    <>
      {
        data.strDrink ?
          <div className="fixed top-0 w-full h-screen flex justify-center items-center bg-black/80">
            < div
              className=" relative mx-auto flex w-3/4 bg-[#662C29] rounded-xl overflow-hidden" >
              <div className="absolute right-5 top-5">
                <Button variant="outline" onClick={closeModal}>Close</Button>
              </div>
              <Image
                alt="Drink"
                className=" w-1/3 object-cover"
                src={data.strDrinkThumb}
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
              />
              <div className="p-6 ">
                <div>
                  <h1 className="text-3xl font-extrabold">{data.strDrink}</h1>
                </div>

                <div>
                  <div>
                    <h2 className="text-lg font-semibold mt-2 mb-2">Ingredients:</h2>
                    <ul className="list-disc list-inside text-sm mb-4">
                      {ingredientsAndMeasures?.map((item, index) => {
                        return (
                          <li key={index}>{item}</li>
                        )
                      })}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mt-2 mb-2">Glass:</h2>
                    <p className="text-sm mb-4">
                      {data.strGlass}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mt-2 mb-2">{data.strAlcoholic}</h2>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mt-2 mb-2">Instructions:</h2>
                    <p className="text-sm mb-4">
                      {data.strInstructions}
                    </p>
                  </div>
                </div>
              </div>
            </div >
          </div >
          :
          //skeleton loader vv
          <div className="fixed top-0 w-full h-screen flex justify-center items-center bg-black/80">
            <div
              className=" relative mx-auto flex w-3/4 bg-[#662C29] rounded-xl overflow-hidden">
              <div className="absolute right-5 top-5">
                <Button variant="outline" onClick={closeModal}>Close</Button>
              </div>
              <div className=" w-1/3 bg-[#F64740]"
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }} />
              <div className="p-6 w-1/2">
                <div className="">
                  <div className="text-3xl font-extrabold bg-[#F64740] w-full h-[50px] rounded-3xl"></div>
                </div>

                <div className="">
                  <div>
                    <h2 className="text-lg font-semibold bg-[#F64740] w-max mt-2 mb-2 text-transparent rounded-full">Ingredients:</h2>
                    <ul className="list-disc list-inside text-sm mb-4 flex gap-2 flex-col">
                      {[1, 2, 3]?.map((item, index) => {
                        return (
                          <div key={index} className=" bg-[#F64740] w-1/4 h-[16px] rounded-3xl"></div>
                        )
                      })}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold bg-[#F64740] w-max mt-2 mb-2 text-transparent rounded-full">Glass:</h2>
                    <ul className="list-disc list-inside text-sm mb-4 flex gap-2 flex-col">
                      {[1, 2, 3]?.map((item, index) => {
                        return (
                          <div key={index} className=" bg-[#F64740] w-1/4 h-[16px] rounded-3xl"></div>
                        )
                      })}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold bg-[#F64740] w-max mt-2 mb-2 text-transparent rounded-full">{data.strAlcoholic}</h2>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold bg-[#F64740] w-max mt-2 mb-2 text-transparent rounded-full">Instructions:</h2>
                    <ul className="list-disc list-inside text-sm mb-4 flex gap-2 flex-col">
                      {[1, 2, 3, 4]?.map((item, index) => {
                        return (
                          <div key={index} className=" bg-[#F64740] w-3/4 h-[16px] rounded-3xl"></div>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  );
}
