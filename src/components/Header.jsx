window.Header = function Header({ title, subtitle, authors }) {
    return (
        <header className="header">
            <div className="header-title">
                <h1 className="title">{title}</h1>
                <p className="quote">{subtitle}</p>
            </div>
            <div className="authors">
                {authors.map((author) => (
                    <span key={author} className="author-name">{author}</span>
                ))}
            </div>
        </header>
    );
};
