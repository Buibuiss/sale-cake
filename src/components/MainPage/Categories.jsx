import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cate1.jpg",
      cateName: "Panna cotta",
    },
    {
      cateImg: "./images/category/cate2.jpg",
      cateName: "Cake Cup",
    },
    {
      cateImg: "./images/category/cate3.jpg",
      cateName: "Birthday Cake",
    },
    {
      cateImg: "./images/category/cate4.jpg",
      cateName: "Flan",
    },
    {
      cateImg: "./images/category/cate5.jpg",
      cateName: "Tiramisu",
    },
    {
      cateImg: "./images/category/cate6.jpg",
      cateName: "Red Velvet Cake",
    },
    {
      cateImg: "./images/category/cate7.jpg",
      cateName: "Salted Egg Orchid",
    },
   
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
