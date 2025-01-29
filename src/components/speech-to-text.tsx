'use client';

import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';

import { Button } from '@/ui/button';

const SpeechToText = () => {
  const [text, setText] = useState<string | undefined>();
  const [isRecording, setIsRecording] = useState(false);

  const socket = useRef<Socket | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  useEffect(() => {
    socket.current = io('http://localhost:4000');

    socket.current.on('text', (data) => {
      setText((prev) => prev + ' ' + data);
    });

    return () => {
      socket.current?.disconnect();
    };
  }, []);

  const startRecording = async () => {
    setIsRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder.current = new MediaRecorder(stream, { mimeType: 'audio/webm' });

    mediaRecorder.current.ondataavailable = (event) => {
      audioChunks.current.push(event.data);
      if (socket.current?.connected) {
        socket.current.emit('audio', event.data);
      }
    };

    mediaRecorder.current.start(2000); // Отправляем аудио каждые 2 секунды
  };

  const stopRecording = () => {
    setIsRecording(false);
    mediaRecorder.current?.stop();
  };

  return (
    <>
      <div>
        {text}
      </div>
      <Button onClick={startRecording}>
        Start
      </Button>
      <Button color="error" onClick={stopRecording}>
        Stop
      </Button>
    </>
  );
};

export { SpeechToText };
