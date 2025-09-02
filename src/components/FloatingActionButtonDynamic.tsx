'use client';

import dynamic from 'next/dynamic';

export const FloatingActionButtonDynamic = dynamic(() => import('./FloatingActionButton'), {
    ssr: false,
    loading: () => (
        <button className="
            fixed bottom-6 left-4 right-4 z-50 lg:hidden
            bg-[#fe1556] text-white font-semibold 
            py-3 px-6 rounded-full shadow-lg
        ">
            <span className="text-sm font-semibold text-center block">
                Recevoir l'ebook gratuit
            </span>
        </button>
    )
});
