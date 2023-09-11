import { getByTestId, render } from "@testing-library/react"
import Navbar from "../Navbar"
import {StaticRouter} from "react-router-dom/server"

test('does brand name loads or not', () => {
    const navbar = render(<StaticRouter><Navbar/></StaticRouter>)
    console.log(navbar);
    const brandName = navbar.getByTestId("brand");
    console.log(brandName);
    expect(brandName.innerHTML).toBe("Boo!movies");
})

test('does brand name loads search bar', () => {
    const navbar = render(<StaticRouter><Navbar/></StaticRouter>)
    console.log(navbar);
    const search = navbar.getByTestId("search");
    console.log(search);
    expect(search.childNodes[0].type).toBe("search");
})