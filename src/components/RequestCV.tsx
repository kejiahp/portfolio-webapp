import React from "react";
import { useForm } from "react-hook-form";
import { RequestCv } from "../utils/types-util";
import AkiHaya from "../assets/Akihayakawa.png";
import Image from "next/image";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { submitRequestForm } from "../utils/axios-utils";
import BackDrop from "./BackDrop";

const RequestCV = () => {
  const schema = yup.object({
    email: yup.string().email().required("email is required"),
    reason: yup.string().optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestCv>({
    resolver: yupResolver(schema),
  });

  const { isLoading, mutate } = useMutation(
    (data: RequestCv) => submitRequestForm(data),
    {
      onSuccess: () => {
        toast.success("You have successfully, made a CV request 😊😊", {
          progressClassName: "toastProgress",
          icon: false,
          bodyClassName: "toastBody",
        });
        toast.success(
          "A link to the CV as been sent to your mail, check it out😊",
          {
            progressClassName: "toastProgress",
            icon: false,
            bodyClassName: "toastBody",
          }
        );
      },
      onError: () => {
        toast.error("Error encountered, you can't see elijah's CV🥲😭", {
          icon: false,
          bodyClassName: "toastBody",
        });
      },
    }
  );

  const onSubmitHandler = (data: RequestCv) => {
    mutate(data);
  };

  return (
    <>
      <BackDrop loading={isLoading} />
      <div className="flex px-12 lg:px-24 mt-4 md:mt-20 2xl:container 2xl:mx-auto flex-col md:flex-row gap-20 md:gap-5">
        <section className="flex-1" data-aos="fade-down">
          <p className="text-5xl font-bold mb-4 text-custBlack-300 text-center md:text-left">
            Kejiah's Resume
          </p>
          <p className="text-custBlack-300 my-6 text-xl text-center md:text-left">
            I'll send an email to your inbox, so check your spam folder if you
            can't find it.
          </p>
          <div className="h-32 bg-gradient-to-r relative from-gray-300">
            <p className="absolute text-custBlack-400 font-bold right-0 m-4">
              Just Put this there... why?🤷‍♂️
            </p>
            <p className="absolute font-bold right-0 md:top-6 m-4 top-14 text-custGreen">
              Aki best boy in csm...😤
            </p>
            <Image
              src={AkiHaya}
              alt="Aki Hayakawa"
              className="w-full h-full object-contain"
            />
          </div>
        </section>
        <section className="flex-1" data-aos="fade-up">
          <p className="text-custBlack-400 text-center text-2xl">Request CV</p>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="flex flex-col items-center"
          >
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              className="p-6 my-6 rounded bg-transparent outline-none border border-custGreen placeholder:text-custBlack-300 text-custBlack-300"
            />
            {errors.email && (
              <small className="text-custRed">{errors.email.message}</small>
            )}
            <textarea
              className="p-6 my-6 placeholder:text-custBlack-300 rounded bg-transparent outline-none border border-custGreen text-custBlack-300"
              {...register("reason", { required: true })}
              placeholder="Reason(Optional)"
            />
            <input
              type={"submit"}
              value="REQUEST"
              className="py-2 px-4 text-custBlack-400 bg-custGreen rounded cursor-pointer hover:bg-custBlack-300 hover:text-custBlack-200 transition ease-in delay-100"
            />
          </form>
        </section>
      </div>
    </>
  );
};

export default RequestCV;
