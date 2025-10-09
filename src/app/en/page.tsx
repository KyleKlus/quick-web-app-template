import Content from "@/lib/container/Content";

import type { Metadata, Viewport } from 'next'
import styles from '../Page.module.css';
import Tools from "../_components/Tools";

export const metadata: Metadata = {
    title: "Kyle Klus | TOOL NAME",
    description: "A simple TOOL NAME.",
    authors: [{ name: "Kyle Klus", url: "https://kyleklus.de" }],
    keywords: ["qr code", "tool name", "kyle klus", "tools", "online tools", "free tools",],
    creator: "Kyle Klus",
    publisher: "Kyle Klus",
    abstract: "A simple TOOL NAME.",
    applicationName: "TOOL NAME",
    category: "tools",
    classification: "tool name",
    openGraph: {
        type: "website",
        locale: "en_US",
        countryName: "US",
        url: "https://kyleklus.de/qr-code-generator/en",
        title: "Kyle Klus | TOOL NAME",
        description: "A simple TOOL NAME.",
    },
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function Page() {
    return (
        <Content className={[styles.textToolsPage, 'dotted'].join(' ')}>
            <h1>TOOL NAME</h1>
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
