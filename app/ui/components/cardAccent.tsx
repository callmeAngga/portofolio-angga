import React from 'react';

// interface CardProps {
//     header: string;
//     value1: string;
//     value2: string;
//     backgroundColor?: 'card1' | 'card2' | 'card3';
//     textColor?: 'light' | 'dark';
// }


// export default function CardAccent({ header, value1, value2, backgroundColor = 'card1', textColor = 'light' }: CardProps) {
//     const colorBackground = backgroundColor === 'card1' ? '#D9FB69' : ('card2' ? '#2C7865' : '#737A20');
//     const colorText = textColor === 'light' ? 'normalText' : 'normalTextDark';
//     return (
//         <div className="relative w-64 h-36 flex flex-col justify-center">
//             <div className={`w-12 h-12 rounded-full `}>

//             </div>
//             <div className="w-full h-24">

//             </div>
//         </div>
//     );
// }


export default function CardAccent() {
    return (
        <div className="relative w-64 h-24 flex flex-col items-center">
            <div className={`w-12 h-12 mx-auto absolute rounded-full bg-white dark:bg-black border-[10px] border-solid border-background dark:border-cardDark transform -translate-y-1/2`}>
            </div>

            <div className="w-full h-24 flex flex-col justify-evenly bg-background dark:bg-cardDark p-4 rounded-2xl">
                <div className='flex space-x-3 items-center w-full'>
                    <div className={`w-2 h-2 rounded-full bg-white dark:bg-black`}></div>
                    <h3 className='font-bold text-textHeader dark:text-textHeaderDark'>Universitas Padjadjaran</h3>
                </div>
                <div className='flex space-x-3 items-center w-full'>
                    <div className={`w-2 h-2 rounded-full bg-white dark:bg-black`}></div>
                    <p className='text-sm text-normalText dark:text-normalTextDark'>Teknik Informatika</p>
                </div>
                <div className='flex space-x-3 items-center w-full'>
                    <div className={`w-2 h-2 rounded-full bg-white dark:bg-black`}></div>
                    <p className='text-sm text-normalText dark:text-normalTextDark'>2022 - 2026</p>
                </div>
            </div>
        </div>
    );
}
