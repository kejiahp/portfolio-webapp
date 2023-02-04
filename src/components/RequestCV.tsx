import { data } from "autoprefixer";
import React from "react";
import { useForm } from "react-hook-form";
import { RequestCv } from "../utils/types-util";

const RequestCV = () => {
  const { register, handleSubmit } = useForm<RequestCv>();

  const onSubmitHandler = (data: RequestCv) => console.log(data);

  return (
    <div className="flex px-12 lg:px-24 mt-20 2xl:container 2xl:mx-auto flex-col md:flex-row">
      <section className="flex-1">
        0<p className=""></p>
      </section>
      <section className="flex-1">
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
  );
};

export default RequestCV;
