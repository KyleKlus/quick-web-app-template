import styles from './Tools.module.css';
import { Button } from "react-bootstrap";
import * as svgHandler from "./svgHandler";
import { DownloadIcon } from "lucide-react";

const DEFAULT_SVG_FILENAME = 'QR_Code.svg';

export default function DownloadButtons() {
    return (
        <div className={styles.controlsRow}>
            <Button variant="success" onClick={() => {
                const qrCodeArea: any = document.getElementById("QRCodeArea");
                const svg = qrCodeArea.getElementsByTagName("svg")[0] as SVGSVGElement;

                if (svg) {
                    svgHandler.downloadSVGAsImageFormat(svg, DEFAULT_SVG_FILENAME, 'svg');

                }
            }}><DownloadIcon />SVG</Button>
            <Button variant="success" onClick={() => {
                const qrCodeArea: any = document.getElementById("QRCodeArea");
                const svg = qrCodeArea.getElementsByTagName("svg")[0] as SVGSVGElement;

                if (svg) {
                    svgHandler.downloadSVGAsImageFormat(svg, DEFAULT_SVG_FILENAME, 'png');
                }
            }}><DownloadIcon />PNG</Button>
            <Button variant="success" onClick={() => {
                const qrCodeArea: any = document.getElementById("QRCodeArea");
                const svg = qrCodeArea.getElementsByTagName("svg")[0] as SVGSVGElement;

                if (svg) {
                    svgHandler.downloadSVGAsImageFormat(svg, DEFAULT_SVG_FILENAME, 'jpeg');
                }
            }}><DownloadIcon />JPEG</Button>
        </div>
    );
}