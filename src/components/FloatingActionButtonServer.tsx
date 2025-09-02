import { Suspense } from 'react';
import { FloatingActionButtonDynamic } from './FloatingActionButtonDynamic';

export default function FloatingActionButtonServer() {
    return (
        <Suspense>
            <FloatingActionButtonDynamic />
        </Suspense>
    );
}
