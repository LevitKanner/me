import {useState} from 'react';

function TextField({title, type, value, onChange}) {
    return <div>
        <label htmlFor={title.replaceAll(" ", '').toLowerCase()} className="block py-2 text-gold-500"> {title} </label>
        <input type={type ?? 'text'} name={title.replaceAll(" ", '').toLowerCase()}
               id={title.replaceAll(" ", '').toLowerCase()}
               autoComplete="on" value={value}
               onChange={onChange} placeholder={title.toLowerCase()} className="w-full p-3 rounded-md"/>
    </div>;
}

export const Contact = () => {
    const [fullName, setFullName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({fullName, message, email})
    }

    return <div className="h-screen px-4 mt-12 max-w-lg mx-auto">
        <h2 className="text-center text-3xl text-gold-500 font-bold py-10"> Send me a message </h2>
        <form className="space-y-6 text-black" onSubmit={handleSubmit}>
            <TextField title="Full Name" value={fullName} onChange={e => setFullName(e.target.value)}/>
            <TextField type="email" title="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <div>
                <label htmlFor="message" className="block py-2 text-gold-500"> Message </label>
                <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows={10}
                          className="w-full p-3 rounded-md">
                </textarea>
            </div>
            <button type="submit" className="bg-gold-500 text-black text-xl font-semibold w-full py-4 rounded-md"> Send
                Message
            </button>
        </form>
    </div>
}