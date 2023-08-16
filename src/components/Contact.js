import React from "react";

const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
            <form>
                <input className="p-4 m-4 shadow appearance-none rounded border-8 border-solid border-orange-500 my-4 mr-4 py-2 px-3 text-orange-500 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name" />
                <input className="p-4 m-4 shadow appearance-none rounded border-8 border-solid border-orange-500 my-4 mr-4 py-2 px-3 text-orange-500 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Message" />
                <button className="p-4 m-4 bg-black rounded-2xl text-white" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;