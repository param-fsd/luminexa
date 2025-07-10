import { SessionsClient } from '@google-cloud/dialogflow';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { query } = await request.json();
    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'Invalid query' }, { status: 400 });
    }

    // Log credentials for debugging
    console.log('Credentials:', {
      project_id: process.env.GOOGLE_PROJECT_ID,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: !!process.env.GOOGLE_PRIVATE_KEY,
    });

    // Initialize Dialogflow client
    const sessionClient = new SessionsClient({
      credentials: {
        project_id: process.env.GOOGLE_PROJECT_ID,
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
    });

    const sessionPath = sessionClient.projectAgentSessionPath(
      process.env.GOOGLE_PROJECT_ID,
      `session-${Date.now()}` // Dynamic session ID
    );

    const dialogflowRequest = {
      session: sessionPath,
      queryInput: {
        text: {
          text: query,
          languageCode: 'en-US',
        },
      },
    };

    const [response] = await sessionClient.detectIntent(dialogflowRequest);
    const result = response.queryResult;

    return NextResponse.json({ response: result.fulfillmentText });
  } catch (error) {
    console.error('Dialogflow error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}