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
      category: "ابزار برقی",
      subcategory: "دریل",
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
      category: "ابزار برقی",
      subcategory: "فرز",
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
      category: "ابزار دستی",
      subcategory: "اره",
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
      category: "ابزار برقی",
      subcategory: "فرز",
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
      category: "ابزار برقی",
      subcategory: "تخریب",
    },
    {
      id: 6,
      name: "کارواش اینتیمکث",
      model: "Intimax Car Wash",
      image: "../../../assets/photo/abzar (1).png",
      short_description: "کارواش فشار قوی با قابلیت تنظیم.",
      long_description:
        "کارواش اینتیمکث با فشار 140 بار و لوازم جانبی مختلف، مناسب برای شستشوی خودرو.",
      price: 4350000,
      quantity: 0,
      category: "ابزار تجاری",
      subcategory: "شستشوی خودرو",
    },
    {
      id: 7,
      name: "موتور برق",
      model: "Electric Generator",
      image: "../../../assets/photo/abzar (1).png",
      short_description: "موتور برق با قدرت بالا.",
      long_description:
        "موتور برق با توان 2000 وات و سیستم استارت آسان، مناسب برای کاربردهای خانگی و صنعتی.",
      price: 7500000,
      quantity: 0,
      category: "ابزار برق",
      subcategory: "تولید انرژی",
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
