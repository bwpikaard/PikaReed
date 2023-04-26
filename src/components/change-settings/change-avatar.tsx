import Image from "next/image";
import type {ReactElement} from "react";
import React, {useState} from "react";

export default function ChangeAvatar(): ReactElement {

    const [selectedImage, setSelectedImage] = useState(null);
    let imageSource = "";

    if (selectedImage !== null && selectedImage !== undefined) {
        imageSource = URL.createObjectURL(selectedImage);
    } else {
        imageSource = "/no-pfp.ico";
    }

    const handleChange = (temp): void => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setSelectedImage(temp.target.files[0]);
    };

    const sendImage = (): void => {
        if (selectedImage !== null && selectedImage !== undefined) {
            alert("Send it off to database");
        } else {
            alert("Enter an image before trying to send");
        }
    };

    return (
        <>
            <div className="pt-10">
                <Image className="rounded-full w-40 h-40" src={imageSource} alt="image description" height="300" width="300"/>

                <div className="pt-5">
                    <label className="block mb-2 text-sm font-medium text-white" htmlFor="file_input">Upload file</label>
                    <input onChange={handleChange} className="block w-full text-sm text-white border border-white rounded-lg cursor-pointer bg-mute-grey" aria-describedby="file_input_help" id="file_input" type="file" />
                    <p className="mt-1 text-sm text-gray-500" id="file_input_help">SVG, PNG, or JPG (MAX. 200x200px).</p>
                </div>

                <div className="pt-5">
                    <button onClick={sendImage} type="submit" className="text-white bg-mute-black hover:text-basically-white focus:ring-4 focus:outline-none focus:ring-basically-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </div>
            </div>
        </>
    );
}
