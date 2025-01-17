import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "دریل چکشی رونیکس",
      model: "Ronix Rotary Drill",
      image: "../../../assets/photo/abzar (1).png",
      short_description: "یک دریل چکشی قدرتمند با کارایی بالا.",
      long_description:
        "این دریل چکشی رونیکس با توان 800 وات و سرعت متغیر، مناسب برای تمامی کارهای خانگی و صنعتی است.",
      price: 2750000,
      quantity: 0,
      category: "دریل",
      categoryIcon:"abzar(23).png",
      subcategory: "دریل",
      link:"/دریل",
    },
    {
      id: 2,
      name: "مینی فرز ادون",
      model: "Eden Mini Grinder",
      image: "../../../assets/photo/abzar (1).png",
      short_description: "مینی فرز سبک و جمع و جور با کارایی عالی.",
      long_description:
        "مینی فرز ادون با توان 750 وات و طراحی ارگونومیک، گزینه مناسبی برای برش و سابیدن مواد مختلف است.",
      price: 1850000,
      quantity: 0,
      category: "مینی فرز",
      categoryIcon:"abzar (24).png",
      subcategory: "مینی فرز",
      link:"/مینی فرز",
    },
    {
      id: 3,
      name: "اره کمانی",
      model: "Bow Saw",
      image: "../../../assets/photo/abzar (1).png",
      short_description: "اره کمانی با تیغه تیز و مقاوم.",
      long_description:
        "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
      price: 700000,
      quantity: 0,
      category: "اره کمانی",
      categoryIcon:"abzar (25).png",
      subcategory: "اره کمانی",
      link:"/اره کمانی",
    },
    {
      id: 4,
      name: "سنگ فرز",
      model: "Angle Grinder",
      image: "../../../assets/photo/abzar (1).png",
      short_description: "سنگ فرز با قدرت بالا برای کارهای صنعتی.",
      long_description:
        "سنگ فرز با توان 1200 وات و قابلیت تنظیم سرعت، مناسب برای برش و سابیدن فلزات است.",
      price: 3100000,
      quantity: 0,
      category: "سنگ فرز",
      categoryIcon:"abzar (26).png",
      subcategory: "سنگ فرز",
      relatedProducts:[{
        id: 1,
        name: " 1 اره کمانی",
        model: "Bow Saw",
        image: "abzar (1).png",
        short_description: "اره کمانی با تیغه تیز و مقاوم.",
        long_description:
          "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
        price: 700000,
        quantity: 0,
        category: "اره کمانی",
        categoryIcon:"abzar (25).png",
        subcategory: "اره کمانی",
        link:"/اره کمانی",
      },{
        id: 2,
        name: " 2 اره کمانی",
        model: "Bow Saw",
        image: "abzar (1).png",
        short_description: "اره کمانی با تیغه تیز و مقاوم.",
        long_description:
          "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
        price: 700000,
        quantity: 0,
        category: "اره کمانی",
        categoryIcon:"abzar (25).png",
        subcategory: "اره کمانی",
        link:"/اره کمانی",
      },{
        id: 3,
        name: " 3 اره کمانی",
        model: "Bow Saw",
        image: "abzar (1).png",
        short_description: "اره کمانی با تیغه تیز و مقاوم.",
        long_description:
          "این اره کمانی مناسب برای برش چوب و مواد غیر فلزی است. تیغه تیز آن کار را آسان می‌کند.",
        price: 700000,
        quantity: 0,
        category: "اره کمانی",
        categoryIcon:"abzar (25).png",
        subcategory: "اره کمانی",
        link:"/اره کمانی",
      }],
      link:"/سنگ فرز",
    },
    {
      id: 5,
      name: "پیکور",
      model: "Jackhammer",
      image: "../../../assets/photo/abzar (1).png",
      short_description: "پیکور برقی برای کارهای سنگین.",
      long_description:
        "پیکور برقی با توان 1500 وات و طراحی مستحکم، مناسب برای تخریب بتن و سنگ.",
      price: 5900000,
      quantity: 0,
      category: "پیکور",
      categoryIcon:"abzar (27).png",
      subcategory: "پیکور",
      link:"/پیکور",
    },
    {
      id: 6,
      name: "اره گرد بر",
      model: "Electric Generator",
      image: "../../../assets/photo/abzar (1).png",
      short_description: "موتور برق با قدرت بالا.",
      long_description:
        "موتور برق با توان 2000 وات و سیستم استارت آسان، مناسب برای کاربردهای خانگی و صنعتی.",
      price: 7500000,
      quantity: 0,
      category: "اره گرد بر",
      categoryIcon:"abzar (28).png",
      subcategory: "اره گرد بر",
      link:"/اره گرد بر"
    },
    {
      id: 7,
      name: "کارواش اینتیمکث",
      model: "Intimax Car Wash",
      image: "../../../assets/photo/abzar (1).png",
      short_description: "کارواش فشار قوی با قابلیت تنظیم.",
      long_description:
        "کارواش اینتیمکث با فشار 140 بار و لوازم جانبی مختلف، مناسب برای شستشوی خودرو.",
      price: 4350000,
      quantity: 0,
      category: "کارواش اینتیمکث",
      categoryIcon:"abzar(23).png",
      subcategory: "کارواش اینتیمکث",
      link:"/کارواش اینتیمکث"
    },
    {
      id: 8,
      name: "موتور برق",
      model: "Electric Generator",
      image: "../../../assets/photo/abzar (1).png",
      short_description: "موتور برق با قدرت بالا.",
      long_description:
        "موتور برق با توان 2000 وات و سیستم استارت آسان، مناسب برای کاربردهای خانگی و صنعتی.",
      price: 7500000,
      quantity: 0,
      category: "موتور برق",
      categoryIcon: "abzar (24).png",
      subcategory: "موتور برق",
      link:"/موتور برق",
    },
  ],
  sumCountity:0
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = productSlice.actions;

export default productSlice.reducer;

export const selectCategory=(store)=>store.products.products
