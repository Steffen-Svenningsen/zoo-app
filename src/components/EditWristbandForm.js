export default function EditForm({
currentWristband,
setIsEditing,
onEditInputChange,
onEditFormSubmit
}) {
return (
    <form onSubmit={onEditFormSubmit}>
        <h2>Ændre Armbåndskode</h2>
        <div className="form-content">
            <label htmlFor="updateWristband">Din kode: </label>
            <input
                id="updateWristband"
                name="updateWristband"
                type="text"
                placeholder="Ændrer armbåndskoden"
                value={currentWristband.text}
                onChange={onEditInputChange}
                maxLength={8}
                minLength={8}
            />
        </div>
        <div className="form-btn-container">
            <button className="green-btn" type="submit" onClick={onEditFormSubmit}>Gem</button>
            <button className="red-btn" onClick={() => setIsEditing(false)}>Tilbage</button>
        </div>
    </form>
);
}