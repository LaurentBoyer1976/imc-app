window.App = function App() {
    const headerProps = {
        title: "Calculer votre IMC !",
        subtitle: "LP DWCA TP UE 6.3.1",
        authors: ["Catherine Braun", "Laurent Boyer"]
    };

    const formProps = {
        tailleConfig: {
            id: "taille",
            label: "Taille (cm)",
            placeholder: "Entrez votre taille",
            min: 50,
            max: 250,
            step: 0.1
        },
        poidsConfig: {
            id: "poids",
            label: "Poids (kg)",
            placeholder: "Entrez votre poids",
            min: 20,
            max: 300,
            step: 0.1
        },
        buttonLabel: "Calculer"
    };

    const resultProps = {
        value: "--",
        text: "Le calcul se fera en phase 2."
    };

    return (
        <Layout headerProps={headerProps} footerText="© 2026 IMC Calculator - LP DWCA">
            <Home
                pageTitle="Calculateur IMC - Phase 1"
                formProps={formProps}
                resultProps={resultProps}
            />
        </Layout>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
