import type { Dish } from "@/types/content"

export const dishesEyebrow = "节气菜单 / 初夏"
export const dishesHeading = "几道会回来的菜"
export const dishesLede = "菜单随节气两三周更新一次。以下是本月最先回来的四道。"
export const dishesCta = "查看完整菜单"

export const dishes: Dish[] = [
  {
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    alt: "干邑油鸡",
    cat: "大菜",
    title: "干邑清远 - 油鸡",
    desc: "地龙油拌入普国稻米,干邑切成粒顶,原汤回淋。",
    price: "￥188"
  },
  {
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    alt: "红烧鱼",
    cat: "主菜",
    title: "地龙红鱼 - 豉油",
    desc: "鲳鱼以盐在红烧四分三十秒,豉油与焦豆双重收汁。",
    price: "￥268"
  },
  {
    img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80",
    alt: "潮汕三拼",
    cat: "凉菜",
    title: "潮汕温水 - 三拼",
    desc: "豉香蜇子、头菜、九江陈村三十五味,三十年的收藏家。",
    price: "￥128"
  },
  {
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    alt: "汤圆",
    cat: "甜品",
    title: "焦糖黑芝麻 - 汤圆",
    desc: "现炒黑芝麻打糕,烫平制做底,焦糖淡盐点开。",
    price: "￥58"
  }
]
