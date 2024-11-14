import React, { useRef } from "react";
import "../Contact/Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_u8reybg", "template_m5olocr", form.current, {
        publicKey: "pQHkmPvihTreapucN",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="Contact" id="contact">
      <div className="my-6">
        <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_30px_-3px_rgba(7,91,240,0.5)_inset] rounded-md text-[#333] font-[sans-serif]">
          <div>
            <h1 className="text-3xl font-extrabold text-black">Let's Talk</h1>
            <p className="text-sm text-gray-400 mt-3">
              Have some big idea or brand to develop and need help? Then reach
              out we'd love to hear about your project and provide help.
            </p>
            <div className="mt-12">
              <h2 className="text-lg font-extrabold text-black">Email</h2>
              <ul className="mt-3">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#007bff"
                      viewBox="0 0 479.058 479.058"
                    >
                      <path
                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                  <a
                    target="blank"
                    href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                    className="text-[#007bff] text-sm ml-3"
                  >
                    <small className="block text-[#007bff] font-extrabold">
                      Mail
                    </small>
                    <strong className="text-[#007bff] hover:text-blue-700 font-extrabold">
                      shazilzaidi19@gmail.com
                    </strong>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <h2 className="text-lg font-extrabold text-black">Socials</h2>
              <ul className="flex mt-3 space-x-4">
                <li className="bg-[#007bff] hover:bg-blue-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="https://www.facebook.com/profile.php?id=61550011704187">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#fff"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                        data-original="#000000"
                      />
                    </svg>
                  </a>
                </li>
                <li className="bg-[#007bff] hover:bg-blue-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="https://www.linkedin.com/in/shazil-hussain-7b8307286/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#fff"
                      viewBox="0 0 511 512"
                    >
                      <path
                        d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                        data-original="#000000"
                      />
                    </svg>
                  </a>
                </li>
                <li className="bg-[#007bff] hover:bg-blue-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#fff"
                      viewBox="0 0 24 24"
                      >
                      <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z"></path>
                    </svg>
                  </a>
                </li>
                <li className="bg-[#007bff] hover:bg-blue-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="https://github.com/syedshazilhussain?tab=overview&from=2024-06-01&to=2024-06-06">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#fff"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.206 11.387.6.1.82-.262.82-.58 0-.286-.01-1.044-.015-2.05-3.338.722-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.09-.744.084-.728.084-.728 1.206.086 1.838 1.236 1.838 1.236 1.07 1.838 2.808 1.308 3.493.998.108-.78.42-1.31.763-1.61-2.67-.304-5.466-1.336-5.466-5.93 0-1.312.468-2.386 1.236-3.232-.124-.304-.54-1.526.12-3.184 0 0 1.01-.324 3.3 1.232.96-.268 1.98-.402 3-.406 1.02.004 2.04.138 3 .406 2.29-1.556 3.3-1.232 3.3-1.232.66 1.658.244 2.88.12 3.184.774.846 1.236 1.92 1.236 3.232 0 4.608-2.802 5.62-5.476 5.918.42.368.81 1.1.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.216.69.825.57C20.57 21.798 24 17.3 24 12c0-6.63-5.373-12-12-12z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <form
            action="https://fabform.io/f/xxxxx"
            method="post"
            className="ml-auo space-y-4"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff] text-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff] text-gray-500"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff] text-gray-500"
            />
            <textarea
              placeholder="Message"
              rows="6"
              name="message"
              className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff] text-gray-500"
            ></textarea>
            <button
              type="submit"
              className="text-white bg-[#007bff] hover:bg-blue-900 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
