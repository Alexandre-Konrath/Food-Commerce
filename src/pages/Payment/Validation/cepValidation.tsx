import axios from "axios";
import { toast } from 'react-toastify';

type FieldName =
  | "number"
  | "street"
  | "neighborhood"
  | "city"
  | "state";

export const cepValidation = async (setValue: (name: FieldName, value: string) => void, document: Document) => {
  const zipCodeElement = document.getElementById('zipCode') as HTMLInputElement;
  if (zipCodeElement) {
    const cep = zipCodeElement.value;

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.data.erro) {
        setValue('street', response.data.logradouro || '');
        setValue('neighborhood', response.data.bairro || '');
        setValue('city', response.data.localidade || '');
        setValue('state', response.data.uf || '');
        setValue('number', ''); // Limpar o campo número
        const numberElement = document.getElementById('number') as HTMLInputElement;
        if (numberElement) {
          numberElement.focus(); // Definir o foco no campo número
        }
      } else {
        toast.error('CEP inválido ou não encontrado .');
      }
    } catch (error) {
      toast.error('O campo CEP está vázio.');
    }
  }
};
