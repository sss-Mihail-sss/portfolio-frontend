'use server';

import { createOpenAI } from '@ai-sdk/openai';
import { generateObject } from 'ai';
import { z } from 'zod';

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  compatibility: 'strict',
});

async function translateText(text: string, fromLang: string, toLang: string) {
  const prompt = `You act as a translator, spelling corrector and editor. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text. Please translate my text from ${fromLang}, improving the language to a more literary version in ${toLang}. Make sure that the ${toLang} version is grammatically and semantically correct. Keep the original meaning the same. Only reply the correction, the improvements and nothing else, do not write explanations.\n\nMy text: ${text}`;

  const result = await generateObject({
    model: openai('gpt-4o-mini', { structuredOutputs: true }),
    schemaName: 'job',
    schemaDescription: 'Translate job to another language',
    schema: z.object({
      title: z.string(),
      requirements: z.string(),
      description: z.string(),
    }),
    prompt,
  });

  return result.object;
}
