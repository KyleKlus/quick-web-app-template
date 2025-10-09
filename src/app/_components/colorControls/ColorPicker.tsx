import styles from '../Tools.module.css';

export default function colorPicker(props: {
    text: string,
    color: string,
    disabled?: boolean,
    setColor: (color: string) => void
}) {
    const { color, setColor } = props;

    return (
        <div className={[styles.colorPicker, props.disabled ? styles.disabled : ''].join(' ')}>
            {props.text}
            <div
                className={styles.swatch}
                style={{ backgroundColor: color }}
                onClick={() => {
                    const colorPicker = document.getElementById("colorPicker" + props.text) as HTMLInputElement;
                    colorPicker.click();
                }}
            />
            <input
                hidden
                disabled={props.disabled}
                type="color"
                id={"colorPicker" + props.text}
                name={"colorPicker" + props.text}
                value={color}
                onChange={(e) => {
                    setColor(e.target.value);
                }} />
        </div>
    );
}