const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");

  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-3.1-flash-lite",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };

  const safetySettings=[
    {
        category:HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category:HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category:HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category:HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    }
  ];

  // Creates a fresh chat session per call. A single module-level chatSession would,
  // once called from the server, accumulate history across every request from every
  // user in the same process (cross-user context bleed + unbounded prompt growth).
  export function createChatSession() {
    return model.startChat({
      generationConfig,
      safetySettings,
    });
  }
