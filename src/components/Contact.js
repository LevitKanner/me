import {useState} from 'react';

function TextField({title, type, value, onChange}) {
    return <div>
        <label htmlFor={title.replaceAll(" ", '').toLowerCase()} className="block py-2 text-gold-500"> {title} </label>
        <input type={type ?? 'text'} name={title.replaceAll(" ", '').toLowerCase()}
               id={title.replaceAll(" ", '').toLowerCase()}
               autoComplete="on" value={value}
               onChange={onChange} placeholder={title}
               className="w-full p-3 placeholder-black rounded-md border border-gold-500"/>
    </div>;
}

export const Contact = ({hideForm}) => {
    const [fullName, setFullName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({fullName, message, email})
    }

    return <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white px-6 md:px-8 pb-8 rounded-lg max-w-md sm:max-w-xl mx-auto relative shadow-lg border border-gold-500 ">
            <h2 className="text-center text-3xl text-gold-500 font-bold py-8"> Send me a message </h2>
            <form className="space-y-4 text-black" onSubmit={handleSubmit}>
                <TextField title="Full Name" value={fullName} onChange={e => setFullName(e.target.value)}/>
                <TextField type="email" title="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <div>
                    <label htmlFor="message" className="block py-2 text-gold-500"> Message </label>
                    <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows={5}
                              className="w-full p-3 rounded-md border border-gold-500">
                </textarea>
                </div>
                <button type="submit"
                        className="bg-gold-500 text-black text-md font-semibold w-full py-2 rounded-md"> Send
                    Message
                </button>
            </form>
            <button onClick={hideForm}
                    className="absolute -top-4 -right-4 w-10 h-10 bg-black rounded-full text-gold-500 flex items-center justify-center border border-gold-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
        </div>
    </div>
}