import Link from "next/link";
import type {ReactElement} from "react";

import About from "../pages/footer-modals/about";
import Contact from "../pages/footer-modals/contact";
import Liscensing from "../pages/footer-modals/liscensing";
import PrivacyPolicy from "../pages/footer-modals/privacy-policy";
import Modal from "./modal";

export default function Footer(): ReactElement {
    return (
        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 mt-2">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">PikaReed™</Link>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <div className="mr-4 md:mr-6">
                        <Modal displayName="About"><About /></Modal>
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
                        <Modal displayName="Contact"><Contact /></Modal>
                    </div>
                </li>
            </ul>
        </footer>

    );
}
