export function generateUniqueId(accountNumber: number) {
  // Obtener el timestamp actual en milisegundos
  const timestamp = new Date().getTime();

  // Concatenar el número de cuenta y el timestamp
  const combinedString = accountNumber + timestamp.toString();

  // Generar un hash a partir de la cadena combinada
  const uniqueId = hashCode(combinedString);

  return uniqueId;
}

// Función para generar un hash simple

function hashCode(str: string) {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convertir a 32-bit integer
  }
  return Math.abs(hash);
}
