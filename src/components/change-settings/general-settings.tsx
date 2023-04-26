import type {ReactElement} from "react";

export default function GeneralSettings(): ReactElement {
    return (
        <>
            <fieldset className="pt-10">
                <div className="flex items-center mb-4">
                    <input id="checkbox-2" type="checkbox" value="" className="w-4 h-4 text-mute-black bg-mute-black border-white rounded focus:ring-basically-white" />
                    <label htmlFor="checkbox-2" className="ml-2 text-sm font-medium text-white">I agree to the terms and conditions</label>
                </div>

                <div className="flex items-center mb-4">
                    <input id="checkbox-3" type="checkbox" value="" className="w-4 h-4 text-mute-black bg-mute-black border-white rounded focus:ring-basically-white" />
                    <label htmlFor="checkbox-3" className="ml-2 text-sm font-medium text-white">I am 18 years or older</label>
                </div>
            </fieldset>
     
            <label className="relative inline-flex items-center mb-4 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-mute-black rounded-full peer peer-focus:ring-4 peer-focus:ring-basically-white peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-mute-grey after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white"></div>
                <span className="ml-3 text-sm font-medium text-white">Bright mode</span>
            </label>
        </>
    );
}
