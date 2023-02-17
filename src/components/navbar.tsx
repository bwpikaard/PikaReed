import {
    Avatar, Dropdown, Navbar as FlowbiteNavbar,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import {
    signIn, signOut, useSession,
} from "next-auth/react";
import type {ReactElement} from "react";

export default function Navbar(): ReactElement {
    const {data: session} = useSession();

    const navbarCollapse = <FlowbiteNavbar.Collapse>
        <Link href="/" passHref legacyBehavior>
            <FlowbiteNavbar.Link>
            Home
            </FlowbiteNavbar.Link>
        </Link>
        <Dropdown
            label={<FlowbiteNavbar.Link>
                Explore
            </FlowbiteNavbar.Link>}
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
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        {!session?.user && <FlowbiteNavbar.Link onClick={async (): Promise<void> => signIn()} href="#">
                Sign In
        </FlowbiteNavbar.Link>}
    </FlowbiteNavbar.Collapse>;

    return (
        <FlowbiteNavbar
            fluid={true}
            className="mb-10"
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
            {session?.user
                ? <>
                        <div className="flex md:order-2">
                            {session?.user && <Dropdown
                                arrowIcon={false}
                                inline={true}
                                placement={"bottom-end"}
                                dismissOnClick
                                label={<>
                                    <p className="block mr-2 py-2 pr-4 pl-3 md:p-0 text-gray-700 ">Bryan Pikaard</p>
                                    <Avatar alt="User settings" img="/no-pfp.ico" rounded={true}/>
                                </>}
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
                                {/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-misused-promises */}
                                <Dropdown.Item onClick={async () => signOut()}>
                                    Sign out
                                </Dropdown.Item>
                            </Dropdown>}
                            <FlowbiteNavbar.Toggle />
                        </div>
                        {navbarCollapse}
                    </>
                : <>
                        <FlowbiteNavbar.Toggle />
                        {navbarCollapse}
                    </>}
        </FlowbiteNavbar>
    );
}
