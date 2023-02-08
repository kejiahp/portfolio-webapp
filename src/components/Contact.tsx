import React from "react";
import { useForm } from "react-hook-form";
import { Exclamation, FlatOval } from "../assets/NavBar/svgs";
import { ContactFormInput } from "../utils/types-util";
import NavBar from "./NavBar";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Aos from "aos";

const Contact = () => {
  const schema = yup.object({
    name: yup.string().required("name is required"),
    email: yup.string().email().required("email is required"),
    message: yup.string().required("message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data: ContactFormInput) => console.log(data);

  return (
    <div
      className="bg-custBlack-200 px-12 lg:px-24 relative 2xl:container 2xl:mx-auto"
      id="contact"
    >
      <FlatOval style="absolute -left-24 md:-left-1 md:bottom-40 bottom-[22rem] hidden md:block" />
      <FlatOval style="absolute -left-24 md:-left-1 md:bottom-44 bottom-[21rem] hidden md:block" />
      <FlatOval style="absolute -left-24 md:-left-1 md:bottom-48 bottom-[20rem] hidden md:block" />
      <FlatOval style="absolute -left-24 md:-left-1 md:bottom-52 bottom-[19rem] hidden md:block" />
      <section
        className="flex md:justify-between border-b border-custBlack-400 pb-20 mb-10 pt-20 md:flex-row flex-col"
        data-aos="fade-up-right"
      >
        <div className="">
          <p className="md:text-7xl text-custBlack-400 font-bold md:text-left text-center text-5xl">
            Contact
          </p>
          <p className="text-custBlack-300 w-full md:w-2/4 mt-10 md:text-left text-center">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="w-full mt-10 md:mt-0 md:w-2/5">
          <form
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <input
              className={`${
                errors.name ? "isError" : "isTrue"
              } outline-none bg-transparent border-b p-3 placeholder:text-custBlack-300 border-custBlack-400 text-custBlack-300`}
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <small className=" text-custRed">{errors.name.message}</small>
            )}
            <div className="relative my-4">
              <input
                className={`${
                  errors.email ? "isError" : "isTrue"
                } outline-none w-full bg-transparent border-b p-3 border-custBlack-400 text-custBlack-300 placeholder:text-custBlack-300`}
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <Exclamation
                style={`${
                  errors.email ? "block" : "hidden"
                } w-6 h-6 text-custRed absolute right-0 top-4`}
              />
              <small
                className={`${
                  errors.email ? "block" : "hidden"
                } absolute right-0 -bottom-6 text-custRed`}
              >
                Sorry, invalid format here
              </small>
            </div>
            <textarea
              className={`${
                errors.message ? "isError" : "isTrue"
              } outline-none bg-transparent border-b pt-8 px-3 border-custBlack-400 text-custBlack-300 h-32 placeholder:text-custBlack-300`}
              placeholder="Message"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <small className="text-custRed">{errors.message.message}</small>
            )}
            <input
              type="submit"
              className="text-custBlack-400 uppercase w-fit font-bold leading-6 after:mt-2 after:h-px after:bg-custGreen after:block after:bottom-0 after:left-0 after:w-full cursor-pointer self-end mt-8 hover:text-custGreen hover:scale-110 transition ease-in delay-100"
              value={"SEND MESSAGE"}
            />
          </form>
        </div>
      </section>
      <NavBar />
    </div>
  );
};

export default Contact;
