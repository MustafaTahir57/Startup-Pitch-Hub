import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { after } from "next/server";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";

// The startup page uses ISR (revalidate after 60 seconds means datas will be cached and change made will reflect after rvalidation) and views uses SSR(run time update)  overall it is PPR

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client.withConfig({ useCdn: false }).fetch(STARTUP_VIEWS_QUERY, { id })

  console.log("Views", totalViews)

 after(async () => {
  await writeClient
    .patch(id)
    .setIfMissing({ views: 0 }) // 🔥 key fix
    .inc({ views: 1 })
    .commit();
});

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">Views: {totalViews}</span>
      </p>
    </div>
  );
};
export default View;