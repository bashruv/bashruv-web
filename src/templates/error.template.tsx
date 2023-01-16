import axios from "axios";
import { useEffect, useState } from "react";
import Head from "next/head";

import { getFormatDate } from "@src/utils/get-format-date.util";
import { useRouter } from "next/router";

export default function ErrorTemplate() {
  const [userAgent, setAgent] = useState<string>();
  const [platform, setPlatform] = useState<string>();
  const [ipInfo, setIpInfo] = useState({
    country: "unknown",
    state: "unknown",
    city: "unknown",
    ip: "XXX.XXX.XXX.XXX",
  });
  const { asPath } = useRouter();

  const date = new Date();

  async function checkIpInfo() {
    const { data } = await axios.get("https://geolocation-db.com/json/");
    setIpInfo({
      country: data.country_name,
      state: data.state,
      city: data.city,
      ip: data.IPv4,
    });
  }

  useEffect(() => {
    setAgent(navigator.userAgent);
    setPlatform(navigator.platform);
    checkIpInfo();
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="I WILL BE BACK SOON" />
        <meta name="theme-color" content="black" />
      </Head>
      <section className="text-white p-4">
        panic(browser 0 caller 0x{getFormatDate(date)}): Kernal trap at
        0x20230116, type {asPath}=page fault
        <br />
        Error code: 0x00000000
        <br />
        <br />
        Debugger called: &lt;panic&gt;
        <br />
        Backtrace (BROUSER 0), Frame : Return Address
        <br />
        0xffffff20210824 : 0xffffff20230201
        <br />
        Kernal Extensions in backtrace:
        <br />
        <blockquote className="indent-8">
          org.bashruv.bundler.NextSWC(darwin-arm64-npm-13.1.2)
        </blockquote>
        <br />
        <br />
        BSD process name corresponding to current thread: kernal_task
        <br />
        Boot args: vercel-deploy=1
        <br />
        <br />
        Browser version:
        <br />
        {userAgent}
        <br />
        <br />
        Device information:
        <br />
        {platform} {ipInfo.country} {ipInfo.state} {ipInfo.city} {ipInfo.ip}
        <br />
        <br />
        System uptime in nanoseconds: {date.getTime()}
        <br />
        <br />
        Please go to{" "}
        <a
          href="https://github.com/bashruv/bashruv-web"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://github.com/bashruv/bashruv-web
        </a>{" "}
        to report this panic
      </section>
      <div className="fixed top-0 w-full h-[150vh] -z-10 bg-black"></div>
    </>
  );
}
