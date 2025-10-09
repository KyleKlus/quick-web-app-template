const SVG_XML_HEADER = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>';

export function download(href: string, filename: string) {
    const downloadLink = document.createElement('a');
    downloadLink.href = href;
    downloadLink.download = filename;
    downloadLink.click();
}

export function getSvgBlob(svg: SVGSVGElement): Blob {
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([SVG_XML_HEADER + svgData], { type: "image/svg+xml;charset=utf-8" });
    return svgBlob;
}

export function downloadSVG(svg: SVGSVGElement, filename: string) {
    const svgBlob = getSvgBlob(svg);
    download(URL.createObjectURL(svgBlob), filename);
}

export function downloadSVGAsImageFormat(svg: SVGSVGElement, filename: string, format: 'png' | 'jpeg' | 'jpg' | 'svg') {
    if (format === 'svg') {
        downloadSVG(svg, filename);
        return;
    }

    const svgBlob = getSvgBlob(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = URL.createObjectURL(svgBlob);
    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        const imageBlob = canvas.toBlob((blob) => {
            if (blob) {
                download(URL.createObjectURL(blob), filename);
            }
        }, `image/${format}`);
    }
}