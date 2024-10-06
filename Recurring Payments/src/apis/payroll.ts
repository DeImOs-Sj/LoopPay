import axiosInstance from "@/utils/apis";

export type OrgPayroll = {
  id: number;
  name: string;
  organizationId: string;
  state: string;
  paymentType: string;
  paymentDate: string;
  paymentDateOfTheMonth: number;
  updatedAt: string;
  createdAt: string;
};

export async function getOrgPayrolls(): Promise<OrgPayroll[]> {
  const response = await axiosInstance.get(
    `${process.env.NEXT_PUBLIC_SERVER}/payroll/org/list`
  );

  const orgUsers = response.data as OrgPayroll[];

  return orgUsers;
}
