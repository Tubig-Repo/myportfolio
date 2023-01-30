import React from "react";
import useIntroduction from "../customHooks/useIntroduction";
import styled from "styled-components";
import { Oval } from "react-loader-spinner";
const Introduction = () => {
  const [data, isLoading] = useIntroduction();
  if (isLoading)
    return (
      <div className="flex justify-center">
        <Oval
          height={80}
          width={80}
          color="#2A71C3"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#fff"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  return (
    <div className="w-full h-auto flex flex-col gap-20-px p-16 items-center justify-center">
      <main className="w-6/12	my-0 mx-auto">
        <h3>About me</h3>
        <p className="p-4 text-justify tracking-wide indent-8 leading-6">
          {data.aboutMe}
        </p>
      </main>
    </div>
  );
};

export default Introduction;
