import Content from "@/lib/container/Content";

import type { Metadata, Viewport } from 'next'
import styles from '../Page.module.css';
import Tools from "../_components/Tools";
import { defaultSiteConfig } from "../defaultSiteConfig";

export const metadata: Metadata = {
    ...defaultSiteConfig.metadata.de,
    openGraph: {
        ...defaultSiteConfig.metadata.de.openGraph,
        url: `${defaultSiteConfig.metadata.de.openGraph.url}/de`
    }
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function Page() {
    return (
        <Content className={[styles.toolPage, 'applyHeaderOffset', 'applyBottomPadding', 'dotted'].join(' ')}>
            <h1>QR Code Generator</h1>
            <Tools locale="de" />
        </Content>
    );
}