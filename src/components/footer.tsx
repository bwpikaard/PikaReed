import {
    Footer as FlowbiteFooter,
} from "flowbite-react";
import type {ReactElement} from "react";

export default function Footer(): ReactElement {
    return (
        <FlowbiteFooter
            container={true}
            className="pt-10 mt-auto"
        >
            <FlowbiteFooter.Copyright
                href="/"
                by="PikaReed™"
                year={2023} />
            <FlowbiteFooter.LinkGroup>
                <FlowbiteFooter.Link href="#">
                    About
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">
                    Privacy Policy
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">
                    Licensing
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">
                    Contact
                </FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
        </FlowbiteFooter>
    );
}
