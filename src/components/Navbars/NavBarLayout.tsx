import MenuDesktop from "./MenuDesktop"
import MenuMobile from "./MenuMobile" 

export default function NavBarLayout() {
    return (
        <header className="pt-16">
            <MenuMobile />
            <MenuDesktop />
        </header>
    )
}