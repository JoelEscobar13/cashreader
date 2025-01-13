import React from 'react';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition'; // Ruta relativa a `VoiceInterface.js`
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';    // Ruta relativa a `VoiceInterface.js`

const VoiceInterface = () => {
  // Hook para síntesis de voz
  const { speak } = useSpeechSynthesis();

  // Hook para reconocimiento de voz
  const { startListening, stopListening, transcript } = useSpeechRecognition((command) => {
    if (command.includes('billete')) {
      speak('Por favor, acerca el billete a la cámara para identificarlo.');
    } else {
      speak(`No entendí el comando: ${command}`);
    }
  });

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Interfaz de Voz para Lector de Billetes</h1>
      <div>
        <button onClick={startListening} style={buttonStyle}>
          Iniciar Reconocimiento
        </button>
        <button onClick={stopListening} style={buttonStyle}>
          Detener Reconocimiento
        </button>
      </div>
      <p><strong>Comando Reconocido:</strong> {transcript || 'Ninguno'}</p>
      <button onClick={() => speak('Bienvenido al lector de billetes.')} style={buttonStyle}>
        Iniciar Narrador
      </button>
    </div>
  );
};

// Estilo básico para los botones
const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default VoiceInterface;

