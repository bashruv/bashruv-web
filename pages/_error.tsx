import dynamic from "next/dynamic";

const Error = dynamic(() => import("@src/templates/error.template"), {
  ssr: false,
});

export default Error;
