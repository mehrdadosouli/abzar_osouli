import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allproducts: [
    {
      id: 1,
      name: "سسسدریل چکشی رونیکس",
      model: "Ronix Rotary Drill",
      image: "abzar (1).png",
      short_description: "یک دریل چکشی قدرتمند با کارایی بالا.",
      long_description:
        "این دریل چکشی رونیکس با توان 800 وات و سرعت متغیر، مناسب برای تمامی کارهای خانگی و صنعتی است.",
      price: 2750000,
      quantity: 0,
      category: "دریل",
      categoryIcon: "abzar(23).png",
      subcategory: "دریل",
      relatedProducts: [
        {
          id: 11,
          name: " 1 اره کمانی",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 782000,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
        {
          id: 12,
          name: " 2 اره کمانی",
          model: "Bow Saw",
          image: "abzar (2).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 650000,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
        {
          id: 13,
          name: " 3 اره کمانی",
          model: "Bow Saw",
          image: "abzar (3).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 600000,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
      ],
      link: "/دریل",
    },
    {
      id: 2,
      name: "مینی فرز ادون",
      model: "Eden Mini Grinder",
      image: "abzar (2).png",
      short_description: "مینی فرز سبک و جمع و جور با کارایی عالی.",
      long_description:
        "مینی فرز ادون با توان 750 وات و طراحی ارگونومیک، گزینه مناسبی برای برش و سابیدن مواد مختلف است.",
      price: 1850000,
      quantity: 0,
      category: "مینی فرز",
      categoryIcon: "abzar (24).png",
      subcategory: "مینی فرز",
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
          category: "اره کمانی",
          categoryIcon: "abzar (17).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
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
          category: "اره کمانی",
          categoryIcon: "abzar (18).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
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
          category: "اره کمانی",
          categoryIcon: "abzar (19).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
      ],
      link: "/مینی فرز",
    },
    {
      id: 3,
      name: "اره کمانی",
      model: "Bow Saw",
      image: "abzar (3).png",
      short_description: "اره کمانی با تیغه تیز و مقاوم.",
      long_description:
        "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
      price: 7,
      quantity: 0,
      category: "اره کمانی",
      categoryIcon: "abzar (25).png",
      subcategory: "اره کمانی",
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
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
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
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
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
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
      ],
      link: "/اره کمانی",
    },
    {
      id: 4,
      name: "سنگ فرز",
      model: "Angle Grinder",
      image: "abzar (11).png",
      short_description: "سنگ فرز با قدرت بالا برای کارهای صنعتی.",
      long_description:
        "سنگ فرز با توان 1200 وات و قابلیت تنظیم سرعت، مناسب برای برش و سابیدن فلزات است.",
      price: 3100000,
      quantity: 0,
      category: "سنگ فرز",
      categoryIcon: "abzar (26).png",
      subcategory: "سنگ فرز",
      relatedProducts: [
        {
          id: 20,
          name: " 20 اره کمانی",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 796600,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
        {
          id: 21,
          name: " 21 اره کمانی",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 796000,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
        {
          id: 22,
          name: " 22 اره کمانی",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 125888,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
      ],
      link: "/سنگ فرز",
    },
    {
      id: 5,
      name: "پیکور",
      model: "Jackhammer",
      image: "abzar (13).png",
      short_description: "پیکور برقی برای کارهای سنگین.",
      long_description:
        "پیکور برقی با توان 1500 وات و طراحی مستحکم، مناسب برای تخریب بتن و سنگ.",
      price: 5900000,
      quantity: 0,
      category: "پیکور",
      categoryIcon: "abzar (27).png",
      subcategory: "پیکور",
      relatedProducts: [
        {
          id: 23,
          name: " 23 اره کمانی",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 7330000,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
        {
          id: 24,
          name: " 24 اره کمانی",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 148000,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
        {
          id: 25,
          name: " 25 اره کمانی",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 7330000,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
      ],
      link: "/پیکور",
    },
    {
      id: 6,
      name: "اره گرد بر",
      model: "Electric Generator",
      image: "abzar (12).png",
      short_description: "موتور برق با قدرت بالا.",
      long_description:
        "موتور برق با توان 2000 وات و سیستم استارت آسان، مناسب برای کاربردهای خانگی و صنعتی.",
      price: 7500000,
      quantity: 0,
      category: "اره گرد بر",
      categoryIcon: "abzar (28).png",
      subcategory: "اره گرد بر",
      relatedProducts: [
        {
          id: 26,
          name: " 26 اره کمانی",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 478000,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
        {
          id: 27,
          name: " 27 اره کمانی",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 732000,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
        {
          id: 28,
          name: " 28 اره کمانی",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 7,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
      ],
      link: "/اره گرد بر",
    },
    {
      id: 7,
      name: "کارواش اینتیمکث",
      model: "Intimax Car Wash",
      image: "abzar (7).png",
      short_description: "کارواش فشار قوی با قابلیت تنظیم.",
      long_description:
        "کارواش اینتیمکث با فشار 140 بار و لوازم جانبی مختلف، مناسب برای شستشوی خودرو.",
      price: 4350000,
      quantity: 0,
      category: "کارواش اینتیمکث",
      categoryIcon: "abzar(23).png",
      subcategory: "کارواش اینتیمکث",
      relatedProducts: [
        {
          id: 29,
          name: " 1 اره کمانی",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 7,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
        {
          id: 30,
          name: " 2 اره کمانی",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 7,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
        {
          id: 31,
          name: " 3 اره کمانی",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 666000,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
      ],
      link: "/کارواش اینتیمکث",
    },
    {
      id: 8,
      name: "موتور برق",
      model: "Electric Generator",
      image: "abzar (8).png",
      short_description: "موتور برق با قدرت بالا.",
      long_description:
        "موتور برق با توان 2000 وات و سیستم استارت آسان، مناسب برای کاربردهای خانگی و صنعتی.",
      price: 7500000,
      quantity: 0,
      category: "موتور برق",
      categoryIcon: "abzar (24).png",
      subcategory: "موتور برق",
      relatedProducts: [
        {
          id: 32,
          name: " 1 اره کمانی",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 70000,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
        {
          id: 33,
          name: " 2 اره کمانی",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 550000,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
        {
          id: 34,
          name: " 3 اره کمانی",
          model: "Bow Saw",
          image: "abzar (1).png",
          short_description: "اره کمانی با تیغه تیز و مقاوم.",
          long_description:
            "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
          price: 658000,
          quantity: 0,
          category: "اره کمانی",
          categoryIcon: "abzar (25).png",
          subcategory: "اره کمانی",
          link: "/اره کمانی",
          count: 0,
        },
      ],
      link: "/موتور برق",
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






