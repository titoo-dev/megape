import { Suspense } from 'react';
import { HeroSectionDynamic } from './HeroSectionDynamic';

export default function HeroServer() {
    return (
        <Suspense>
            <HeroSectionDynamic />
        </Suspense>
    );
}