const socialLinks = {
    github: "https://github.com/NVB07",
    facebook: "https://www.facebook.com/binh.jupiter",
    tiktok: "https://www.tiktok.com/@jupi_b",
};

const RedirectLink = ({ href, riderectLink, children, style }) => {
    const handleRedirect = (e) => {
        e.preventDefault();
        window.open(riderectLink, "_blank");
    };

    return (
        <a href={href} onClick={handleRedirect} className={style}>
            {children}
        </a>
    );
};

export { RedirectLink, socialLinks };
