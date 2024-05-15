export type RegistrationForm = {
  name: string;
  lastname: string;
  patronymic: string;
  series: number;
  number: number;
  birthday: string;
  gender: string;
  departmentCode: string;
  issuedBy: string;
  issuedDate: string;
  address: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  url: string;
};

export type LoginForm = {
  email: string;
  password: string;
};
