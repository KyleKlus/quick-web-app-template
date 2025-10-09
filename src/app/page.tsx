import Content from "@/lib/container/Content";

import type { Metadata, Viewport } from 'next'
import styles from './QrCodePage.module.css';
import Tools from "./_components/Tools";

export const metadata: Metadata = {
    title: "Kyle Klus | QR Code Generator",
    description: "A simple QR Code generator.",
    authors: [{ name: "Kyle Klus", url: "https://kyleklus.de" }],
    keywords: ["qr code", "qr code generator", "kyle klus", "tools", "online tools", "free tools",],
    creator: "Kyle Klus",
    publisher: "Kyle Klus",
    abstract: "A simple QR Code generator.",
    applicationName: "QR Code Generator",
    category: "tools",
    classification: "qr code generator",
    openGraph: {
        type: "website",
        locale: "en_US",
        countryName: "US",
        url: "https://kyleklus.de/qr-code-generator",
        title: "Kyle Klus | QR Code Generator",
        description: "A simple QR Code generator.",
    },
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function Page() {
    return (
        <Content className={[styles.textToolsPage, 'dotted'].join(' ')}>
            <h1>QR Code Generator</h1>
            <Tools locale="en" />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ fontSize: 'large' }}>Like this tool?</div>
                <a
                    href='https://ko-fi.com/W7W1D5JTZ'
                    target='_blank'
                    className={styles.donateButton}
                >
                    Donate ❤️
                </a>
            </div>

        </Content>
    );
}