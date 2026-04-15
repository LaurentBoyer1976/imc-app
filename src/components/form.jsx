window.Form = function Form({ tailleConfig, poidsConfig, buttonLabel }) {
    return (
        <form className="imc-form" onSubmit={(e) => e.preventDefault()}>
            <div className="imc-input-flex">
                <InputTaille config={tailleConfig} />
                <InputPoids config={poidsConfig} />
            </div>
            <Button type="submit" label={buttonLabel} />
        </form>
    );
};
