import {useState, useRef} from 'react';
import emailjs from 'emailjs-com';

function TextField({title, type, value, onChange}) {
    return <div>
        <label htmlFor={title.replaceAll(" ", '').toLowerCase()} className="block py-2 text-gold-500"> {title} </label>
        <input type={type ?? 'text'} name={title.replaceAll(" ", '').toLowerCase()}
               id={title.replaceAll(" ", '').toLowerCase()}
               autoComplete="on" value={value}
               required
               onChange={onChange} placeholder={title}
               className="w-full p-3 placeholder-black rounded-md border border-gold-500"/>
    </div>;
}

export const Contact = ({hideForm}) => {
    const [fullName, setFullName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [sent, setSent] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if (!fullName && !message && !email) return
        emailjs.sendForm(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_TEMPLATEID, form.current, process.env.REACT_APP_USERID)
            .then((result) => {
                setSent(true);
                setTimeout(hideForm, 2000)
            }, (error) => {
                console.log(error.text);
            });
    };

    return <div className="absolute inset-0 flex items-center justify-center">
        <div
            className="bg-white px-6 md:px-8 pb-8 rounded-lg max-w-md sm:max-w-xl mx-auto relative shadow-lg border border-gold-500 ">
            <h2 className="text-center text-3xl text-gold-500 font-bold py-8"> Send me a message </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4 text-black">
                <TextField title="Full Name" value={fullName} onChange={e => setFullName(e.target.value)}/>
                <TextField type="email" title="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <div>
                    <label htmlFor="message" className="block py-2 text-gold-500"> Message </label>
                    <textarea id="message" name="message" value={message} onChange={e => setMessage(e.target.value)}
                              rows={5}
                              required
                              className="w-full p-3 rounded-md border border-gold-500">
                </textarea>
                </div>
                <button type="submit"
                        className="bg-gold-500 text-black text-md font-semibold w-full py-2 rounded-md">
                    {!sent && <span> Send Message</span>}
                    {sent && <span>Message sent</span>}
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