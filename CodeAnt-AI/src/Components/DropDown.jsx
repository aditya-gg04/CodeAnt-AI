import React, { useState } from "react";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, isSelected] = useState("UtkarshDhairyaPan...")
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div>
            {/* Trigger Button */}
            <button
                onClick={toggleDropdown}
                className=" px-4 py-2 bg-white text-black  rounded-lg outline-2 border border-gray-950 justify-between md:w-48 w-80 "
            >
                <div className="flex items-center justify-between ">
                    {selected}
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7616 1.68173L7.79282 7.40048C7.60532 7.55673 7.41782 7.61923 7.26157 7.61923C7.07407 7.61923 6.88657 7.55673 6.73032 7.43173L0.730318 1.68173C0.417818 1.40048 0.417818 0.900484 0.699068 0.619234C0.980318 0.306734 1.48032 0.306734 1.76157 0.587984L7.26157 5.83798L12.7303 0.587984C13.0116 0.306734 13.5116 0.306734 13.7928 0.619234C14.0741 0.900484 14.0741 1.40048 13.7616 1.68173Z" fill="#181D27" />
                    </svg>
                </div>

            </button>
        </div>
    );
};

export default Dropdown;
