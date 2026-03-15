import { SessionsClient } from "@google-cloud/dialogflow";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { query } = await request.json();

    if (!query || typeof query !== "string") {
      return NextResponse.json({ error: "Invalid query" }, { status: 400 });
    }

    const projectId = process.env.GOOGLE_PROJECT_ID;
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    if (!projectId || !clientEmail || !privateKey) {
      console.error("Missing Dialogflow environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const sessionClient = new SessionsClient({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      projectId,
    });

    const sessionPath = sessionClient.projectAgentSessionPath(
      projectId,
      `session-${Date.now()}`
    );

    const dialogflowRequest = {
      session: sessionPath,
      queryInput: {
        text: {
          text: query,
          languageCode: "en-US",
        },
      },
    };

    const [response] = await sessionClient.detectIntent(dialogflowRequest);
    const result = response.queryResult;

    return NextResponse.json({
      response: result?.fulfillmentText || "",
    });
  } catch (error) {
    console.error("Dialogflow error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}