import './style.css'
const upi = document.querySelector('.upi');

const Buttons = () => {
    return (
        <>
            <div className="text-white flex items-center md:w-[60%] w-[90%] md:px-0 px-5 justify-around ">
                <button className=" rounded-[10px] md:py-3 py-2 md:px-12 px-8  bg-blue-500  " >
                    Share
                </button>
                <div className="tooltip">
                <button className="copy rounded-[10px] md:py-3 py-2 md:px-12 px-8  bg-blue-500 "
                    onClick={() => navigator.clipboard.writeText(`Example123@upi`)}
                >
                    <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
                    Copy
                </button>
                </div>
            </div>

        </>
    )
}

export default Buttons;