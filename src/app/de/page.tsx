import Content from "@/lib/container/Content";

import type { Metadata, Viewport } from 'next'
import styles from '../QrCodePage.module.css';
import Tools from "../_components/Tools";

export const metadata: Metadata = {
    title: "Kyle Klus | QR Code Generator",
    description: "Ein einfacher QR Code Generator.",
    authors: [{ name: "Kyle Klus", url: "https://kyleklus.de" }],
    keywords: ["online tools", "free tools", "werkzeuge", "qr code", "qr code generator", "kyle klus"],
    creator: "Kyle Klus",
    publisher: "Kyle Klus",
    abstract: "Ein einfacher QR Code Generator.",
    applicationName: "QR Code Generator",
    category: "werkzeuge",
    classification: "qr code generator",
    openGraph: {
        type: "website",
        locale: "de_DE",
        countryName: "DE",
        url: "https://kyleklus.de/qr-code-generator/de",
        title: "Kyle Klus | QR Code Generator",
        description: "Ein einfacher QR Code Generator.",
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
            <Tools locale="de" />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ fontSize: 'large' }}>Du magst dieses Tool?</div>
                <a
                    href='https://ko-fi.com/W7W1D5JTZ'
                    target='_blank'
                    className={styles.donateButton}
                >
                    Spende ❤️
                </a>
            </div>

        </Content>
    );
}