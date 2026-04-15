window.Button = function Button({ label, type = "button" }) {
    return (
        <button type={type} className="btn-calculate">
            {label}
        </button>
    );
};
