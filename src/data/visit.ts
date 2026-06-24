import type { HoursRow } from "@/types/content"

export const visitEyebrow = "到访"
export const visitHeading = "胶州路 / 一栋旧楼"
export const visitAddress = "上海市常德胶州路 42 号 2 楼\n近地铁 1 / 10 / 12 号线 陕西南路站 步行 6 分钟"
export const visitCardImg = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
export const visitCardAlt = "远山餐厅外景"
export const visitCardCaption = "推开铜门,酱在桌上香。"

export const hours: HoursRow[] = [
  { days: "周二 - 周三", time: "17:30 - 22:30" },
  { days: "周五 - 周六", time: "17:30 - 23:30" },
  { days: "周日 brunch", time: "11:00 - 14:30" },
  { days: "周一",         time: "休息", closed: true }
]
