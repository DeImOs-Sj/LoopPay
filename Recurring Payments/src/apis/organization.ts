import axiosInstance from "../utils/apis";

export type OrgUser = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  avatar: string | null;
  stellarAccountId: string;
};

export type AddUserToOrgResponse = {
  id: number;
  userId: number;
  orgId: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Balance = {
  id: number;
  orgId: number;
  amount: number;
};

export type Deposit = {
  id: number;
  orgId: number;
  amount: number;
  token: string;
  txHash: string;
  createdAt: string;
  updatedAt: string;
};

export async function addUserToOrg({
  userEmail,
}: {
  userEmail: string;
}): Promise<AddUserToOrgResponse> {
  const response = await axiosInstance.patch(`/organization/user`, {
    userEmail,
  });

  const data = response.data as AddUserToOrgResponse;

  return data;
}

export async function getOrganizationUsers(): Promise<OrgUser[]> {
  const response = await axiosInstance.get(`/organization/users`);
  console.log(response.data);
  const orgUsers = response.data as {
    createdAt: string;
    user: {
      id: number;
      email: string;
      stellarAccountId: string;
      Profile: {
        name: string;
        avatar: string | null;
      };
    };
  }[];

  return orgUsers.map((item) => ({
    id: item.user.id,
    name: item.user.Profile.name,
    stellarAccountId: item.user.stellarAccountId,
    email: item.user.email,
    createdAt: item.createdAt,
    avatar: item.user.Profile.avatar,
  }));
}

export async function getBalance(): Promise<Balance> {
  const response = await axiosInstance.get(`/wallet/balance`);

  const orgUsers = response.data as Balance;

  return orgUsers;
}

export async function getDeposits(): Promise<Deposit> {
  const response = await axiosInstance.get(`/wallet/deposit`);

  const orgUsers = response.data as Deposit;

  return orgUsers;
}
