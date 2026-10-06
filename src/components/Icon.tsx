const paths: Record<string, string> = {
  arrow: 'M5 12h14M13 6l6 6-6 6',
  arrowUpRight: 'M7 17 17 7M8 7h9v9',
  chevronDown: 'm6 9 6 6 6-6',
  chevronRight: 'm9 6 6 6-6 6',
  chevronLeft: 'm15 6-6 6 6 6',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  phone:
    'M5 4h3.5l2 5-2.4 1.5a11 11 0 0 0 5.4 5.4L15 13.5l5 2V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
  mail: 'M3.5 5.5h17v13h-17zM3.5 6.5l8.5 6.5 8.5-6.5',
  pin: 'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3.5 2',
  check: 'm5 12.5 4.5 4.5L19 7',
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14',
  plane:
    'M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z',
  calendar: 'M4.5 6h15v14h-15zM4.5 10.5h15M8.5 3.5v4M15.5 3.5v4',
  chat: 'M20 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.3A8 8 0 1 1 20 12z',
  cap: 'M2.5 9 12 4.5 21.5 9 12 13.5zM6.5 11v5c3 2.4 8 2.4 11 0v-5M21.5 9v5.5',
  globe: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z',
  file: 'M6.5 3h8l4 4v14h-12zM14.5 3v4h4M9 12h6M9 16h6',
  download: 'M12 4v11M7 10.5l5 5 5-5M5 20h14',
  copy: 'M9 9h11v11H9zM15 9V4H4v11h5',
  bolt: 'M13.5 2 4.5 14h7l-1 8 9-12h-7z',
  star: 'M12 3.2l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.2l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 20.5c1-3.6 4-5.5 7.5-5.5s6.5 1.9 7.5 5.5',
  shield: 'M12 3 4.5 6v6c0 4.5 3.2 7.8 7.5 9 4.3-1.2 7.5-4.5 7.5-9V6z',
  search: 'M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM16 16l4.5 4.5',
  external: 'M14 4h6v6M20 4l-9 9M18 14v6H4V6h6',
  instagram: 'M4 4h16v16H4zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM16.8 7.2h.01',
  facebook: 'M14 8.5h3V4.5h-3a4 4 0 0 0-4 4V11H7v4h3v6h4v-6h3l.8-4H14V8.5z',
  linkedin: 'M4.5 9.5h3.5v10H4.5zM6.2 4.2a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8zM10.5 9.5H14V11c.6-1 1.8-1.8 3.4-1.8 2.8 0 3.6 1.8 3.6 4.4v5.9h-3.5v-5.2c0-1.3-.3-2.3-1.6-2.3-1.4 0-1.9 1-1.9 2.4v5.1h-3.5z',
  youtube: 'M3 7.5c.2-1.6 1.3-2.5 2.9-2.6C8 4.7 10 4.6 12 4.6s4 .1 6.1.3c1.6.1 2.7 1 2.9 2.6.2 1.5.2 3 .2 4.5s0 3-.2 4.5c-.2 1.6-1.3 2.5-2.9 2.6-2.1.2-4.1.3-6.1.3s-4-.1-6.1-.3C4.3 19 3.2 18.1 3 16.5 2.8 15 2.8 13.5 2.8 12s0-3 .2-4.5zM10 9v6l5-3z',
  tiktok: 'M14.5 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14.5 3c.4 2.6 2.4 4.6 5 5',
}

const filled = new Set(['star', 'bolt', 'linkedin', 'youtube'])

type Props = { name: keyof typeof paths | string; size?: number; className?: string; title?: string }

export function Icon({ name, size = 20, className, title }: Props) {
  const d = paths[name]
  const isFilled = filled.has(name)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? 'none' : 'currentColor'}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
    >
      {title && <title>{title}</title>}
      <path d={d} fillRule={name === 'youtube' ? 'evenodd' : undefined} />
    </svg>
  )
}
