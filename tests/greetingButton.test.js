import GreetingButton from "../src/components/greetingButton.jsx";
import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react" ;

test("show Greeting Button in the screen", ()=>{
    render(<GreetingButton/>);
    const button= screen.getByText("Say Hello");
    expect(button).toBeInTheDocument();
});
