window.Layout = function Layout({ children, headerProps, footerText }) {
    return (
        <>
            <Header
                title={headerProps.title}
                subtitle={headerProps.subtitle}
                authors={headerProps.authors}
            />
            <main className="mainContainer">{children}</main>
            <Footer text={footerText} />
        </>
    );
};
