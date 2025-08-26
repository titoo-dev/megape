'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Hero component with no SSR
export const HeroSectionDynamic = dynamic(() => import('./Hero'), {
    ssr: false,
    loading: () => (
        <section className="relative min-h-screen bg-gray-900 overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="bg-gradient-animated absolute inset-0 bg-gradient-to-r from-[#fe1556]/20 via-gray-900 to-[#32a3ff]/20" style={{ backgroundSize: '200% 200%' }}></div>

            {/* Simplified Floating Orbs */}
            <div className="absolute inset-0">
                {/* Main floating orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#fe1556]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#32a3ff]/20 rounded-full blur-3xl"></div>
            </div>


        </section>
    )
});