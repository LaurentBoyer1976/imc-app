window.Home = function Home ({ pageTitle, formProps, resultProps }) {
    return(
        <div className="divi-imc-wrapper">
            <div className="imc-container">
                <div className="imc-header">
                    <h2>{pageTitle}</h2>
                </div>
            <div className="imc-body-card">
                <Form
                    tailleConfig={formProps.tailleConfig}
                    poidsConfig={formProps.poidsConfig}
                    buttonLabel={formProps.buttonLabel}
                />
            </div>
        </div>
            <div className="imc-result">
                <p id="result" className="imc-value">{resultProps.value}</p>
                <p id="explanation" className="imc-text">{resultProps.text}</p>
            </div>
        </div>
    );
};
