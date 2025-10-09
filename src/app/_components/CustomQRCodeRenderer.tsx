"use client";

import { useEffect } from "react";
import QRCode from "react-qr-code";
import { getGradient } from "./gradientRenderer";
import { ColorMode } from "./colorControls/ColorModes";


export default function CustomQRCodeRenderer(props: {
    link: string,
    backgroundColor: string,
    secondColor: string,
    thirdColor: string,
    gradientOrientation: number,
    colorMode: ColorMode,
}) {
    const { link, secondColor, backgroundColor, thirdColor, gradientOrientation, colorMode } = props;

    useEffect(() => {
        const qrCodeElement: any = document.getElementById("QRCode");
        let found = 0;
        if (qrCodeElement) {
            const svg = qrCodeElement.getElementsByTagName("svg")[0] as SVGSVGElement;

            const defsList = svg.getElementsByTagName("defs");
            if (defsList.length > 0) {
                Array.from(defsList).forEach(element => {
                    element.remove();
                });
            }

            if (colorMode !== ColorMode.Solid) {
                const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

                defs.appendChild(getGradient(secondColor, thirdColor, gradientOrientation));
                svg.insertBefore(defs, svg.firstChild);
            }

            svg.childNodes.forEach((node: any) => {
                if (node.nodeName === "path") {
                    found++;
                    if (colorMode === ColorMode.ForegroundGradient) {
                        if (found === 2) {
                            node.setAttribute("fill", "url(#myGradient)");
                        } else {
                            node.setAttribute("fill", backgroundColor);
                        }
                    } else if (colorMode === ColorMode.BackgroundGradient) {
                        if (found === 1) {
                            node.setAttribute("fill", "url(#myGradient)");
                        } else {
                            node.setAttribute("fill", backgroundColor);
                        }
                    } else {
                        if (found === 1) {
                            node.setAttribute("fill", backgroundColor);
                        } else {
                            node.setAttribute("fill", secondColor);
                        }
                    }
                }
            });
        }
    }, [backgroundColor, secondColor, thirdColor, gradientOrientation, colorMode, link]);

    return (
        <div id="QRCode">
            <QRCode
                value={link} size={350}
                fgColor={secondColor}
                bgColor={backgroundColor}
            />
        </div>
    );
}