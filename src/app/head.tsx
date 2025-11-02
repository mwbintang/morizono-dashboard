export default function Head() {
    const baseUrl = "https://morizono-gardens.vercel.app"
    const ogImage = `${baseUrl}/logo-morizono.png`;

    return (
        <>
            <title>Morizono - Gardens</title>
            <meta name="description" content="Morizono - Gardens" />

            {/* Favicon */}
            <link rel="icon" href="/logo.svg" />

            {/* Open Graph Meta */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Morizono - Gardens" />
            <meta property="og:title" content="Morizono - Gardens" />
            <meta
                property="og:description"
                content="Morizono - Gardens"
            />
            <meta property="og:url" content={baseUrl} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            {/* Twitter Meta */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Morizono - Gardens" />
            <meta
                name="twitter:description"
                content="Morizono - Gardens"
            />
            <meta name="twitter:image" content={ogImage} />

            <link rel="icon" href="/logo-morizono.png" />
            <link rel="apple-touch-icon" href="/logo-morizono.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#000000" />
        </>
    );
}
