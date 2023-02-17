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
                className="pb-10"
            >
                <Navbar.Brand href="/">
                    <Image
                        src="/pikareed-logo.ico"
                        className="mr-3 h-6 sm:h-9"
                        alt="PikaReed Logo"
                        height="36"
                        width="24"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        PikaReed
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="/no-pfp.ico" rounded={true}/>}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Username
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            <Link href="/profile">
                                Profile
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link href="/bookshelf">
                                Bookshelf
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link href="/settings">
                                Settings
                            </Link>
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
                            <Link href="/top-ranked">
                            Top Ranked
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link href="/library">
                            Library
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Random
                        </Dropdown.Item>
                    </Dropdown>
                    <Link href="/write" passHref legacyBehavior>
                        <Navbar.Link>
                        Write
                        </Navbar.Link>
                    </Link>
                    <Link href="/resources" passHref legacyBehavior>
                        <Navbar.Link>
                        Resources
                        </Navbar.Link>
                    </Link>
                    <Link href="/" passHref legacyBehavior>
                        <Navbar.Link>
                        Feedback
                        </Navbar.Link>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
