const basePath: string = '/qr-code-generator';
const url: string = 'https://kyleklus.de';
const heropageUrl: string = `${url}/#heroPage`;
const portfoliopageUrl: string = `${url}/#portfolioPage`;
const aboutpageUrl: string = `${url}/#aboutPage`;
const privacyUrl: string = `${url}/privacy`;
const termsOfServiceUrl: string = `${url}/terms-of-service`;
const projectsUrl: string = `${url}/projects`;
const cookbookDEUrl: string = `${url}/Kyles-Cookbook/de`;
const cookbookENUrl: string = `${url}/Kyles-Cookbook/en`;
const receiptManagerUrl: string = `${url}/receipt-manager-tool`;
const textToolsUrl: string = `${url}/text-tools`;
const qrCodeGeneratorUrl: string = `${url}/qr-code-generator`;
const githubUrl: string = 'https://github.com/KyleKlus';
const linkedinUrl: string = 'https://www.linkedin.com/in/kyle-klus-9a2588275';
const kofiUrl: string = 'https://ko-fi.com/majorenkidu';
const contactUrl: string = 'mailto:kyle.klus.2@gmail.com';
const author: string = 'Kyle Klus';
const metadataEn = {
    title: "Kyle Klus | QR Code Generator",
    description: "A simple QR Code generator.",
    keywords: ["qr code", "qr code generator", "kyle klus", "tools", "online tools", "free tools",],
    abstract: "A simple QR Code generator.",
    applicationName: "QR Code Generator",
    category: "tools",
    classification: "qr code generator",
    openGraph: {
        type: "website",
        locale: "en_US",
        countryName: "US",
        url: `${url}${basePath}`,
        title: "Kyle Klus | QR Code Generator",
        description: "A simple QR Code generator.",
    },
    authors: [{ name: author, url: url }],
    creator: author,
    publisher: author,
}

export const defaultSiteConfig = {
    basePath,
    url,
    author,
    projectsUrl,
    cookbookDEUrl,
    cookbookENUrl,
    receiptManagerUrl,
    textToolsUrl,
    qrCodeGeneratorUrl,
    heropageUrl,
    portfoliopageUrl,
    aboutpageUrl,
    privacyUrl,
    termsOfServiceUrl,
    githubUrl,
    linkedinUrl,
    kofiUrl,
    contactUrl,
    metadata: {
        en: metadataEn,
        de: {
            ...metadataEn,
            description: "Ein einfacher QR Code Generator.",
            keywords: ["online tools", "free tools", "gratis", "kostenlos", "werkzeuge", "qr code", "qr code generator", "kyle klus"],
            abstract: "Ein einfacher QR Code Generator.",
            category: "werkzeuge",
            openGraph: {
                ...metadataEn.openGraph,
                locale: "de_DE",
                countryName: "DE",
                description: "Ein einfacher QR Code Generator.",
            },
        }
    }
};