export function getGradient(foregroundColor: string, backgroundColor: string, angle: number) {
    const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    gradient.setAttribute("id", "myGradient");
    const x2 = 50 + Math.cos(angle * Math.PI / 180) * 50;
    const y2 = 50 + Math.sin(angle * Math.PI / 180) * 50;

    gradient.setAttribute('x1', '50%');
    gradient.setAttribute('y1', '50%');
    gradient.setAttribute('x2', `${x2}%`);
    gradient.setAttribute('y2', `${y2}%`);
    gradient.setAttribute("spreadMethod", "pad");
    gradient.setAttribute("gradientUnits", "userSpaceOnUse");
    const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("stop-color", foregroundColor);
    stop1.setAttribute("stop-opacity", "1");
    const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("stop-color", backgroundColor);
    stop2.setAttribute("stop-opacity", "1");
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    return gradient;
};