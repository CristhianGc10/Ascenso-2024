import type React from 'react';

export const canvasDefaults = {
    fitView: true,
    minZoom: 0.2 as number,
    controlsPosition: 'bottom-right' as const,
    containerStyle: { width: '100%', height: '100vh' } as React.CSSProperties,
};
