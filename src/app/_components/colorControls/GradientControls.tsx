import styles from '../Tools.module.css';

export default function GradientControls(props: {
    locale: 'en' | 'de',
    gradientOrientation: number,
    setGradientOrientation: (gradientOrientation: number) => void,
    disabled?: boolean,
}) {
    const { disabled, gradientOrientation, setGradientOrientation } = props;

    return (
        <div className={[styles.controlsRow, styles.colorControls].join(' ')}>
            <label htmlFor="gradientOrientation">{props.locale === 'en' ? "Gradient Orientation" : "Winkel der Farbverläufe"}{` | ${gradientOrientation}°`}</label>
            <input type="range" name='gradientOrientation' min="0" max="360" step="1" value={gradientOrientation} disabled={disabled} onChange={(e) => {
                setGradientOrientation(parseInt(e.target.value));
            }} />
        </div>
    );
}