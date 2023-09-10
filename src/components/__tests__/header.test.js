const { render } = require("@testing-library/react")
import Header from "../Header";
import { Provider } from "react-redux";
import  Store  from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"



test("logo should be load on loading Header",()=>{
    const header = render(
    <StaticRouter>
        <Provider store={Store}>
            <Header/>
        </Provider>
    </StaticRouter>);

    console.log(header);
})

test("cart item should be 0 on loading Header",()=>{
    const header = render(
    <StaticRouter>
        <Provider store={Store}>
            <Header/>
        </Provider>
    </StaticRouter>);

    const cart=header.getByTestId("cart");
    expect (cart.innerHTML).toBe("0")

    console.log(header);
})