export default function Information({showInfoType}) {
    return (
        <div className="warning" style={{opacity:showInfoType ? 1 : 0}}  id="warning">
            <span>Digitando
                <span className="points">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </span>
            </span>
        </div>
    )
}