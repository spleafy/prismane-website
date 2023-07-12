"use client";
import "../styles/globals.css";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "@fontsource/inter/variable.css";
import "@prismane/core/style";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import Countdown from "react-countdown";
import Image from "next/image";
import { Form, TextField, Button, Alert } from "@prismane/core";
import { useForm } from "@prismane/core/hooks";
import { required, email } from "@prismane/core/validators";
// Analytics
import GoogleAnalytics from "./GoogleAnalytics";
// Components
import Layout from "@/containers/Layout";
// Theme
import { PrismaneProvider, PRISMANE_COLORS } from "@prismane/core";

export default function App({ Component, pageProps }: AppProps) {
  const theme = {
    mode: "dark",
    colors: {
      primary: PRISMANE_COLORS.pink,
      base: PRISMANE_COLORS.gray,
    },
  };

  /* <PrismaneProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PrismaneProvider> */

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { register, handleSubmit } = useForm({
    fields: {
      email: {
        value: "",
        validators: {
          required: (v: string) => required(v),
          email: (v: string) => email(v),
        },
      },
    },
  });

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState(false);

  return (
    <>
      <GoogleAnalytics />
      <PrismaneProvider theme={theme}>
        <div className="flex flex-col gap-5 sm:justify-center items-center sm:h-screen py-20">
          <div className="flex items-center justify-center w-40 h-40 sm:w-56 sm:h-56 gradient rounded-3xl mb-6 sm:mb-14 shadow-2xl dark:shadow-primary-500/20 shadow-primary-500/30">
            <div className="relative w-36 sm:w-48 h-36 sm:h-48">
              <Image src="/logo_white.svg" alt="Logo White" fill />
            </div>
          </div>
          <Countdown
            date={new Date("July 15, 2023 09:00:00 UTC")}
            renderer={({ days, hours, minutes, seconds, completed }) => (
              <div className="flex items-center gap-4 sm:gap-16 flex-col sm:flex-row">
                <div className="flex flex-col gap-2 justify-center items-center">
                  <span className="text-6xl font-bold text-white">
                    {mounted ? days : "0"}
                  </span>
                  <span className="text-3xl text-base-700">Days</span>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <span className="text-6xl font-bold text-white">
                    {mounted ? hours : "0"}
                  </span>
                  <span className="text-3xl text-base-700">Hours</span>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <span className="text-6xl font-bold text-white">
                    {mounted ? minutes : "0"}
                  </span>
                  <span className="text-3xl text-base-700">Minutes</span>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <span className="text-6xl font-bold text-white">
                    {mounted ? seconds : "0"}
                  </span>
                  <span className="text-3xl text-base-700">Seconds</span>
                </div>
              </div>
            )}
          />
          <hr className="w-1/3 mt-8" />
          <span className="section-heading text-3xl mt-8">
            Notify me on <span className="text-gradient">release</span>
          </span>
          <Form
            className="flex items-end gap-5 mt-2"
            onSubmit={(e: any) => {
              handleSubmit(e, async (v: any) => {
                try {
                  const response = await fetch("/api/signup", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      email: v.email,
                      status: "subscribed",
                    }),
                  });

                  if (response.ok) {
                    setSuccess(true);

                    setTimeout(() => {
                      setSuccess(false);
                    }, 1500);
                  } else {
                    setError(true);
                  }
                } catch (error) {
                  setError(true);
                }
              });
            }}
          >
            <TextField
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            <Button type="submit" className="!h-10 w-full">
              Subscribe
            </Button>
          </Form>
          {success && (
            <Alert variant="success">Thank you for your subscription!</Alert>
          )}
          {error && (
            <Alert variant="error" closable>
              There was an error subscribing you!
            </Alert>
          )}
        </div>
      </PrismaneProvider>
    </>
  );
}
