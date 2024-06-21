'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import {GridThemeProvider, TGridTheme} from '@acrool/react-grid';

// add this ↓
const gridTheme: TGridTheme = {
    spacer: '.625rem',
    gridColumns: 12,
    gridBreakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1540,
    },
    containerMaxWidths: {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
        xxl: 1141,
    },
}

// add this ↓
interface IBearReactGridRegistryProps {
    children: React.ReactNode,
}

// add this ↓
export function BearReactGridRegistry({
  children,
}: IBearReactGridRegistryProps) {
    return <GridThemeProvider gridTheme={gridTheme}>
        {children}
    </GridThemeProvider>;
}

export default function StyledComponentsRegistry({
 children,
}: {
    children: React.ReactNode
}) {
    // Only create stylesheet once with lazy initial state
    // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement()
        styledComponentsStyleSheet.instance.clearTag()
        return <>{styles}</>
    })

    if (typeof window !== 'undefined') return <>{children}</>
    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            {children}
        </StyleSheetManager>
    )
}

