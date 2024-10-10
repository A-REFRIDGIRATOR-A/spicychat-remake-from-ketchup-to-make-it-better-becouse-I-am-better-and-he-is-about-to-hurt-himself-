"use server";

import type { Bot } from "@/components/lib/types/bot";
import { revalidatePath } from "next/cache";

export async function getBots(limit: number = 48): Promise<{ data: Bot[] }> {
  const body = `{
    "searches": [
      {
          "query_by": "name,title,tags,creator_username,character_id",
          "sort_by": "num_messages_24h:desc",
          "highlight_full_fields": "name,title,tags,creator_username,character_id",
          "collection": "characters",
          "q": "*",
          "facet_by": "tags",
          "filter_by": "application_ids:spicychat && tags:!Step-Family && is_nsfw:false",
          "max_facet_values": 100,
          "page": 1,
          "per_page": ${limit}
      }
    ]
  }`;

  try {
    const r = await fetch(`${process.env.NEXT_PUBLIC_GET_BOTS_URL}`, {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "text/plain",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Not/A)Brand";v="8", "Chromium";v="126", "Microsoft Edge";v="126"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
      },
      referrerPolicy: "same-origin",
      body: body,
      method: "POST",
    });

    const data = (await r.json()).results[0].hits;

    const transformedData: Bot[] = data.map((hit: { document: Bot }) => {
      return {
        ...hit.document,
        avatar_url: `https://ndsc.b-cdn.net/${hit.document.avatar_url}`,
      };
    });

    revalidatePath("/");

    return {
      data: transformedData,
    };
  } catch (err) {
    return {
      data: [
        {
          id: "1",
          avatar_url: "/assets/harley.png",
          name: "Harley Quinn",
          title: `Harley Quinn (Harleen Frances Quinzel) is a character appearing in
                    American comic books published by DC Comics.`,
          greeting: "",
          persona: "",
          tags: ["Female", "SFW"],
          definition_visible: false,
          is_nsfw: false,
          creator_username: "User123",
          num_messages: 204,
          num_messages_24h: 56,
          rating_score: 0.8,
          token_count: 572,
          createdAt: 0,
          updatedAt: 0,
        },
      ],
    };
  }
}
