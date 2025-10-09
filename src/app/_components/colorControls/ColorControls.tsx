import styles from '../Tools.module.css';
import ColorPicker from "./ColorPicker";
import { ColorMode } from "./ColorModes";

export default function Tools(props: {
    locale: 'en' | 'de',
    colorMode: ColorMode,
    firstColor: string,
    setFirstColor: (color: string) => void,
    secondColor: string,
    setSecondColor: (color: string) => void,
    thirdColor: string,
    setThirdColor: (color: string) => void
}) {
    const { colorMode, firstColor, setFirstColor, secondColor, setSecondColor, thirdColor, setThirdColor } = props;
    return (
        <div className={[styles.controlsRow, styles.colorControls].join(' ')}>

            <ColorPicker
                text={props.locale === 'en' ? "First Color:" : "Erste Farbe:"}
                color={firstColor}
                setColor={setFirstColor}
            />
            <ColorPicker
                text={props.locale === 'en' ? "Second Color:" : "Zweite Farbe:"}
                color={secondColor}
                setColor={setSecondColor}
            />
            <ColorPicker
                disabled={colorMode === ColorMode.Solid}
                text={props.locale === 'en' ? "Third Color:" : "Dritte Farbe:"}
                color={thirdColor}
                setColor={setThirdColor}
            />
        </div>
    );
}