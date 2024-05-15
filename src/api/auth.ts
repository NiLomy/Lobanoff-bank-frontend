import { LoginForm, RegistrationForm, TokenType } from "@/types";
import { auth } from "./api";
import { RegistryInterface } from "@/app/(auth)/register/page";

const getSeries = (p: string) => Number(p.split(" ")[0]);
const getNumber = (p: string) => Number(p.split(" ")[1]);
const getPhone = (p: string) => {
  let res = "8";
  let i;
  if (p === "+") i = 2;
  else i = 1;
  while (i < p.length) {
    if (p[i] !== " ") {
      res += p[i];
    }
    i++;
  }
  return res;
};

export async function verifyUser(code: string): Promise<TokenType | null> {
  try {
    const data = await auth.post("verify", {
      code,
    });
    return data.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function registerUser(
  form: RegistryInterface,
): Promise<TokenType | null> {
  const request: RegistrationForm = {
    name: form.name,
    lastname: form.surname,
    patronymic: form.patronymic,
    series: getSeries(form.passport),
    number: getNumber(form.passport),
    birthday: form.birthday,
    gender: form.gender,
    departmentCode: form.department_code,
    issuedBy: form.issued_by,
    issuedDate: form.issued_date,
    address: form.address,
    email: form.email,
    password: form.password,
    confirmPassword: form.confirm_password,
    phone: getPhone(form.phone),
    url: "http://localhost:3000/verify?code=",
  };
  console.log(request);

  try {
    const data = await auth.post("register", form);
    return data.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function loginUser(form: LoginForm): Promise<TokenType | null> {
  try {
    const data = await auth.post("login", form);
    return data.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function getAccess(refresh: string): Promise<TokenType | null> {
  try {
    const data = await auth.post("access", {
      refreshToken: refresh,
    });
    return data.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}
