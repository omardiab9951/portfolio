export interface Project {
  number: string
  category: string
  status: string
  name: string
  arabicName?: string
  description: string
  tags: string[]
  link: string
  linkLabel: string
  featured?: boolean
}

export interface Skill {
  icon: string
  name: string
  description: string
}

export interface SocialLink {
  label: string
  href: string
  external?: boolean
}
