import { NavLink } from "react-router-dom"
import { whiteLogo } from "../../assets/logo"
import { ROUTE } from "../../consts"

const CRMHeader = () => {
    return (
        <div className="w-full bg-black">
            <div className="max-w-7xl m-auto py-5 flex justify-between">
                <NavLink to={ROUTE.HOME} className="mr-10">
                    <img
                        src={whiteLogo}
                        className="w-36 h-7 justify-between"
                    />
                </NavLink>
            </div>
        </div>
    )
}

export default CRMHeader