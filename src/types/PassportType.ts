export type PassportType = {
  id: string;
  series: number;
  number: number;
  birthday: string;
  gender: string;
  departmentCode: string;
  issuedBy: string;
  issuedDate: string;
  address: string;
  name: string;
  lastname: string;
  patronymic: string;
};

export type PassportChangeType = {
  name: string;
  lastname: string;
  patronymic: string;
  id: string;
  passport: string;
  birthday: string;
  departmentCode: string;
  issuedBy: string;
  issuedDate: string;
  address: string;
};

export type UpdatePassportRequest = {
  id: string;
  name: string;
  lastname: string;
  patronymic: string;
  series: number;
  number: number;
  birthday: Date;
  gender: string;
  departmentCode: string;
  issuedBy: string;
  issuedDate: Date;
  address: string;
};
