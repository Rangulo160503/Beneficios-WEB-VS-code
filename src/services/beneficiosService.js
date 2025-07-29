// beneficiosService.js

export const fetchBeneficios = async () => {
  try {
    const response = await fetch("/api/Beneficio"); // ✅ Relativa, activará el proxy de Vite
    if (!response.ok) {
      throw new Error(`Error al obtener beneficios: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("🛑 Error al cargar beneficios:", error.message);
    return [];
  }
};
