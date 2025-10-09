import styles from '../Tools.module.css';
import { ColorMode } from "./ColorModes";

export default function ColorModeControls(props: {
    locale: 'en' | 'de',
    colorMode: ColorMode,
    setColorMode: (colorMode: ColorMode) => void,
}) {
    const { colorMode, setColorMode } = props;

    return (
        <div className={[styles.controlsRow, styles.colorControls].join(' ')}>
            <div className={styles.colorModes}>
                <div className={styles.colorModeOption}>
                    <input type="radio" id="solidColor" name="colorModes" value="solidColor" checked={colorMode === ColorMode.Solid} onChange={() => {
                        setColorMode(ColorMode.Solid);
                    }} />
                    <label htmlFor="solidColor">{props.locale === 'en' ? 'Solid Color' : 'Farbe'}</label>
                </div>
                <div className={styles.colorModeOption}>
                    <input type="radio" id="fgGradient" name="colorModes" value="fgGradient" checked={colorMode === ColorMode.ForegroundGradient} onChange={() => {
                        setColorMode(ColorMode.ForegroundGradient);
                    }} />
                    <label htmlFor="fgGradient">{props.locale === 'en' ? 'Foreground Gradient' : 'Vordergrund Gradient'}</label>
                </div>
                <div className={styles.colorModeOption}>
                    <input type="radio" id="bgGradient" name="colorModes" value="bgGradient" checked={colorMode === ColorMode.BackgroundGradient} onChange={() => {
                        setColorMode(ColorMode.BackgroundGradient);
                    }} />
                    <label htmlFor="bgGradient">{props.locale === 'en' ? 'Background Gradient' : 'Hintergrund Gradient'}</label>
                </div>
            </div>
        </div>
    );
}