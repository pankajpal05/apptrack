import { headers } from "next/headers";

export default function header() {
  const headersList = headers();
  const referer = headersList.get("referer");

  return <div>Referer: {referer}</div>;
}
