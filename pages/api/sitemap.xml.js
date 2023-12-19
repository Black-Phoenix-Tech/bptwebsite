import fs from "fs";
import path from "path";

export async function getServerSideProps({ res }) {
    try {
        const baseUrl = "https://blackphoenix.ca"; // Replace with your website's base URL

        const staticPages = ["/", "/pricing", "/features", "/download"]; // Add your static page URLs here

        const currentDate = new Date().toISOString();

        let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
        xmlContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

        staticPages.forEach((page) => {
            xmlContent += `  <url>\n`;
            xmlContent += `    <loc>${baseUrl}${page}</loc>\n`;
            xmlContent += `    <lastmod>${currentDate}</lastmod>\n`;
            xmlContent += `    <changefreq>monthly</changefreq>\n`;
            xmlContent += `    <priority>0.8</priority>\n`;
            xmlContent += `  </url>\n`;
        });

        xmlContent += `</urlset>\n`;

        const filePath = path.join(process.cwd(), "public/sitemap.xml");
        fs.writeFileSync(filePath, xmlContent, "utf-8");

        res.setHeader("Content-Type", "application/xml");
        res.status(200).end();
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }

    return {
        props: {},
    };
}

export default function SitemapXml() {
    // This component is intentionally left empty
    return null;
}
