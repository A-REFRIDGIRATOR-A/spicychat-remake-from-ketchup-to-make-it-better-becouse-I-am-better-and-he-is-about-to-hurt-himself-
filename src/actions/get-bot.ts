"use server";

import type { Bot } from "@/components/lib/types/bot";

export async function getBot(id: string): Promise<{ data: Bot | null }> {
  try {
    const req = await fetch(`${process.env.NEXT_PUBLIC_GET_BOT_URL}${id}`, {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Not/A)Brand";v="8", "Chromium";v="126", "Microsoft Edge";v="126"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "x-app-id": "spicychat",
        "x-country": "US",
        "x-guest-userid": "35918402-df0a-47d5-9904-fade10858851",
      },
      referrerPolicy: "same-origin",
      body: null,
      method: "GET",
    });

    const data = (await req.json()) as Bot;

    return {
      data,
    };
  } catch (err) {
    return {
      data: null,
    };
  }
}
