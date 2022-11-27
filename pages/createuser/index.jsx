import Image from "next/image"
import Link from "next/link.js"
import React from "react"
import { userContext } from "../../context/userCtx.jsx"
import badges from "../../public/badges/badgesPath.js"
import user from "../../styles/createuser.module.css"

export default function createUser() {
    const { chosen, setChosen } = React.useContext(userContext);
    const divRef = React.useRef();

    return (
        <div className={user.container}>
            <h3 className={user.title}>Choose your icon</h3>
            <div ref={divRef} className={user.containerImages}>
                {badges.map((badge, index) => {
                    return (
                        <div key={index} onClick={(e) => selected(e, divRef.current.children, setChosen, chosen, badge)}>
                            <Image priority alt="icon-image" src={badge} width={50} height={50} />
                        </div>
                    )
                })}
            </div>
            <div className={user.containerColor}>
                <h3>Choose your color</h3>
                <div>
                    <input type={"color"} title="color" onChange={(e) => setChosen({ ...chosen, color: e.target.value })} />
                    {(chosen?.icon && chosen?.username && chosen?.color) && (
                        <div style={{ backgroundColor: chosen.color }}>
                            <div>Preview</div>
                            <Image priority alt="icon" src={chosen?.icon} width={18} height={18} />
                            <span>{chosen?.username}</span>
                        </div>
                    )}
                </div>
            </div>
            <div className={user.containerInput}>
                <h3>Enter your username</h3>
                <input type="text" onChange={(e) => setChosen({ ...chosen, username: e.target.value })} />
            </div>
            <div className={user.containerLink}>
                <Link href={"/"} className={(chosen?.icon?.length && chosen?.username?.length) ? user.visible : ''}>Enter</Link>
            </div>
        </div>

    )

}

function selected(e, children, setChosen, chosen, icon) {
    Array.from(children).forEach(child => child.removeAttribute('class'));
    e.currentTarget.setAttribute('class', user.selected);
    setChosen({ ...chosen, icon });
}