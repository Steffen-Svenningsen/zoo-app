export default function AddWristbandForm({
wristband,
onAddFormSubmit,
onAddInputChange
}) {
return (
    <form onSubmit={onAddFormSubmit}>
        <h2>Tilføj armbånd</h2>
        <div className="form-content">
            <label htmlFor="wristband">Din kode: </label>
            <div className="input-f-container">
                <input
                    id="wristband"
                    name="wristband"
                    type="text"
                    placeholder="Indtast armbåndskoden"
                    value={wristband}
                    onChange={onAddInputChange}
                    maxLength={8}
                    minLength={8}
                />
                <button className="green-btn" type="submit">Tilføj</button>
            </div>
        </div>
    </form>
);
}