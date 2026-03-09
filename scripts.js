const PORTFOLIO_URL = "https://www.keivalya.com/";

function buildHeaderMarkup({ pageTitle, homeHref, isHome }) {
    const navAriaLabel = isHome ? "Primary navigation" : "Post navigation";
    const homeCurrent = isHome ? " aria-current=\"page\"" : "";

    return `
        <h1>${pageTitle}</h1>
        <nav aria-label="${navAriaLabel}" class="site-nav">
            <a href="${homeHref}"${homeCurrent}>Home</a>
            <a href="${PORTFOLIO_URL}" target="_blank" rel="noopener noreferrer">Portfolio</a>
        </nav>
    `;
}

function renderSharedHeaders() {
    const headers = document.querySelectorAll("[data-site-header]");

    headers.forEach((header) => {
        const pageTitle = header.dataset.pageTitle || "Keivalya's Blogs";
        const homeHref = header.dataset.homeHref || "index.html";
        const isHome = header.dataset.page === "home";

        header.classList.add("site-header");
        header.innerHTML = buildHeaderMarkup({ pageTitle, homeHref, isHome });
    });
}

document.addEventListener("DOMContentLoaded", renderSharedHeaders);
