import { Plus_Jakarta_Sans as JakartaSans, Roboto_Slab, Dancing_Script, Shantell_Sans } from 'next/font/google'

export const jakartaSans = JakartaSans({
    subsets: ['latin'],
    weight: ['200', '300', '500', '700'],
    style: ['normal', 'italic']
})

export const robotoSlab = Roboto_Slab({
    subsets: ['latin'],
    weight: ['900'],
})

export const dancingScript = Dancing_Script({
    subsets: ['latin'],
    // weight: ['600']
})

export const shantelSans = Shantell_Sans({
    subsets: ['latin'],
    // weight: ['600']
})

