import Link from "next/link";
import type {ReactElement} from "react";

import Liscensing from "./footer-modals/liscensing";
import PrivacyPolicy from "./footer-modals/privacy-policy";
import Modal from "./modal";

export default function Footer(): ReactElement {
    return (
        <footer className="p-4 bg-mute-black shadow md:flex md:items-center md:justify-between md:p-6 mt-2">
            <span className="text-sm text-white sm:text-center">© 2023 <Link href="/" className="hover:text-basically-white">PikaReed™</Link>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
                <li>
                    <div className="mr-4 md:mr-6">
                        <Link href="/about" className="">About</Link>
                    </div>
                </li>
                <li>
                    <div className="mr-4 md:mr-6">
                        <Modal displayName="Privacy Policy"><PrivacyPolicy /></Modal>
                    </div>
                </li>
                <li>
                    <div className="mr-4 md:mr-6">
                        <Modal displayName="Liscensing"><Liscensing /></Modal>
                    </div>
                </li>
                <li>
                    <div className="mr-4 md:mr-6">
                        <Link href="/feedback" className="">Contact</Link>
                    </div>
                </li>
            </ul>
        </footer>

    );
}
