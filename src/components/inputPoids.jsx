window.InputPoids = function InputPoids({ config }) {
    return (
        <div className="imc-input-group">
            <label htmlFor={config.id}>{config.label}</label>
            <input
                id={config.id}
                type="number"
                placeholder={config.placeholder}
                min={config.min}
                max={config.max}
                step={config.step}
            />
        </div>
    );
};
