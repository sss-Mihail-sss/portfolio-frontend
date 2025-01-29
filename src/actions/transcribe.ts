'use server';

import { OpenAI } from 'openai';
import { join } from 'path';
import { writeFileSync, createReadStream, unlinkSync } from 'fs';

const client = new OpenAI({
  apiKey: process.env.CHAT_GPT_KEY
});

export async function transcribe(audioBlob: Blob) {
  try {
    const path = join('/tmp', 'audio.webm');
    const buffer = Buffer.from(await audioBlob.arrayBuffer());

    writeFileSync(path, buffer);

    const response = await client.audio.transcriptions.create({
      file: createReadStream(path),
      model: 'whisper-1',
      language: 'ru',
    });

    unlinkSync(path);
    return response.text;
  } catch (error) {
    console.error(error);
  }
}
