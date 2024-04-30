import React, { useRef, useState } from "react";
import {
  AiOutlineSend,
  AiOutlineCopy,
  AiOutlineDownload,
} from "react-icons/ai";
import { contact, contactIcons } from "../data/data";
import { useCopyToClipboard } from "usehooks-ts";
import { toast } from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import emailjs from "@emailjs/browser";

export const Contactpage = () => {
  const [copiedText, copy] = useCopyToClipboard();
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const onSuccessToast = (text) => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } pointer-events-auto flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
      >
        <div className="w-0 flex-1 p-4">
          <div className="flex items-start">
            <p className="mt-1 flex items-center gap-2 text-2xl text-gray-500">
              <AiOutlineCopy className="size-8" />
              {text}
            </p>
          </div>
        </div>
        <div className="flex place-content-center items-center px-6">
          <button onClick={() => toast.dismiss(t.id)} className="">
            <IoMdClose className="size-10" />
          </button>
        </div>
      </div>
    ));
  };
  const onFailToast = (text) => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } pointer-events-auto flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
      >
        <div className="w-0 flex-1 p-4">
          <div className="flex items-start">
            <p className="mt-1 flex items-center gap-2 text-2xl text-red-500">
              <AiOutlineCopy className="size-8" />
              {text}
            </p>
          </div>
        </div>
        <div className="flex place-content-center items-center px-6">
          <button onClick={() => toast.dismiss(t.id)} className="">
            <IoMdClose className="size-10" />
          </button>
        </div>
      </div>
    ));
  };
  const handleCopy = (text) => () => {
    copy(text)
      .then(() => {
        onSuccessToast("Copiado al portapapeles.");
      })
      .catch((error) => {
        console.log(error);
        onFailToast("No se pudo copiar.");
      });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    toast.promise(
      emailjs.sendForm("service_rcp17se", "template_ngfxf8i", form.current, {
        publicKey: "aeDIqP7g9GLWcPN00",
      }),
      {
        loading: "Enviando...",
        success: <b>Correo enviado.</b>,
        error: <b>Error, no se pudo enviar el correo.</b>,
      },
    );
    form.current.reset();
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center text-white" id="contacto">
      <header className="flex place-content-center items-center pb-5 pt-10 lg:px-60">
        <h2 className="text-4xl font-bold lg:text-6xl">Contactame</h2>
      </header>
      <div className="w-full place-content-around md:flex">
        <div className="flex flex-col gap-2 px-4 pb-10 md:w-8/12 md:pb-0 lg:w-5/12">
          <h3 className="text-2xl font-thin md:text-4xl">
            Información de contacto
          </h3>
          <ul className="flex flex-col gap-2">
            {contact.map(({ titulo, icon, href }) => (
              <li className="flex place-content-between items-center gap-3 sm:gap-6">
                <div className="flex items-center gap-3">
                  {icon}
                  <span className="text-base font-extralight sm:text-xl">
                    {titulo}
                  </span>
                </div>
                <div className="flex gap-3">
                  <a
                    href={href}
                    target="_blank"
                    className="rounded-lg bg-white p-1 text-black"
                  >
                    <AiOutlineSend className="size-7 sm:size-9" />
                  </a>
                  {titulo == "Curriculum Vitae" ? (
                    <a
                      href={href}
                      download
                      target="_blank"
                      className="rounded-lg bg-white p-1 text-black"
                    >
                      <AiOutlineDownload className="size-7 sm:size-9" />
                    </a>
                  ) : (
                    <button
                      onClick={handleCopy(titulo)}
                      className={`rounded-lg bg-white p-1 text-black`}
                    >
                      <AiOutlineCopy className={`size-7 sm:size-9`} />
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <form
          onSubmit={sendEmail}
          ref={form}
          className="flex flex-col gap-4 px-4 md:w-8/12 lg:w-5/12"
        >
          <label className="flex flex-col">
            <span className="pb-1 text-xl font-thin">Nombre</span>
            <input
              className="px-5 py-4 text-lg font-semibold text-black focus:bg-red-900 focus:text-white focus:placeholder-white/70 focus:outline-none"
              type="text"
              name="name"
              placeholder="Josiely Araujo"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="pb-1 text-xl font-thin">Correo</span>
            <input
              className="px-5 py-4 text-lg font-semibold text-black focus:bg-red-900 focus:text-white focus:placeholder-white/70 focus:outline-none"
              type="email"
              name="email"
              placeholder="josiely.araujo21@gmail.com"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="pb-1 text-xl font-thin">Mensaje</span>
            <textarea
              className="px-5 py-4 text-lg font-semibold text-black focus:bg-red-900 focus:text-white focus:placeholder-white/70 focus:outline-none"
              rows="4"
              name="message"
              placeholder="Hola! Quiero que trabajemos juntos."
            ></textarea>
          </label>
          <div className="flex place-content-end items-center">
            <button
              disabled={loading}
              className="disabled: flex items-center gap-3 rounded-full bg-white px-5 py-1 text-black disabled:bg-gray-500 disabled:text-white/50 md:gap-4 md:px-8 md:py-2"
            >
              <span className="text-xl font-bold md:text-3xl">Enviar</span>
              <AiOutlineSend className="size-5 md:size-8" />
            </button>
          </div>
        </form>
      </div>
      <div className="mt-5 flex w-full place-content-around items-center bg-red-800/50 py-5">
        {contactIcons.map(({ icon, href }) => (
          <a href={href} target="_blank" download>
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};
