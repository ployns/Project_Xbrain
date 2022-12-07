import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact ()  {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v0g3kuc', 'template_8phtjyg', form.current, 'EsF7YVUK80ho968gJ')
      .then((result) => {
          console.log(result.text);
          alert("Message sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <div className="font-body my-20 mx-24 text-black ">
            
            <div className=" font-bold text-6xl">
            ติดต่อสอบถาม
            </div>
                <div className='px-56 my-10 '>
                    <div className=''>
                        <label className=" block text-gray-700 text-m font-bold mb-5 mt-12 " // ชื่อ-นามสกุล
                            >       
                                ชื่อ-นามสกุล *
                        </label> 
                        <input className="shadow appearance-none border rounded w-full h-14 py-2 px-3  text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline"    
                            type="text"
                            name="user_name"
                            required
                            autoComplete="none"
                        />
                    </div> 
                    <div className="flex flex-row space-x-8 "> 

                        <div>
                            <label className="block text-gray-700 text-m font-bold mb-5 mt-8" // E-mail
                            >       
                                E-mail *
                            </label> 
                            <input className="shadow appearance-none border rounded w-96 h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline"    
                                type="email"
                                name="user_email"
                                required
                                autoComplete="none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-m font-bold mb-5 mt-8" // เบอร์ติดต่อ
                            >       
                                เบอร์ติดต่อ *
                            </label> 
                            <input className="shadow appearance-none border rounded w-96 h-14  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline"    
                                type="phone"
                                pattern="[0-9]*"
                                name="user_phone"
                                required
                                autoComplete="none"
                            />
                    </div>    



                    </div> 

                    <div>
                        <label className="block text-gray-700 text-m font-bold mb-5 mt-8" 
                        >       
                            รายละเอียดเพิ่มเติม *
                        </label> 
                        <textarea className= "shadow appearance-none border rounded w-full h-36 py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline "
                                    name="message"
                                    rows="3"
                                    autoComplete="none"
                                    required
                            >

                        </textarea>
                    </div>


                </div>

                <div className="text-center">
                    <button                                                         //ปุ่ม submit
                        className=" flex-center inline-block px-16 py-3 mb-4 bg-primary-80 text-white-100 text-xl font-bold leading-tight rounded-2xl shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none  hover:bg-primary-100 hover:ring-2 hover:ring-white active:shadow-lg transition duration-150 ease-in-out"
                        type="submit" 
                        value='Send'

                    >
                         Confirm
                    </button>             
                </div>

            </div>
    </form>
  );
}
export default Contact;      