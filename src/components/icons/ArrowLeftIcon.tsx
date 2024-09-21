interface ArrowProps {
  className?: string
  disabled?: boolean
}
export function ArrowLeftIcon({ className, disabled = false }: ArrowProps) {
  const stroke = disabled ? '#a1a1aa' : '#000000'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-arrow-left ${className}`}
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}
