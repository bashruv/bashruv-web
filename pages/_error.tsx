import dynamic from "next/dynamic";

const ErrorPage = dynamic(() => import("@src/templates/error.template"), {
  ssr: false,
});

export default ErrorPage;
