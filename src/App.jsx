import { useState } from "react"
import Vigenere from './logic/vigenere'

function App() {
  const vigenere = new Vigenere();

  const [plainText, setPlainText] = useState('')
  const [key, setKey] = useState('')
  const [cipherText, setCipherText] = useState('')
  const [decryptedText, setDecryptedText] = useState('')
  return (
    <div>
      <label htmlFor="plainText">Plain Text</label>
      <input
        type="text"
        id="plainText"
        value={plainText}
        onChange={(e) => setPlainText(e.target.value)}
      />
      <label htmlFor="key">Key</label>
      <input
        type="text"
        id="key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <label htmlFor="cipherText">Cipher Text</label>
      <input
        type="text"
        id="cipherText"
        value={cipherText}
        onChange={(e) => setCipherText(e.target.value)}
      />
      <label htmlFor="decryptedText">Decrypted Text</label>
      <input
        type="text"
        id="decryptedText"
        value={decryptedText}
        onChange={(e) => setDecryptedText(e.target.value)}
      />
      <button
        type="button"
        onClick={() => setCipherText(vigenere.cifrar(plainText, key))}
      >
        Encrypt
      </button>
      <button
        type="button"
        onClick={() => setDecryptedText(vigenere.descifrar(cipherText, key))}
      >
        Decrypt
      </button>
    </div>
  )
}

export default App