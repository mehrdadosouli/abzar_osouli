import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allproducts: [
    {
      id: 1,
      name: "دریل",
      model: "Ronix Rotary Drill",
      image: "abzar (1).png",
      category: "دریل",
      categoryIcon: "abzar(23).png",
      relatedProducts: [
        {
          id: 11,
          name: "دریل چکشی 1",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 782000,
          quantity: 0,
          category: "دریل",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
        {
          id: 12,
          name: " 2 دریل چکشی",
          model: "Bow Saw",
          image: "abzar (2).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 650000,
          quantity: 0,
          category: "دریل",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
        {
          id: 13,
          name: " 3 دریل چکشی",
          model: "Bow Saw",
          image: "abzar (3).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 600000,
          quantity: 0,
          category: "دریل",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
      ],
    },
    {
      id: 2,
      name: "فرز",
      model: "Eden Mini Grinder",
      image: "abzar (2).png",
      category: "فرز",
      categoryIcon: "abzar (24).png",
      relatedProducts: [
        {
          id: 14,
          name: "مینی فرز ادون",
          model: "Bow Saw",
          image: "abzar (17).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 590000,
          quantity: 0,
          category: "فرز",
          categoryIcon: "abzar (17).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
        {
          id: 15,
          name: "2 مینی فرز ادون",
          model: "Bow Saw",
          image: "abzar (18).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 799333,
          quantity: 0,
          category: "فرز",
          categoryIcon: "abzar (18).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
        {
          id: 16,
          name: "3 مینی فرز ادون",
          model: "Bow Saw",
          image: "abzar (19).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 885500,
          quantity: 0,
          category: "فرز",
          categoryIcon: "abzar (19).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
      ],
    },
    {
      id: 3,
      name: "اره کمانی",
      model: "Bow Saw",
      image: "abzar (3).png",
      category: "اره کمانی",
      categoryIcon: "abzar (25).png",
      relatedProducts: [
        {
          id: 17,
          name: " 1 اره کمانی",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 968000,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
        {
          id: 18,
          name: " 2 اره کمانی",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 722000,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
        {
          id: 19,
          name: " 3 اره کمانی",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 7475300,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
      ],
    },
    {
      id: 4,
      name: "سنگ فرز",
      model: "Angle Grinder",
      image: "abzar (11).png",
      category: "سنگ فرز",
      categoryIcon: "abzar (26).png",
      relatedProducts: [
        {
          id: 20,
          name: "سنگ فرز 1",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 796600,
          quantity: 0,
          category: "سنگ فرز",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
        {
          id: 21,
          name: "سنگ فرز 2",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 796000,
          quantity: 0,
          category: "سنگ فرز",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
        {
          id: 22,
          name: "سنگ فرز 3",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 125888,
          quantity: 0,
          category: "سنگ فرز",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
      ],
    },
    {
      id: 5,
      name: "پیکور",
      model: "Jackhammer",
      image: "abzar (13).png",
      category: "پیکور",
      categoryIcon: "abzar (27).png",
      relatedProducts: [
        {
          id: 23,
          name: "پیکور 1",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 7330000,
          quantity: 0,
          category: "پیکور",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
        {
          id: 24,
          name: "پیکور 2",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 148000,
          quantity: 0,
          category: "پیکور",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
        {
          id: 25,
          name: "پیکور 3",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 7330000,
          quantity: 0,
          category: "پیکور",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
      ],
    },
    {
      id: 6,
      name: "اره گرد بر",
      model: "Electric Generator",
      image: "abzar (12).png",
      category: "اره گرد بر",
      categoryIcon: "abzar (28).png",
      relatedProducts: [
        {
          id: 26,
          name: " 1 اره گرد بر",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 478000,
          quantity: 0,
          category: "اره گرد بر",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
        {
          id: 27,
          name: "اره گرد بر 2",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 732000,
          quantity: 0,
          category: "اره گرد بر",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
        {
          id: 28,
          name: "اره گرد بر 3",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 7,
          quantity: 0,
          category: "اره گرد بر",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
      ],
    },
    {
      id: 7,
      name: "کارواش اینتیمکث",
      model: "Intimax Car Wash",
      image: "abzar (7).png",
      category: "کارواش اینتیمکث",
      categoryIcon: "abzar(23).png",
      relatedProducts: [
        {
          id: 29,
          name: " 1 کارواش اینتیمکث",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 7,
          quantity: 0,
          category: "کارواش اینتیمکث",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
        {
          id: 30,
          name: " 2 کارواش اینتیمکث",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 7,
          quantity: 0,
          category: "کارواش اینتیمکث",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
        {
          id: 31,
          name: " 3 کارواش اینتیمکث",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 666000,
          quantity: 0,
          category: "کارواش اینتیمکث",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
      ],
    },
    {
      id: 8,
      name: "موتور برق",
      model: "Electric Generator",
      image: "abzar (8).png",
      category: "موتور برق",
      categoryIcon: "abzar (24).png",
      relatedProducts: [
        {
          id: 32,
          name: " 1 موتور برق",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 70000,
          quantity: 0,
          category: "موتور برق",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
        {
          id: 33,
          name: " 2 موتور برق",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 550000,
          quantity: 0,
          category: "موتور برق",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
        {
          id: 34,
          name: " 3 موتور برق",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 658000,
          quantity: 0,
          category: "موتور برق",
          categoryIcon: "abzar (25).png",
          count: 0,
          galery:["abzar (1).png","abzar (2).png","abzar (9).png","abzar (7).png","abzar (8).png"]
        },
      ],
    },
  ],
  amazingDiscount: [
    {
      id: 1,
      name: "دریل چکشی رونیکس",
      model: "Ronix Rotary Drill",
      image: "abzar (3).png",
      short_description: "یک دریل چکشی قدرتمند با کارایی بالا.",
      long_description:
        "این دریل چکشی رونیکس با توان 800 وات و سرعت متغیر، مناسب برای تمامی کارهای خانگی و صنعتی است.",
      price: 2750000,
      time: 2 * 24 * 60 * 60,
      quantity: 0,
      category: "دریل",
      categoryIcon: "abzar(23).png",
      subcategory: "دریل",
      link: "/دریل",
    },
    {
      id: 2,
      name: "دریل چکشی رونیکس",
      model: "Ronix Rotary Drill",
      image: "abzar (17).png",
      short_description: "یک دریل چکشی قدرتمند با کارایی بالا.",
      long_description:
        "این دریل چکشی رونیکس با توان 800 وات و سرعت متغیر، مناسب برای تمامی کارهای خانگی و صنعتی است.",
      price: 2750000,
      time: 2 * 24 * 60 * 60,
      quantity: 0,
      category: "دریل",
      categoryIcon: "abzar(17).png",
      subcategory: "دریل",
      link: "/دریل",
    },
  ],
  sliderHomePage: [
    {
      id: 1,
      name: "اپتومتر صنعتی رونیکس",
      model: "Ronix Rotary Drill",
      image: "abzar (9).png",
      short_description: "یک اپتومتر دقیق با کارایی بالا.",
      long_description:
        "این دریل چکشی رونیکس با توان 800 وات و سرعت متغیر، مناسب برای تمامی کارهای خانگی و صنعتی است.",
      price: 2750000,
      quantity: 0,
      category: "دریل",
      categoryIcon: "abzar(28).png",
      subcategory: "دریل",
      link: "/دریل",
    },
    {
      id: 2,
      name: "دریل چکشی رونیکس",
      model: "Ronix Rotary Drill",
      image: "abzar (10).png",
      short_description: "یک دریل چکشی قدرتمند با کارایی بالا.",
      long_description:
        "این دریل چکشی رونیکس با توان 800 وات و سرعت متغیر، مناسب برای تمامی کارهای خانگی و صنعتی است.",
      price: 2750000,
      quantity: 0,
      category: "دریل",
      categoryIcon: "abzar(3).png",
      subcategory: "دریل",
      link: "/دریل",
    },
  ],
  sumCountity: 0,
  checkout: 0,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increment: (state, action) => {  
      state.allproducts.forEach(item =>   
        item.relatedProducts.forEach(elem => {  
          if (elem.id === action.payload && elem.count !== -1) {  
            state.checkout += (elem.price); 
            elem.count += 1; 
          }  
        })  
      );  
    },
    decrement: (state, action) => {
      state.allproducts.map((item) =>
        item.relatedProducts.map((elem) => {
          if (elem.id == action.payload) {
            if (elem.count != -1) {
              elem.count -= 1;
              state.checkout -= elem.price;
            }
            if (elem.count == 0) {
              state.sumCountity -= 1;
            }
          }
        })
      );
    },
    addToCard: (state, action) => {
      state.allproducts.map((elem) =>
        elem.relatedProducts.map((item) => {
          if (item.id === action.payload) {
            if (item.count == 0) {
              state.sumCountity += 1;
              item.count += 1;
              state.checkout += item.price ;
              console.log( state.checkout);
            }
          }
        })
      );
    },
  },
});

export const { increment, decrement, addToCard } = productSlice.actions;

export default productSlice.reducer;

export const selectCategory = (store) => store.products.allproducts;
export const selectAllProductsCategory = (store) => {  
  return store.products.allproducts.flatMap(item => item?.relatedProducts);  
};
export const selectAmazingDiscount = (store) => store.products.amazingDiscount;
export const selectSliderHomePage = (store) => store.products.sliderHomePage;
export const selectSumCountity = (store) => store.products.sumCountity;
export const selectCheckout = (store) => store.products.checkout;






