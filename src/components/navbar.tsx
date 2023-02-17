import {
    Avatar, Dropdown, Navbar as FlowbiteNavbar,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import type {ReactElement} from "react";

export default function Navbar(): ReactElement {
    return (
        <FlowbiteNavbar
            fluid={true}
            rounded={true}
            className="pb-10"
        >
            <FlowbiteNavbar.Brand href="/">
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
            </FlowbiteNavbar.Brand>
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
                <FlowbiteNavbar.Toggle />
            </div>
            <FlowbiteNavbar.Collapse>
                <Link href="/" passHref legacyBehavior>
                    <FlowbiteNavbar.Link>
                        Home
                    </FlowbiteNavbar.Link>
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
                    <FlowbiteNavbar.Link>
                        Write
                    </FlowbiteNavbar.Link>
                </Link>
                <Link href="/resources" passHref legacyBehavior>
                    <FlowbiteNavbar.Link>
                        Resources
                    </FlowbiteNavbar.Link>
                </Link>
                <Link href="/" passHref legacyBehavior>
                    <FlowbiteNavbar.Link>
                        Feedback
                    </FlowbiteNavbar.Link>
                </Link>
            </FlowbiteNavbar.Collapse>
        </FlowbiteNavbar>
    );
}
