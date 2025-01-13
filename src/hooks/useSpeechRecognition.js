import { useState, useEffect } from 'react';

export const useSpeechRecognition = (onCommand) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error('Speech Recognition API no está soportada en este navegador.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'es-ES'; // Ajusta el idioma
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => {
      console.log('Iniciando reconocimiento de voz...');
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
      console.log('Comando reconocido:', result);
      onCommand(result); // Llama la función pasada como parámetro
    };

    recognition.onerror = (event) => {
      console.error('Error en el reconocimiento:', event.error);
    };

    recognition.onend = () => {
      console.log('Reconocimiento de voz detenido.');
      setIsListening(false);
    };

    if (isListening) recognition.start();
    else recognition.stop();

    return () => recognition.abort();
  }, [isListening, onCommand]);

  return { startListening: () => setIsListening(true), stopListening: () => setIsListening(false), transcript };
};
