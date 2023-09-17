import { useEffect } from "react";
import { useRouter } from "next/router";
import { Spinner, fr } from "@prismane/core";

export default function Docs() {
  const router = useRouter();

  useEffect(() => {
    router.push("/docs/getting-started");
  }, [router]);

  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <Spinner className="text-primary-500" w={fr(16)} h={fr(16)} />
    </div>
  );
}
