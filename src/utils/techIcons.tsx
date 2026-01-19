const icons = import.meta.glob(
  '../assets/TechIcons/*.svg',
  { eager: true, import: 'default' }
)

export const techIcons: Record<string, string> = {}
for (const path in icons) {
  const key = path
    .split('/')
    .pop()!
    .replace('.svg', '')
    .toLowerCase()
    console.log(key)
    
  techIcons[key] = icons[path] as string
}
