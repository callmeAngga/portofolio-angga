import { Plus_Jakarta_Sans as JakartaSans, Roboto_Slab } from 'next/font/google'

export const jakartaSans = JakartaSans({
    subsets: ['latin'],
    weight: ['200', '300', '500', '700'],
    style: ['normal', 'italic']
})

export const robotoSlab = Roboto_Slab({
    subsets: ['latin'],
    weight: ['900'],
})

