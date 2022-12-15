// helper que nos permite transformar uma propriedade já setada para outro tipo | ou transformar uma propriedade obrigatória em opcional
export type Replace<T, R> = Omit<T, keyof R> & R;
