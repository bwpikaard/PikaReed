import {
    Carousel, Table,
} from "flowbite-react";
import Image from "next/image";
import type {ReactElement} from "react";

export default function Home(): ReactElement {
    return (
        <>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel slideInterval={5000}>
                    <Image
                        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                        alt="New Novel"
                        height="125"
                        width="350"
                    />
                    <Image
                        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                        alt="New Novel"
                        height="125"
                        width="350"
                    />
                    <Image
                        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                        alt="New Novel"
                        height="125"
                        width="350"
                    />
                    <Image
                        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                        alt="New Novel"
                        height="125"
                        width="350"
                    />
                    <Image
                        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                        alt="New Novel"
                        height="125"
                        width="350"
                    />
                </Carousel>
            </div>

            <Table>
                <Table.Head>
                    <Table.HeadCell>
                        Title
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Chapter
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Author
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Pages
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Charlie and the Chocolate Factory
                        </Table.Cell>
                        <Table.Cell>
                            c23
                        </Table.Cell>
                        <Table.Cell>
                            Roald Dahl
                        </Table.Cell>
                        <Table.Cell>
                            192
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Wizard of Oz
                        </Table.Cell>
                        <Table.Cell>
                            c32
                        </Table.Cell>
                        <Table.Cell>
                            L. Frank Baum
                        </Table.Cell>
                        <Table.Cell>
                            272
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            The Alchemist
                        </Table.Cell>
                        <Table.Cell>
                            c12
                        </Table.Cell>
                        <Table.Cell>
                            Paulo Coelho
                        </Table.Cell>
                        <Table.Cell>
                            163
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </>
    );
}
