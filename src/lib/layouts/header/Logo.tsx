/** @format */

import { basePath } from '@/app/layout';
import styles from './Logo.module.css';
import Image from 'next/image';

export default function Logo() {
  return (
    <a
      href="https://kyleklus.de/"
      className={[styles.logoWrapper].join(' ')}
    >
      <Image
        src={basePath + "/KK_Logo.svg"}
        alt="KK Logo"
        width={'42'}
        height={'42'}
        quality={100}
        className={[].join(' ')}
      ></Image>
      <p>Kyle Klus</p>
    </a>
  );
}
