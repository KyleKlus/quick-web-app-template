"use client";

import { useState } from "react";
import styles from './Tools.module.css';

export default function Tools(props: { locale: 'en' | 'de' }) {
    return (
        <div className={styles.tools}>
            <div className={styles.toolPage}>
            </div>
        </div>
    );
}