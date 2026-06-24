export interface NavLink {
  label: string
  href: string
}

export type PillarIcon = "Flame" | "MountainSnow" | "Hourglass"

export interface Pillar {
  icon: PillarIcon
  title: string
  desc: string
}

export interface Dish {
  img: string
  alt: string
  cat: string
  title: string
  desc: string
  price: string
}

export interface MenuCourse {
  tag: string
  title: string
  desc: string
}

export interface HoursRow {
  days: string
  time: string
  closed?: boolean
}

export interface Brand {
  mark: string
  name: string
  sub: string
}

export interface Contact {
  address: string
  phone: string
  email: string
}

export interface SiteMeta {
  title: string
  description: string
}
