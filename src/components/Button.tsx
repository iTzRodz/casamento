import React from 'react'
import { twMerge } from 'tailwind-merge'
import { ArrowRightIcon } from './icons/ArrowRightIcon'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  arrowIcon?: boolean
}
export function Button(props: IButtonProps) {
  const { children, variant, className, arrowIcon, ...otherProps } = props

  const bgButtonAndHover = variant === 'primary' ? 'bg-[#1a1a1a]' : 'bg-black'

  const buttonClassName = twMerge(
    'py-2 px-4 rounded-lg border border-transparent  cursor-pointer shadow-md  font-semibold text-center transition-all duration-200 hover:shadow-xl ease-in flex items-center justify-center',
    bgButtonAndHover,
    className,
    arrowIcon && 'relative group',
  )

  return (
    <button {...otherProps} className={twMerge(buttonClassName)}>
      <span>{children}</span>
      <ArrowRightIcon className="absolute top-1/2 right-16 transform translate-y-[-50%] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 ease-in-out" />
    </button>
  )
}
