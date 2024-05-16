export type UserType = {
  id: number;
  name: string;
  lastname: string;
  patronymic: string;
  email: string;
  phone: string;
  role: string;
  isDeleted: boolean;
};

export interface ChangeUserInterface {
  id: string;
  email: string;
  phone: string;
  password: string | null;
  confirmPassword: string | null;
}
