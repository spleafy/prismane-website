import { useEffect } from "react";
import { useRouter } from "next/router";
import { Spinner, fr } from "@prismane/core";
// Content
import content from "@/content";

export default function Page() {
  const router = useRouter();

  const { category } = router.query;

  useEffect(() => {
    if (category) {
      const item = content.find((nav: any) => nav.slug === category).items[0]
        .slug;

      router.push(`/docs/${category}/${item}`);
    }
  }, [category, router]);

  return (
    <div className="w-screen h-[90vh] flex justify-center items-center">
      <Spinner className="text-primary-500" w={fr(16)} h={fr(16)} />
    </div>
  );
}
