const Footer = () => {
    return (
        <div className="relative bottom-0 left-0 right-0">
            <div className="absolute bottom-0 left-0 right-0 z-28">
                <img
                    src="/images/background/all1.png"
                    alt="cloud1"
                    draggable={false}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative z-50 flex justify-center items-end h-full pb-4">
                <span className="text-white text-md bg-black/60 px-4 py-1 rounded-md">
                    ⓒ 2025 김학준 Portfolio | All Rights Reserved.
                </span>
            </div>
        </div>
    )
}

export default Footer;