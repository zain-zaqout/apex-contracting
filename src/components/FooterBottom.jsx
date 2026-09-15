const text = {
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
};

const FooterBottom = () => {
    const year = new Date().getFullYear();
    return (
        <div className="bg-[#0a1426] border-t border-white/10">
            <div className="container-x py-4 lg:py-6 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-start">
                <p className="text-xs text-white/45">© {year} Apex Construction & Contracting. {text.rights}</p>
                <div className="flex items-center gap-6"><a href="#" className="text-xs text-white/45 transition-colors hover:text-[#ddbb63]">{text.privacy}</a><a href="#" className="text-xs text-white/45 transition-colors hover:text-[#ddbb63]">{text.terms}</a></div>
            </div>
        </div>
    );
};

export default FooterBottom