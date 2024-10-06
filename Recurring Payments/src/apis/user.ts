import axiosInstance from "../utils/apis";

export type UserPayment = {
  id: number;
  userId: number;
  payrollInstanceId: number;
  amount: number;
  status: string;
  txHash: string;
  paidAt: number;
  updatedAt: string;
  createdAt: string;
};

export async function getUserPayments(): Promise<UserPayment[]> {
  const response = await axiosInstance.get(
    `${process.env.NEXT_PUBLIC_SERVER}/payment/user/list`
  );

  const orgUsers = response.data as UserPayment[];

  return orgUsers;
}
