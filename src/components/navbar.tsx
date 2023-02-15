import Image from "next/image";
import type {ReactElement} from "react";
import {
    Avatar, Dropdown, Navbar,
} from "flowbite-react";
import Link from "next/link";

export default function NavBar(): ReactElement {
    return (
        <>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <Image
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                        height="36"
                        width="36"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        PikaReed
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Username
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Profile
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Bookshelf
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link href="/" passHref legacyBehavior>
                        <Navbar.Link>
                        Home
                        </Navbar.Link>
                    </Link>
                    <Dropdown
                        label="Explore"
                        inline={true}
                    >
                        <Dropdown.Item>
                            Top Ranked
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Library
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Random
                        </Dropdown.Item>
                    </Dropdown>
                    <Link href="/test" passHref legacyBehavior>
                        <Navbar.Link>
                        Write
                        </Navbar.Link>
                    </Link>
                    <Link href="/test" passHref legacyBehavior>
                        <Navbar.Link>
                        Resources
                        </Navbar.Link>
                    </Link>
                    <Link href="/test" passHref legacyBehavior>
                        <Navbar.Link>
                        Feedback
                        </Navbar.Link>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
