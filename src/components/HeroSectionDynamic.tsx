'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Hero component with no SSR
export const HeroSectionDynamic = dynamic(() => import('./Hero'), {
    ssr: false,
    loading: () => (
        <section className="relative min-h-screen bg-gray-900 overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="bg-gradient-animated absolute inset-0 bg-gradient-to-r from-[#fe1556]/20 via-gray-900 to-[#32a3ff]/20" style={{ backgroundSize: '200% 200%' }}></div>

            {/* Enhanced Floating Orbs */}
            <div className="absolute inset-0">
                {/* Large center orb */}
                <div
                    className="center-orb absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#fe1556]/30 to-[#32a3ff]/20 rounded-full blur-3xl opacity-40"
                ></div>

                {/* Enhanced floating orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#fe1556]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#32a3ff]/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#fe1556]/10 to-[#32a3ff]/10 rounded-full blur-2xl"></div>

                {/* Small accent orbs */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#fe1556]/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-[#32a3ff]/30 rounded-full blur-lg"></div>
            </div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="h-full w-full" style={{
                    backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>
        </section>
    )
});