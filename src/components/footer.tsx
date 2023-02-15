import {
    Footer,
} from "flowbite-react";
import type {ReactElement} from "react";

export default function FooterBar(): ReactElement {
    return (
        <>
            <Footer container={true}>
                <Footer.Copyright
                    href="#"
                    by="PikaReed™"
                    year={2023} />
                <Footer.LinkGroup>
                    <Footer.Link href="#">
                    About
                    </Footer.Link>
                    <Footer.Link href="#">
                    Privacy Policy
                    </Footer.Link>
                    <Footer.Link href="#">
                    Licensing
                    </Footer.Link>
                    <Footer.Link href="#">
                    Contact
                    </Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </>
    );
}
