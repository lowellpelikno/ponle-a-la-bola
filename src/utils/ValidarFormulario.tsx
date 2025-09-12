
import type { UserData as FormData } from '../interface/SystemInterfaces';
export const validarFormulario = (form: FormData): string[] => {
  return [
    form.name.trim().length < 3 && 'El nombre debe tener al menos 3 caracteres.',
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) && 'El email no tiene un formato válido.',
    !/^\d{10}$/.test(form.phone) && 'El teléfono debe contener exactamente 10 dígitos numéricos.',
  ].filter(Boolean) as string[];

};
