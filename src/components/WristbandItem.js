export default function wristbandItem({
wristband,
onEditClick,
onDeleteClick
}) {
return (
    <li key={wristband.id}>
        <div className="li-content">
            <span>
                {wristband.text}
            </span>
            <div className="wristband-btn-container">
                <button className="grey-btn" onClick={() => onEditClick(wristband)}>Ændre</button>
                <button className="red-btn" onClick={() => onDeleteClick(wristband.id)}>Slet</button>
            </div>
        </div>
    </li>
);
}